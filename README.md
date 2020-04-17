# checkping

A utility for checking latency on endpoints

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install.

```bash
npm install checkping
```

## Usage

```js
import checkping from "checkping";

checkping(ip, multiplier); // ip: server IP, multiplier: tuning for delay, return: Promise<number>
```
