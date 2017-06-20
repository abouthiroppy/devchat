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
  .getPodCasts('category')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

devchat
  .getPodCast('category', 'title')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
```
