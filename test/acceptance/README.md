## How to run e2e UI test

### Pre-requisite

- run `selenium` in Docker
  ```
  docker run -d --network="host" -v /dev/shm:/dev/shm selenium/standalone-chrome-debug
  ```
- start `tomaati-timer` app ([Instruction](https://github.com/bandantonio/tomaatti-timer/blob/master/README.md#deploy-manually))

### Run e2e UI test

```
npm run test:ui test/acceptance/features/
```
