# async-which [![Build Status](https://travis-ci.com/jafri/async-which.svg?branch=master)](https://travis-ci.com/jafri/async-which)

> Find binary executable path

0-dependancy TS async cross-platform utility to find path of executable

## Install
NPM
```
npm i async-which
```

Yarn
```
yarn add async-which
```

## Usage
```js
import which from "async-which"

(async () => {
    const pathToBin = await which('node')
    console.log(pathToBin) // /Users/user/.nvm/versions/node/v8.10.0/bin/node
})()
```
