![](https://raw.githubusercontent.com/Upsidedly/codewars-api-types/master/media/codewars-api-types2.png)
![](https://img.shields.io/librariesio/dependents/npm/codewars-api-types) ![](https://img.shields.io/discord/846624424199061524) ![](https://img.shields.io/npm/dw/codewars-api-types) ![](https://img.shields.io/github/issues/Upsidedly/codewars-api-types) ![](https://img.shields.io/github/stars/Upsidedly/codewars-api-types?style=social) ![](https://img.shields.io/npm/v/codewars-api-types) ![](https://img.shields.io/badge/maintainer-upsided-yellowgreen)

Unofficial typings for the codewars API for use in libraries

## Installation
Install with [npm](https://www.npmjs.com) / [yarn](https://yarnpkg.com) / [pnpm](https://pnpm.js.org)

```bash
npm install codewars-api-types
yarn add codewars-api-types
pnpm add codewars-api-types
```

### Usage

> You can only import this module by specifying the API version you want to target. Append `/v*` to the import path, where the `*` represents the API version.

Below are some examples:

```ts
// Typescipt/ES Module
import { User } from 'codewars-api-types/v1';
```

```ts
import * as Types from 'codewars-api-types/v1';
```