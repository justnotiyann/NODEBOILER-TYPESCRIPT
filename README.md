# MY PERSONAL NODEBOILER FOR TYPESCRIPT PROJECT

## **Installation**

Prefer with yarn :

```bash
yarn
```

## How To Running This

**Development**

```bash
yarn start:dev
```

**Production**

```bash
yarn start:build
```

## Routes

| Group    | Desc            | Method | Endpoint                                   | Auth |
| -------- | --------------- | ------ | ------------------------------------------ | ---- |
| User API | Register        | POST   | http://localhost:port/api/users/register   | NO   |
|          | Login           | POST   | http://localhost:port/api/auth/login       | NO   |
|          | Get By Id       | GET    | http://localhost:port/api/users/detail/:id | NO   |
|          | Get By Username | GET    | http://localhost:port/api/users/:username  | NO   |
|          |                 |        |                                            |      |

## Installed Package

**Authentication**

1. Jsonwebtoken

2. Passport
   
   1. Local / Username and Password
   
   2. Google / Login with Google

**Database**

1. MongoDB with Mongoose as ODM


