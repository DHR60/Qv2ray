#!/bin/bash

MAX_RETRIES=3
RETRY_DELAY=5

download_with_retry() {
    local url="$1"
    local output="$2"
    local retry=0

    while true; do
        curl -sL "$url" -o "$output"
        if [ $? -eq 0 ]; then
            return 0
        fi

        retry=$((retry + 1))
        if [ $retry -ge $MAX_RETRIES ]; then
            echo "Download failed after $MAX_RETRIES retries: $url"
            return 1
        fi

        echo "Download failed, retrying in $RETRY_DELAY seconds..."
        sleep $RETRY_DELAY
    done
}

get_json_with_retry() {
    local url="$1"
    local retry=0

    while true; do
        local json=$(curl -s "$url" | jq ".assets[] | {browser_download_url, name}" -c | grep "$DEPS_CATEGORY-$DEPS_OS")
        if [ -n "$json" ]; then
            echo "$json"
            return 0
        fi

        retry=$((retry + 1))
        if [ $retry -ge $MAX_RETRIES ]; then
            echo "Error: Failed to fetch JSON data from $url after $MAX_RETRIES retries."
            return 1
        fi

        echo "Failed to fetch JSON data, retrying in $RETRY_DELAY seconds..."
        sleep $RETRY_DELAY
    done
}

mkdir -p deps; cd ./deps
mkdir -p downloaded; cd ./downloaded;

DEPS_OS=$1
DEPS_CATEGORY=$2

_JSON=$(get_json_with_retry "https://api.github.com/repos/Qv2ray/Qv2ray-deps/releases/latest")

if [ $? -ne 0 ]; then
    exit 1
fi

echo $_JSON

for data in $(echo $_JSON)
do
    NAME=$(echo $data | jq ".name" -r)
    URL=$(echo $data | jq ".browser_download_url" -r)
    echo "Downloading: $NAME"
    download_with_retry "$URL" "$NAME"

    if [ $? -ne 0 ]; then
        exit 1
    fi
done

cd ..

for f in $(ls ./downloaded | grep "$DEPS_OS.*")
do
    7z x -y ./downloaded/$f
    if [ $? -ne 0 ]; then
        echo "Error: Failed to extract $f"
        exit 1
    fi
done

if [[ "$DEPS_CATEGORY" == "tools" ]]; then
    mkdir -p ../tools
    cp -rvf ./tools ../
    rm -rvf ./tools
else
    echo "Cleaning up $DEPS_CATEGORY-$DEPS_OS"
    rm -rvf ../$DEPS_CATEGORY-$DEPS_OS/*
    mkdir -p ../$DEPS_CATEGORY-$DEPS_OS
    cp -rvf ./$DEPS_OS-$DEPS_CATEGORY/installed/$DEPS_CATEGORY-$DEPS_OS/* ../$DEPS_CATEGORY-$DEPS_OS
    rm -rvf ./$DEPS_OS-$DEPS_CATEGORY/
    cd ..
fi