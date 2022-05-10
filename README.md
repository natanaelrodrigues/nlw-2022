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
npm i nodemailer
npm install @types/nodemailer -D

https://mailtrap.io/

npm install jest -D
npx jest --init
npm install ts-node -D

https://swc.rs/docs/usage/jest
npm i -D jest @swc/jest
npm i @types/jest -d

npm i cors
npm i @types/cors -D


### ReactNative

## Day 4
https://efficient-sloth-d85.notion.site/Instalando-Expo-cc5bfac8f19a41e394889e885355f261ex
--- ISNTALAR O expo-cli
npm install -g expo-cli
--- cria o projeto em expo
expo init mobile
--- para rodar o projeto
expo start
instalar a extenção do VSCode rcomponent
no rcomponent
rnso + tab (snipt para criar o style.ts)
rnbc + tab ( cria um documento base para o react native)
expo install expo-font @expo-google-fonts/inter
expo install expo-app-loading
npm install --save phosphor-react-native
expo install react-native-svg
npm install react-native-iphone-x-helper
expo install @gorhom/bottom-sheet@^4
expo install react-native-reanimated
expo install react-native-gesture-handlercontainer
npm install react-native-gesture-handler@~2.1.0
expo install expo-splash-screen


parou em 1:02s