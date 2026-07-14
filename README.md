# WTWR (What to Wear?): Back End

## Description

The back-end project is focused on creating a server for the WTWR application. You'll gain a deeper understanding of how to work with databases, set up security and testing, and deploy web applications on a remote machine. The eventual goal is to create a server with an API and user authorization.

This server provides a REST API that connects to a MongoDB database to manage users and clothing items based on weather conditions. It handles creating and retrieving users, managing clothing items, and liking/unliking items.

## Technologies & Techniques

- **Node.js** — runtime environment
- **Express.js** — web framework for building the REST API
- **MongoDB** — NoSQL database for storing users and clothing items
- **Mongoose** — ODM for MongoDB, used to define schemas and models
- **validator** — package for validating URL fields (avatar, imageUrl)
- **nodemon** — hot reload during development
- **ESLint** (Airbnb style guide) + **Prettier** — code linting and formatting

## Running the Project

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

`npm run lint` — to run the linter

## Environment Variables

The server runs on port `3001` by default. You can override this by setting a `PORT` environment variable.

The server connects to MongoDB at `mongodb://127.0.0.1:27017/wtwr_db` by default.

## API Endpoints

### Users and Authentication

| Method | Endpoint  | Description                              |
| ------ | --------- | ---------------------------------------- |
| POST   | /signup   | Creates a new user                       |
| POST   | /signin   | Logs in a user and returns a token       |
| GET    | /users/me | Returns the currently authenticated user |
| PATCH  | /users/me | Updates the current user's profile       |

**Example POST /signup request body:**

```json
{
  "name": "John Doe",
  "avatar": "https://example.com/avatar.jpg",
  "email": "john@example.com",
  "password": "password123"
}
```
