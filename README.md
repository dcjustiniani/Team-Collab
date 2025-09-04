# Team-Collab
A project used for demonstrating team collaboration on Github and API.



Members:

Justiniani, Dave Cleo G.

Menancillo, Christian Jacob



📌 API Description


This project is a RESTful API built with Express.js running on Node.js. It provides three core features:

Greeting API → Returns a personalized welcome message based on the user’s name.

Mind Break API → Delivers a random thought-provoking quote to inspire reflection.

Math Calculator API → Performs basic arithmetic operations including addition, subtraction, multiplication, and division.

By default, the server runs locally on http://localhost:3000
.



⚡ Tech Stack


Node.js → A powerful runtime environment that allows JavaScript to run on servers.

Express.js → A lightweight framework built on Node.js for creating APIs and web applications with ease.


⚙️ Installation & Setup

1. Clone the repository
   
git clone <your-repo-url>

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

3. Math Calculator API

Request:

POST http://localhost:3000/add
Content-Type: application/json

{
  "num1": 8,
  "num2": 4
}


Response:

{
  "operation": "add",
  "result": 12
}
