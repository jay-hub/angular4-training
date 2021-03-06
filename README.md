# Introduction to Angular

## Prerequisites

Node.js and npm are essential to Angular development.

Get it now if it's not already installed on your machine.
Verify that you are running at least node v4.x.x and npm 3.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions produce errors.

## Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., tq-academy).

```
git clone https://github.com/jay-hub/angular4-training  tq-academy
cd tq-academy
```

## Install npm packages

Install the npm packages described in the package.json and verify that it works:

```
npm install
npm start
```

Doesn't work in Bash for Windows which does not support servers as of January, 2017.
The npm start command first compiles the application, then simultaneously re-compiles and runs the lite-server. Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`

## npm scripts

npm scripts defined in the package.json:

npm start - runs the compiler and a server at the same time, both in "watch mode".
npm run build - runs the TypeScript compiler once.
npm run build:w - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
npm run serve - runs the lite-server, a light-weight, static file server, written and maintained by John Papa and Christopher Martin with excellent support for Angular apps that use routing.
Here are the test related scripts:

npm test - compiles, runs and watches the karma unit tests
npm run e2e - compiles and run protractor e2e tests, written in Typescript (*e2e-spec.ts)
