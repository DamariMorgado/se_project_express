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

### Users

| Method | Endpoint       | Description          |
| ------ | -------------- | -------------------- |
| GET    | /users         | Returns all users    |
| GET    | /users/:userId | Returns a user by ID |
| POST   | /users         | Creates a new user   |

**Example POST /users request body:**

```json
{
  "name": "John Doe",
  "avatar": "https://example.com/avatar.jpg"
}
```

### Clothing Items

| Method | Endpoint         | Description                   |
| ------ | ---------------- | ----------------------------- |
| GET    | /items           | Returns all clothing items    |
| POST   | /items           | Creates a new clothing item   |
| DELETE | /items/:id       | Deletes a clothing item by ID |
| PUT    | /items/:id/likes | Likes a clothing item         |
| DELETE | /items/:id/likes | Unlikes a clothing item       |

**Example POST /items request body:**

```json
{
  "name": "Winter Jacket",
  "weather": "cold",
  "imageUrl": "https://example.com/jacket.jpg"
}
```

## Error Codes

- `400` — invalid data or invalid ID passed in the request
- `404` — requested resource not found
- `500` — internal server error

### Testing

Before committing your code, make sure you edit the file `sprint.txt` in the root folder. The file `sprint.txt` should contain the number of the sprint you're currently working on. For ex. 12
