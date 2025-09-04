# Team-Collab
A project used for demonstrating team collaboration on Github and API.



Members:

Justiniani, Dave Cleo G.

Menancillo, Christian Jacob



📌 API Description


This project is a RESTful API built with Express.js running on Node.js. It provides three core features:

Greeting API → Returns a personalized welcome message based on the user’s name.

Mind Break API → Delivers a random thought-provoking quote to inspire reflection.

Personality Test → This API endpoint takes a user’s name and favorite color as input, then returns a fun, randomized personality description.

By default, the server runs locally on http://localhost:3000
.



⚡ Tech Stack


Node.js → A powerful runtime environment that allows JavaScript to run on servers.

Express.js → A lightweight framework built on Node.js for creating APIs and web applications with ease.


⚙️ Installation & Setup

1. Clone the repository
   
git clone your-repo-url 

2. Initialize the project (if not already done)

npm init -y

3. Install dependencies
   
npm install express

4. Run the server

node server.js

5. Access the API

Once the server is running, open your browser or API client (like Postman) and use:

http://localhost:3000


📌 Example Requests & Responses
1. Greeting API

Request:

GET http://localhost:3000/greet/Deyv


Response:
{
  "message": "Hello, Deyv! Welcome to our API."
}


2. Mind Break API - Random rational thoughts

Request:

GET http://localhost:3000/mindbreak


Response (example):

{
  "thought": "Every second that passes is the youngest you’ll ever be again."
}

3. Personality Test API

Request:

POST http://localhost:3000/personality

Content-Type: application/json

{
  "name": "Cj",
  "favoriteColor": "green'
}


Response:

{"name":"cj","favoriteColor":"green", "personality":"cj, you are a green wizard of wisdom!"}
