Node.js
TypeScript compiler
VSCode editor

Install Node.js
Go to node.js folder directory and add in environment variables under Path variables
Go to node_modules folder directory and add in environment variables under Path variables

Install TypeScript compiler
Open cmd
node -v
npm -v
npm install -g typescript

Install VSCode editor

Compiling TypeScript code(generate js and compile)
Open terminal
	tsc path\filename.ts
	node path\filename.js

Compiling TypeScript code(without js)
Install TypeScript executor
Open cmd
	npm install -g tsx
Open terminal
	tsx path\filename.ts

Expected Error
Security error
open terminal and run the command
	Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
