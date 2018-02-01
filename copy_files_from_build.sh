#! /bin/bash

if [ -d "static" ]; then
  rm -rf build/static
fi

cp build/asset-manifest.json .
cp build/favicon.png .
cp build/index.html .
cp build/manifest.json .
cp build/service-worker.js .
cp -rp build/static .
