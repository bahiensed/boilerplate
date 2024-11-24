# Boilerplate

## Node

### Install Node

### Init Node Project
```bash
npm init
```


## TypeScript
TypeScript is a language for application-scale JavaScript.  
TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS.  
TypeScript compiles to readable, standards-based JavaScript.  

### Install TypeScript as a development dependency
```bash
npm install --save-dev typescript
```
### Init TypeScript (_automagically_ creates `tsconfig.json`)
```bash
npx tsc --init
```
### Minimum recommended `tsconfig.json` config
```bash
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "outDir": "./dist"
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```


## `tsx`
TypeScript Execute (tsx): The easiest way to run TypeScript in Node.js

### Install `tsx`
```bash
npm install --save-dev tsx
```

## Express

### Install Express


## Package config

### Add `dev`, `watch`, `build` and `start` scripts to `package.json`
```bash
"scripts": {
  "test": "jest",
  "dev": "tsx --env-file=.env ./src/index.ts",
  "watch": "tsx --env-file=.env --watch ./src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
},
```


## Environment Variables

### Create `.env` file
```bash
SERVER_PORT=5001
```


## Git
Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.  

### Init Git
```bash
git init
git add .
git commit -m 'in principio'
git branch -M main
git remote add origin git@github.com:bahiensed/boilerplate.git
git push -u origin main
```


### Create `.gitignore` file
```bash
# dependencies
/node_modules

# production
/dist

# .env files (can opt-in for committing if needed)
.env*
```


## Jest

### Install Jest
```bash
npm install --save-dev jest
```

### Install `ts-jest`
```bash
npm install --save-dev ts-jest
```

### Install `types`
```bash
npm install --save-dev @types/jest
```

### Create `jest.config.ts` file
```bash
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/tests/**/*.test.ts'],
};

export default config;
```
