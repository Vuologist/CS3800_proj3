# Encryption/Decryption Generator

## Prerequisites

```bash
nodejs
```

## Install

Navigate into ./main_server and ensure you can access nodejs by typing "node --version".
If it return a version, proceed to do 'npm install' to install dependencies.
If it doesn't return a version, make sure nodejs is installed correctly or perform a reinstall.

```bash
cd main_server
node --version // v10.xx.x
npm install
```

Repeat this for ./encryption_server to get dependencies for the encryption server.
```bash
cd encryption_server
npm install
```

## Run

start by running main server

```bash
cd main_server
node index.js
```

then run encryption server

```bash
cd encryption_server
node index.js
```

## HowTo

Input valid data into either the encrypt or decrypt text box, then click the corresponding button. A rest call will be performed and the result shown in the opposite box. Output will be displayed on the opposite box and overwrite the existing data if present.