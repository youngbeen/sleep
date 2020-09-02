
[TOC]

## Sleep

Ever think about use `setTimeout` like promise? Now it's here.

### Features

* Friendly api yet as promise
* Light as feather(only 365B)

### Install

Install it via npm

```shell
npm install @youngbeen/sleep
```

### Import

```javascript
import { sleep } from '@youngbeen/sleep'
```

### Usage

```javascript
sleep(2000).then(() => {
  // run after 2 seconds
})
```
