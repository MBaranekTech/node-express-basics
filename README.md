# Node.js & Express API Foundation 🚀

This project marks my first step into backend development. It serves as a practical demonstration of my skills in **Node.js** and **Express.js**, focusing on understanding the HTTP request/response cycle, middleware integration, and RESTful API design.

## 📌 About the Project

The goal of this repository is to demonstrate fundamental backend principles:

* **Server Setup:** Configuring a basic Express.js environment.
* **HTTP Methods:** Implementation of **GET** (fetching data) and **POST** (sending/creating data).
* **Data Handling:** Working with JSON format and `express.json()` middleware.
* **Learning Mindset:** A structured approach to mastering server-side logic.

## 🧮 First Mini-Project: Calculator

My first hands-on project to understand the **POST/GET** workflow:

* **Frontend:** Modern glassmorphism UI with gradient liquid design
* **Backend:** POST endpoint processing mathematical operations
* **Key Learning:**
  + Parsing incoming JSON data with `req.body`
  + Using **switch statement** to handle multiple operations efficiently
  + Working with **Math functions** (`Math.pow()`, `Math.sqrt()`)
  + **Input validation** (division by zero, negative square roots)
  + Returning calculated results via `res.json()`
  + Understanding the complete request/response cycle

**Supported Operations:**
- ➕ Addition
- ➖ Subtraction  
- ✖️ Multiplication
- ➗ Division (with zero-check)
- 🧪 Power (x^y)
- √ Square Root (with negative number validation)

**Access:** `http://localhost:3000/calculator`

## 🛠️ Tech Stack

* **Language:** JavaScript (Node.js runtime)
* **Framework:** Express.js
* **Frontend:** HTML5, CSS3 (Glassmorphism design)
* **API Testing:** Postman / Thunder Client

## 🚦 API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| **GET** | `/` | Welcome message and server status check. |
| **GET** | `/calculator` | Modern calculator with liquid design. |
| **GET** | `/api/info` | Returns information about my current learning path. |
| **GET** | `/api/user` | Fetches user data (currently stored in-memory). |
| **POST** | `/api/calculate` | Performs mathematical operations (+, -, *, /, ^, √). |
| **POST** | `/api/greet` | Returns a personalized greeting message. |
| **POST** | `/api/user` | Allows sending new user data to the server. |

### Example POST Request for Calculator (JSON):

**Basic Operations:**
```json
{
  "number1": 10,
  "number2": 5,
  "operation": "+"
}
```

**Power:**
```json
{
  "number1": 2,
  "number2": 3,
  "operation": "^"
}
```

**Square Root:**
```json
{
  "number1": 16,
  "number2": 0,
  "operation": "√"
}
```

### Example Response:
```json
{
  "number1": 10,
  "number2": 5,
  "operation": "+",
  "result": 15
}
```

### Example POST Request for User (JSON):
```json
{
  "name": "Martin Baranek",
  "email": "martin.baranek@example.com",
  "role": "admin"
}
```

## 📈 Full-Stack Learning Roadmap

This repository is part of my structured journey toward becoming a Full-Stack Developer:

* **Phase 1:** Node.js Basics, Express, and HTTP Methods (This project).
* **Mini-Project 1:** Calculator - Understanding POST/GET workflow with advanced operations.
* **Phase 2:** CRUD Operations & Database Integration (MongoDB/PostgreSQL).
* **Phase 3:** Authentication & Security (JWT, Password Hashing).
* **Phase 4:** Frontend Integration with React & Next.js.

## 💻 How to Run Locally

Clone the repository:
```bash
git clone https://github.com/MBaranekTech/node-express-basics.git
```

Navigate to the directory:
```bash
cd node-express-basics
```

Install dependencies:
```bash
npm install
```

Start the server:
```bash
node server.js
```

Access the API:

* **Main page:** <http://localhost:3000>
* **Calculator:** <http://localhost:3000/calculator>
* **API endpoints:** Use Postman or your browser

## 🎯 What I Learned

* ✅ Difference between GET (retrieve data) and POST (send data)
* ✅ Working with `req.body` to access incoming data
* ✅ Using `parseFloat()` for data type conversion
* ✅ Implementing **switch statement** for multiple conditions (more efficient than if-else)
* ✅ Working with **JavaScript Math functions** (`Math.pow()`, `Math.sqrt()`)
* ✅ **Input validation** - preventing errors (division by zero, negative square roots)
* ✅ Returning JSON responses with `res.json()`
* ✅ Creating multiple endpoints on a single server
* ✅ Building a complete full-stack mini-application

---

I am constantly improving this project. Check out my other repositories to see my progress!

## About

First steps into Backend development: Node.js, Express, and REST API basics.

### Topics

[javascript](/topics/javascript "Topic: javascript")
[express](/topics/express "Topic: express")
[node](/topics/node "Topic: node")
[dev](/topics/dev "Topic: dev")
[backend-api](/topics/backend-api "Topic: backend-api")