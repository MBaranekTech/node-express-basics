# Node.js & Express API Foundation 🚀

This project marks my first step into backend development. It serves as a practical demonstration of my skills in **Node.js** and **Express.js**, focusing on understanding the HTTP request/response cycle, middleware integration, and RESTful API design.

## 📌 About the Project
The goal of this repository is to demonstrate fundamental backend principles:
* **Server Setup:** Configuring a basic Express.js environment.
* **HTTP Methods:** Implementation of **GET** (fetching data) and **POST** (sending/creating data).
* **Data Handling:** Working with JSON format and `express.json()` middleware.
* **Learning Mindset:** A structured approach to mastering server-side logic.

## 🛠️ Tech Stack
* **Language:** JavaScript (Node.js runtime)
* **Framework:** Express.js
* **API Testing:** Postman / Thunder Client

## 🚦 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/` | Welcome message and server status check. |
| **GET** | `/api/info` | Returns information about my current learning path. |
| **GET** | `/api/user` | Fetches user data (currently stored in-memory). |
| **POST** | `/api/user` | Allows sending new user data to the server. |

### Example POST Request (JSON):
```json
{
  "name": "Martin Baranek",
  "email": "martin.baranek@example.com",
  "role": "admin"
}
```

## 📈 Full-Stack Learning Roadmap
This repository is part of my structured journey toward becoming a Full-Stack Developer:

- [x] **Phase 1:** Node.js Basics, Express, and HTTP Methods (This project).
- [ ] **Phase 2:** CRUD Operations & Database Integration (MongoDB/PostgreSQL).
- [ ] **Phase 3:** Authentication & Security (JWT, Password Hashing).
- [ ] **Phase 4:** Frontend Integration with React & Next.js.

## 💻 How to Run Locally
Clone the repository:
```
git clone [https://github.com/MBaranekTech/node-express-basics.git](https://github.com/MBaranekTech/node-express-basics.git)
```
Navigate to the directory:
```
cd code-express-basics
```
Install dependencies:
```
npm install
```
Start the server:
```
node server.js
```

Access the API: Open http://localhost:3000 in your browser or Postman.

I am constantly improving this project. Check out my other repositories to see my progress!