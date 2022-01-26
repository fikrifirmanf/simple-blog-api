# Documentation

This is a Simple Restful API about Blogs created using **NodeJS**.

## Demo

<#>
Comming Soon

## Installation

First of all, if your server or computer not installed npm and NodeJS you need install it. You can visit <https://nodejs.org/>.
After that, you can open terminal or command prompt and type:

```
git clone https://github.com/fikrifirmanf/simple-blog-api.git
cd simple-blog-api
npm install
```

### Running on Dev Mode

```
npm run dev
```

## TECH/LIBRARY

- NodeJS
- ExpressJS
- Cors
- Helmet
- Nodemon
- Better SQLite3

## ENDPOINT

| URL             | Method | Body                          | Params |
| --------------- | ------ | ----------------------------- | ------ |
| `/api/v1/posts` | GET    | -                             | -      |
| `/api/v1/posts` | GET    | -                             | `/:id` |
| `/api/v1/posts` | POST   | `{"title": "","content": ""}` | -      |
| `/api/v1/posts` | PUT    | `{"title": "","content": ""}` | `/:id` |
| `/api/v1/posts` | DELETE | -                             | `/:id` |
