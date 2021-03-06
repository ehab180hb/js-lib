# [4.7.0](https://github.com/NaturalCycles/js-lib/compare/v4.6.0...v4.7.0) (2019-04-26)


### Features

* [@memo](https://github.com/memo)Promise decorator ([8f81f14](https://github.com/NaturalCycles/js-lib/commit/8f81f14))

# [4.6.0](https://github.com/NaturalCycles/js-lib/compare/v4.5.1...v4.6.0) (2019-04-10)


### Features

* DeepReadonly type ([e597095](https://github.com/NaturalCycles/js-lib/commit/e597095))

## [4.5.1](https://github.com/NaturalCycles/js-lib/compare/v4.5.0...v4.5.1) (2019-04-08)


### Bug Fixes

* **memo:** disable 0-arg optimization ([56ff7d4](https://github.com/NaturalCycles/js-lib/commit/56ff7d4))

# [4.5.0](https://github.com/NaturalCycles/js-lib/compare/v4.4.1...v4.5.0) (2019-03-30)


### Features

* arrayRange, dedupeArray, flatArray ([6f37293](https://github.com/NaturalCycles/js-lib/commit/6f37293))

## [4.4.1](https://github.com/NaturalCycles/js-lib/compare/v4.4.0...v4.4.1) (2019-03-26)


### Bug Fixes

* errorObjectToAppError, stack is readonly property in some envs ([e308f6e](https://github.com/NaturalCycles/js-lib/commit/e308f6e))

# [4.4.0](https://github.com/NaturalCycles/js-lib/compare/v4.3.0...v4.4.0) (2019-03-24)


### Features

* isPrimitive() ([62507b4](https://github.com/NaturalCycles/js-lib/commit/62507b4))


### Performance Improvements

* memo() optimized ~100 times faster for 0 args ([6483acd](https://github.com/NaturalCycles/js-lib/commit/6483acd))

# [4.3.0](https://github.com/NaturalCycles/js-lib/compare/v4.2.1...v4.3.0) (2019-03-15)


### Features

* improve anyToErrorMessage ([ef49957](https://github.com/NaturalCycles/js-lib/commit/ef49957))

## [4.2.1](https://github.com/NaturalCycles/js-lib/compare/v4.2.0...v4.2.1) (2019-03-15)


### Bug Fixes

* HttpError with generic DATA_TYPE ([12a7d40](https://github.com/NaturalCycles/js-lib/commit/12a7d40))

# [4.2.0](https://github.com/NaturalCycles/js-lib/compare/v4.1.0...v4.2.0) (2019-03-15)


### Features

* HttpErrorResponse, Admin401ErrorData, Admin403ErrorData ([d159381](https://github.com/NaturalCycles/js-lib/commit/d159381))

# [4.1.0](https://github.com/NaturalCycles/js-lib/compare/v4.0.0...v4.1.0) (2019-03-11)


### Features

* remove ErrorObject.name ([5557d4e](https://github.com/NaturalCycles/js-lib/commit/5557d4e))

# [4.0.0](https://github.com/NaturalCycles/js-lib/compare/v3.2.0...v4.0.0) (2019-03-09)


### Code Refactoring

* "flatten" utils into functions ([eba7d97](https://github.com/NaturalCycles/js-lib/commit/eba7d97))


### BREAKING CHANGES

* all "utils" from this package are now flattened and just their functions are exported.
Example.
Before: objectUtil.by()
After: by()

Before: import { objectUtil } from '@naturalcycles/js-lib'
After: import { by } from '@naturalcycles/js-lib'

# [3.2.0](https://github.com/NaturalCycles/js-lib/compare/v3.1.0...v3.2.0) (2019-03-08)


### Features

* remove unused LogFunction, LOG_LEVEL ([148496b](https://github.com/NaturalCycles/js-lib/commit/148496b))

# [3.1.0](https://github.com/NaturalCycles/js-lib/compare/v3.0.0...v3.1.0) (2019-02-25)


### Features

* errorSharedUtil.errorObjectToHttpError, appErrorToHttpError ([f9cf571](https://github.com/NaturalCycles/js-lib/commit/f9cf571))

# [3.0.0](https://github.com/NaturalCycles/js-lib/compare/v2.2.2...v3.0.0) (2019-02-23)


### Features

* upgrade shared-module with jest24 ([4ae979a](https://github.com/NaturalCycles/js-lib/commit/4ae979a))


### BREAKING CHANGES

* removed `silentConsoleIfRunAll()`, cause now it's supported by `shared-module` automatically (and because it stopped working with jest24)

## [2.2.2](https://github.com/NaturalCycles/js-lib/compare/v2.2.1...v2.2.2) (2019-02-22)


### Bug Fixes

* err instanceof AppError, err instanceof Error ([19022ef](https://github.com/NaturalCycles/js-lib/commit/19022ef))

## [2.2.1](https://github.com/NaturalCycles/js-lib/compare/v2.2.0...v2.2.1) (2019-02-22)


### Bug Fixes

* fixing error.name for AppError, HttpError ([a2094e2](https://github.com/NaturalCycles/js-lib/commit/a2094e2))

# [2.2.0](https://github.com/NaturalCycles/js-lib/compare/v2.1.0...v2.2.0) (2019-02-22)


### Features

* err.data.userMessage > err.data.userFriendly (boolean) ([27ff0ab](https://github.com/NaturalCycles/js-lib/commit/27ff0ab))

# [2.1.0](https://github.com/NaturalCycles/js-lib/compare/v2.0.2...v2.1.0) (2019-02-16)


### Features

* export ClassType ([ce897fa](https://github.com/NaturalCycles/js-lib/commit/ce897fa))

## [2.0.2](https://github.com/NaturalCycles/js-lib/compare/v2.0.1...v2.0.2) (2019-02-10)


### Bug Fixes

* export ErrorObject ([2735e5e](https://github.com/NaturalCycles/js-lib/commit/2735e5e))

## [2.0.1](https://github.com/NaturalCycles/js-lib/compare/v2.0.0...v2.0.1) (2019-02-09)


### Bug Fixes

* use [@naturalcycles](https://github.com/naturalcycles)/semantic-release ([3e65c99](https://github.com/NaturalCycles/js-lib/commit/3e65c99))

# [2.0.0](https://github.com/NaturalCycles/js-lib/compare/v1.0.0...v2.0.0) (2019-02-09)


### Features

* adopting semver ([988d16c](https://github.com/NaturalCycles/js-lib/commit/988d16c))


### BREAKING CHANGES

* bump major version

# 1.0.0 (2019-02-09)


### Bug Fixes

* don't require yarn ([6d9b5cd](https://github.com/NaturalCycles/js-lib/commit/6d9b5cd))
* export error classes ([aed1a38](https://github.com/NaturalCycles/js-lib/commit/aed1a38))
* LRU import in memoCache() ([402c7cc](https://github.com/NaturalCycles/js-lib/commit/402c7cc))
* package.main missing ([3b7e442](https://github.com/NaturalCycles/js-lib/commit/3b7e442))
* prettier by upgrading shared-module [ci-skip] ([0ab2225](https://github.com/NaturalCycles/js-lib/commit/0ab2225))
* publish also as cjs ([c8a2707](https://github.com/NaturalCycles/js-lib/commit/c8a2707))
* remove custom errors ([478a0d5](https://github.com/NaturalCycles/js-lib/commit/478a0d5))
* remove promise utils ([155a28f](https://github.com/NaturalCycles/js-lib/commit/155a28f))
* remove unneeded runAllTests() ([c831ca8](https://github.com/NaturalCycles/js-lib/commit/c831ca8))
* revert - use cjs by default ([5f20729](https://github.com/NaturalCycles/js-lib/commit/5f20729))
* test ([cab39c1](https://github.com/NaturalCycles/js-lib/commit/cab39c1))
* transpile down to es5 ([7610097](https://github.com/NaturalCycles/js-lib/commit/7610097))
* use esm ([375a557](https://github.com/NaturalCycles/js-lib/commit/375a557))


### Features

* [@memo](https://github.com/memo) and [@memo](https://github.com/memo)Cache now support .dropCache() ([f102484](https://github.com/NaturalCycles/js-lib/commit/f102484))
* adopting semver ([ab54d70](https://github.com/NaturalCycles/js-lib/commit/ab54d70))
* common error classes ([853cc28](https://github.com/NaturalCycles/js-lib/commit/853cc28))
* distribute as es2015 (was: es5) ([df75769](https://github.com/NaturalCycles/js-lib/commit/df75769))
* errorSharedUtil ([0774110](https://github.com/NaturalCycles/js-lib/commit/0774110))
* logFunction interface ([3b81e4b](https://github.com/NaturalCycles/js-lib/commit/3b81e4b))
* new error interfaces ([e77d39e](https://github.com/NaturalCycles/js-lib/commit/e77d39e))
* new error models ([b9e1d25](https://github.com/NaturalCycles/js-lib/commit/b9e1d25))
* silentConsole() to silent console.time() and console.table() ([ddabd4e](https://github.com/NaturalCycles/js-lib/commit/ddabd4e))
* transpiling ([e35f747](https://github.com/NaturalCycles/js-lib/commit/e35f747))


### BREAKING CHANGES

* introducing ErrorObject interface and transitions to/from stock js Error
