# planwithus-lib

`planwithus-lib` is a JavaScript library for course requirements specification and validation in plaNwithUS.

It is written in Typescript and uses [ajv](https://ajv.js.org/), a JSON Schema validator, along with [js-yaml](https://github.com/nodeca/js-yaml) to parse course requirements in [YAML](https://yaml.org/) format. The use of YAML ensures that course requirements can be written in a human friendly manner.

## Setup

`planwithus-lib` requires Node 16. To install the required dependencies, run the following command in the root of the project directory:

```
npm install
```

To build the repository, run:

```
npm run build
```

This will call a script which runs the TypeScript compiler on the source code. Lastly, to test the code, run:

```
npm run coverage
```

## Documentation

The latest documentation of the `main` branch generated by [TypeDoc](https://typedoc.org/) can be accessed at https://wei2912.github.io/planwithus-lib/index.html.

## Test Report

The latest test report of the `main` branch generated by [mochawesome](https://github.com/adamgruber/mochawesome) can be accessed at https://wei2912.github.io/planwithus-lib/mochawesome.html.
