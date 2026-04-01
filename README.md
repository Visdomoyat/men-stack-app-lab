# Visdom Morto Cars Full Stack Development

## Overview
Visdom Morto Full Stack is a combination of both backend and frontend for creating, reading, updating, deleting and viewing car records store in MongoDB

## Tech Stack
- Node.js
- Express
- MongoDB + Mongoose
- Morgon
- CORS
- Dotenv
- Nodemon

## Prerequisites
- Node.js 18 or later
- MongoDB Atlas (Or Local MongoDB instance).

## Installation
```bash
npm install
```

## Environment Variables
Create a `.env` file in the project root:

```env
MONGODB_URI=your_connection_string
```

## Running the Server
Development mode:

```bash
node server.js
```

Production mode:
```bash
npm start
```
Server runs on:
```text
http://localhost:3000
```

### API Endpoints
Base route: `/cars`

- `GET /cars` - Get all cars 
- `GET /cars/new` - Get one car by ID
- `GET /cars/carsID/edit` - Edit one car by ID
- `POST /cars` - Create a car
- `PUT /cars/:carsId` - Update a car by ID
- `Delete /cars/:carsId` - Delete a car by ID

### Example Create Request Body
```Json
{
  name: Toyota Corrolla,
  description: A reliable sedan with excellent fuel efficiency and comfort ,
  image: .png file,
}
```

## Data Model
`Car`
- `name`: String 
- `description`: String
- `image`: String

## Project Structure 

```text
controllers/
models/
server.js
views
```

## License
ISC

## Author

Wisdom Oyatokun
