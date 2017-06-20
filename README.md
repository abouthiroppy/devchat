# devchat

A [devchat.tv](https://devchat.tv/)'s client.

## Install
```
$ npm i devchat
```

## Usage
```javascript
const devchat = require('devchat');

devchat
  .getPodCasts
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
```
