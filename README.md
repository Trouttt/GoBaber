# Node.js-Typescript-Template
Node.js template

yarn init -y
yarn add express
yarn add typescript -D
yarn tsc --init
yarn tsc
yarn add @types/express
yarn add ts-node-dev -D
yarn dev:server

yarn add uuidv4
yarn add date-fns
yarn add typeorm pg
yarn typeorm migration:create -n CreateAppointments
yarn typeorm migration:run
yarn add reflect-metadata
//yarn typeorm migration:revert
yarn typeorm migration:create -n CreateUsers
yarn add bcryptjs
yarn add -D @types/bcryptjs
yarn add jsonwebtoken
yarn add -D @types/jsonwebtoken
yarn add multer
yarn add -D @types/multer
yarn add express-async-errors