1. 해시 암호화
2. 머클루트 구하기
3. 블록 내용 완성 (채굴 과정)

```sh
npm i crypto-js
npm i merkle
```

```sh
npm i -D typescript ts-node @types/node tsc-alias tsconfig-paths
npm i crypto-js @types/crypto-js
npm i jest ts-jest @types/jest
npm i merkle @types/merkle
```

```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "outDir": "./dist",
    "target": "ES6",
    "esModuleInterop": true,
    "baseUrl": ".",
    "paths": {
      "@core/*": ["src/core/*"]
    }
  }
}
```
