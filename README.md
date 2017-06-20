# devchat
[![Build Status](https://travis-ci.org/abouthiroppy/devchat.svg?branch=master)](https://travis-ci.org/abouthiroppy/devchat)
[![codecov](https://codecov.io/gh/abouthiroppy/devchat/branch/master/graph/badge.svg)](https://codecov.io/gh/abouthiroppy/devchat)
[![npm version](https://badge.fury.io/js/devchat.svg)](https://badge.fury.io/js/devchat)


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
