# nlw-2022

=> Tecnologia SPA
=> Tecnologias(Ferramentas)
-- React
-- React Native

### REACT JS / VITE

## Day 1

npm create vite@latest
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install phosphor-react
npm install @headlessui/react

## Day 2

npm install -D @tailwindcss/forms
-alterar no tailwind.config.js e adicionar no puglins
require('@tailwindcss/forms'),

npm install --save-dev tailwind-scrollbar
-alterar no tailwind.config.js e adicionar no puglins
require("tailwind-scrollbar")

npm install html2canvas

### NODEJS

## Day 3

npm init -y
npm i typescript @types/node ts-node-dev -D
npx tsc --init

- Alterado tsconfig.json no "target": "es2020",
- Alterado tsconfig.json no "rootDir": "./src",
- Alterado tsconfig.json no "outDir": "./dist",

- Alterado no package.json e criado script "dev": "ts-node-dev src/server.ts"

npm i express
npm i -D @types/express
npm i prisma -D
npm i @prisma/client
npx prisma init
npx prisma migrate dev
