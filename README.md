# Advent of code 2021

This repo will be used to host JavaScript files for the [Advent of Code 2021](https://adventofcode.com/) challenges.
~~I will be doing the challenge on replit so its easier to get up and running on any machine just from a browser.~~
I was using replit, but had to many issues. Moving to codespaces/local-development with vscode. 

This is also the first time I'll be doing Advent of Code, so I'm sure there will be more to learn and setup,
so developing on replit is sensible.

I'd also use TypeScript, but moved back to JavaScript for the sake of execution speed, and it works more naturally
with replit's built in features.

## Replit usage

Below is information on running a few common tasks. These may change as advent of code is released.

### Run jest-tests

(this is the default run action currently)
```bash
npm run test
```

**note** there isn't currently a way to run only a selection of tests without manually adding
`.only` to the test suite(s) you want to focus on.

### Run prettier formatting against js files

```bash
npm run format
```
