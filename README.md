# Documentation

This is a Simple Restful API about Blogs created using **NodeJS**.

## Demo

<https://api-dev.fikrifirmanf.com/api/v1/posts>

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

### Docker Installation

Here are the steps:

- Install Docker first on Windows/Linux
- After docker is installed, then install Docker Compose
- Then just run the command

```
docker compose up
```

With Docker, you can access on <http://localhost:3001>.

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
