#!/usr/bin/env bash

# Get the JSON response from the GitHub API and save it to a file
curl -H "Authorization: token $PAT_FOR_VSIX" \
    -H "Accept: application/vnd.github.v3+json" \
    -s "https://api.github.com/repos/$OWNER_FOR_VSIX/$REPO_FOR_VSIX/releases" > releases.json

# Extract the download URL for the first asset of the latest release
ASSET_ID=$(jq -r '.[0].assets[0].id' releases.json)
ASSET_NAME=$(jq -r '.[0].assets[0].name' releases.json)

curl ${curl_custom_flags} \
     -L \
     -H "Accept: application/octet-stream" \
     -H "Authorization: Bearer ${PAT_FOR_VSIX}" \
        "https://api.github.com/repos/${OWNER_FOR_VSIX}/${REPO_FOR_VSIX}/releases/assets/${ASSET_ID}" -o "/tmp/$ASSET_NAME"