# Node.js & Express Advanced Calculator 🚀

A comprehensive backend learning project demonstrating fundamental and advanced concepts in **Node.js** and **Express.js**, featuring a full-featured calculator with modern glassmorphism UI.

## 📌 About the Project

This repository showcases my progression in backend development, focusing on:

* **Server Architecture:** Building a robust Express.js environment
* **HTTP Methods:** Implementation of **GET** and **POST** endpoints
* **Data Validation:** Input validation and error handling
* **Mathematical Operations:** From basic arithmetic to advanced functions
* **RESTful API Design:** Clean, structured API endpoints

## 🧮 Advanced Calculator Features

A modern, full-featured calculator with glassmorphism design supporting:

### Basic Operations
- ✅ **Addition (+)** - Add two numbers
- ✅ **Subtraction (-)** - Subtract second number from first
- ✅ **Multiplication (*)** - Multiply two numbers
- ✅ **Division (/)** - Divide with zero-check validation

### Advanced Operations
- ✅ **Modulo (%)** - Calculate remainder after division
- ✅ **Power (^)** - Raise number to a power
- ✅ **Square Root (√)** - Calculate square root (with negative check)
- ✅ **Factorial (!)** - Calculate factorial (with negative check)

**Access:** `http://localhost:3000/calculator`

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js v4.x
* **Frontend:** HTML5, CSS3 (Glassmorphism design)
* **API Format:** JSON
* **Testing:** Postman / Thunder Client / Browser DevTools

## 🚦 API Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| **GET** | `/` | Welcome message and server status | - |
| **GET** | `/calculator` | Modern calculator interface | - |
| **GET** | `/api/info` | Returns learning path information | - |
| **GET** | `/api/user` | Fetches user data (in-memory) | - |
| **POST** | `/api/calculate` | Performs mathematical operations | See below |

### POST /api/calculate - Request Format
```json
{
  "number1": 10,
  "number2": 3,
  "operation": "%"
}
```

### Supported Operations

| Operation | Symbol | Example | Result |
|-----------|--------|---------|--------|
| Addition | `+` | `10 + 5` | `15` |
| Subtraction | `-` | `10 - 5` | `5` |
| Multiplication | `*` | `10 * 5` | `50` |
| Division | `/` | `10 / 5` | `2` |
| Modulo | `%` | `10 % 3` | `1` |
| Power | `^` | `2 ^ 3` | `8` |
| Square Root | `√` | `√16` | `4` |
| Factorial | `!` | `5!` | `120` |

### Response Format
```json
{
  "number1": 10,
  "number2": 3,
  "operation": "%",
  "result": 1
}
```

### Error Handling

The API includes validation for:
- ❌ Division by zero
- ❌ Modulo by zero
- ❌ Square root of negative numbers
- ❌ Factorial of negative numbers
- ❌ Invalid operations

**Error Response Example:**
```json
{
  "error": "Modulo by zero is not allowed"
}
```

## 💻 How to Run Locally

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/MBaranekTech/node-express-basics.git
cd node-express-basics
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the server:**
```bash
node server.js
```

4. **Access the application:**
- Main page: `http://localhost:3000`
- Calculator: `http://localhost:3000/calculator`
- API endpoints: Use Postman or browser

## 🧪 Testing Examples

### Using Postman

**Test Modulo Operation:**
```
POST http://localhost:3000/api/calculate
Content-Type: application/json

{
  "number1": 17,
  "number2": 5,
  "operation": "%"
}
```

**Expected Response:**
```json
{
  "number1": 17,
  "number2": 5,
  "operation": "%",
  "result": 2
}
```

### Using cURL
```bash
curl -X POST http://localhost:3000/api/calculate \
  -H "Content-Type: application/json" \
  -d '{"number1": 10, "number2": 3, "operation": "%"}'
```

## 📈 Learning Journey

This project is part of my structured path toward Full-Stack Development:

* ✅ **Phase 1:** Node.js Basics, Express, HTTP Methods (Completed)
* ✅ **Mini-Project:** Advanced Calculator with 8 operations (Completed)
* 🔄 **Phase 2:** CRUD Operations & Database Integration (In Progress)
* 📋 **Phase 3:** Authentication & Security (JWT, Password Hashing)
* 📋 **Phase 4:** Frontend Integration with React & Next.js

## 🎯 What I Learned

### Backend Concepts
- ✅ Difference between GET (retrieve) and POST (send data)
- ✅ Working with `req.body` to access incoming JSON data
- ✅ Data type conversion with `parseFloat()`
- ✅ Using `switch` statements for cleaner conditional logic
- ✅ Implementing comprehensive error handling
- ✅ Validating user input before processing

### JavaScript Skills
- ✅ Mathematical operations including modulo
- ✅ Conditional logic and control flow
- ✅ Function parameters and return values
- ✅ JSON data structures
- ✅ Error handling with status codes

### API Design
- ✅ RESTful endpoint structure
- ✅ Consistent JSON response format
- ✅ Proper HTTP status codes (200, 400)
- ✅ Input validation patterns

## 🔧 Project Structure
```
node-express-basics/
├── server.js           # Main Express server
├── calculator.html     # Calculator UI (glassmorphism design)
├── package.json        # Dependencies and scripts
├── package-lock.json   # Locked dependency versions
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🚀 Future Enhancements

- [ ] Add more mathematical functions (sin, cos, tan)
- [ ] Implement calculation history
- [ ] Add user authentication
- [ ] Connect to MongoDB for data persistence
- [ ] Build React frontend
- [ ] Add unit tests
- [ ] Deploy to cloud platform

## 📝 License

This is a learning project - feel free to use it for educational purposes!

---

**Author:** Martin Baranek  
**Learning Focus:** Full-Stack JavaScript Development  
**Status:** Actively Learning & Building 🚀

Check out my other repositories to see my continuous progress in web development!