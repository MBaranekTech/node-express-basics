# Node.js & Express Advanced Calculator 🚀

A comprehensive backend learning project demonstrating fundamental and advanced concepts in **Node.js** and **Express.js**, featuring a full-featured calculator with modern glassmorphism UI and calculation history.

## 📌 About the Project

This repository showcases my progression in backend development, focusing on:

* **Server Architecture:** Building a robust Express.js environment
* **HTTP Methods:** Implementation of **GET** and **POST** endpoints
* **Data Management:** In-memory calculation history storage
* **Data Validation:** Input validation and error handling
* **Mathematical Operations:** From basic arithmetic to trigonometric functions
* **RESTful API Design:** Clean, structured API endpoints
* **Modern UI/UX:** Glassmorphism design with smooth animations

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

### Trigonometric Functions
- ✅ **Sine (sin)** - Calculate sine of angle in degrees
- ✅ **Cosine (cos)** - Calculate cosine of angle in degrees
- ✅ **Tangent (tan)** - Calculate tangent of angle in degrees

### Calculation History Features
- ✅ **Automatic Storage** - Every calculation is automatically saved
- ✅ **Real-time Display** - History updates after each calculation
- ✅ **Colored Operation Icons** - Visual distinction for different operations
- ✅ **Smart Number Formatting** - Decimal numbers rounded to 4 places
- ✅ **Relative Timestamps** - "5 minutes ago" instead of full dates
- ✅ **Calculation Counter** - Total count badge
- ✅ **Individual Delete** - Remove specific calculations (coming soon)
- ✅ **Clear All** - Bulk delete functionality (coming soon)

**Access:** `http://localhost:3000/calculator`

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js v4.x
* **Frontend:** HTML5, CSS3 (Glassmorphism design)
* **Data Storage:** In-memory array (RAM)
* **API Format:** JSON
* **Testing:** Postman / Thunder Client / Browser DevTools

## 🚦 API Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| **GET** | `/` | Welcome message and server status | - |
| **GET** | `/calculator` | Modern calculator interface | - |
| **GET** | `/api/info` | Returns learning path information | - |
| **GET** | `/api/user` | Fetches user data (in-memory) | - |
| **GET** | `/api/history` | Retrieves all calculation history | - |
| **POST** | `/api/calculate` | Performs mathematical operations and saves to history | See below |

### POST /api/calculate - Request Format
```json
{
  "number1": 30,
  "number2": 0,
  "operation": "sin"
}
```

### GET /api/history - Response Format
```json
{
  "count": 5,
  "history": [
    {
      "id": 1,
      "number1": 10,
      "number2": 5,
      "operation": "+",
      "result": 15,
      "timestamp": "2026-02-04T14:30:00.000Z"
    },
    {
      "id": 2,
      "number1": 30,
      "number2": 0,
      "operation": "sin",
      "result": 0.5,
      "timestamp": "2026-02-04T14:31:00.000Z"
    }
  ]
}
```

### Supported Operations

| Operation | Symbol | Example | Result | Notes |
|-----------|--------|---------|--------|-------|
| Addition | `+` | `10 + 5` | `15` | - |
| Subtraction | `-` | `10 - 5` | `5` | - |
| Multiplication | `*` | `10 * 5` | `50` | - |
| Division | `/` | `10 / 5` | `2` | Zero-check |
| Modulo | `%` | `10 % 3` | `1` | Zero-check |
| Power | `^` | `2 ^ 3` | `8` | - |
| Square Root | `√` | `√16` | `4` | Negative check |
| Factorial | `!` | `5!` | `120` | Negative check |
| Sine | `sin` | `sin(30)` | `0.5` | Input in degrees |
| Cosine | `cos` | `cos(60)` | `0.5` | Input in degrees |
| Tangent | `tan` | `tan(45)` | `1` | Input in degrees |

### Trigonometric Function Examples

| Function | Input (degrees) | Output | Mathematical Meaning |
|----------|----------------|--------|---------------------|
| sin(0°) | 0 | 0 | sin(0°) = 0 |
| sin(30°) | 30 | 0.5 | sin(30°) = 0.5 |
| sin(90°) | 90 | 1 | sin(90°) = 1 |
| cos(0°) | 0 | 1 | cos(0°) = 1 |
| cos(60°) | 60 | 0.5 | cos(60°) = 0.5 |
| cos(90°) | 90 | 0 | cos(90°) ≈ 0 |
| tan(0°) | 0 | 0 | tan(0°) = 0 |
| tan(45°) | 45 | 1 | tan(45°) = 1 |

**Note:** Trigonometric functions accept angles in **degrees** and automatically convert them to radians internally using `Math.PI / 180`.

### Response Format
```json
{
  "number1": 30,
  "number2": 0,
  "operation": "sin",
  "result": 0.5
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

### Using Postman - Basic Operations

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

### Using Postman - Trigonometric Functions

**Test Sine Function:**
```
POST http://localhost:3000/api/calculate
Content-Type: application/json

{
  "number1": 30,
  "number2": 0,
  "operation": "sin"
}
```

**Expected Response:**
```json
{
  "number1": 30,
  "number2": 0,
  "operation": "sin",
  "result": 0.5
}
```

### Using Postman - Get History

**Get All Calculations:**
```
GET http://localhost:3000/api/history
```

**Expected Response:**
```json
{
  "count": 3,
  "history": [
    {"id": 1, "number1": 10, "number2": 5, "operation": "+", "result": 15, "timestamp": "2026-02-04T14:30:00.000Z"},
    {"id": 2, "number1": 20, "number2": 3, "operation": "-", "result": 17, "timestamp": "2026-02-04T14:31:00.000Z"},
    {"id": 3, "number1": 30, "number2": 0, "operation": "sin", "result": 0.5, "timestamp": "2026-02-04T14:32:00.000Z"}
  ]
}
```

### Using cURL

**Test Cosine:**
```bash
curl -X POST http://localhost:3000/api/calculate \
  -H "Content-Type: application/json" \
  -d '{"number1": 60, "number2": 0, "operation": "cos"}'
```

**Get History:**
```bash
curl http://localhost:3000/api/history
```

## 📈 Learning Journey

This project is part of my structured path toward Full-Stack Development:

* ✅ **Phase 1:** Node.js Basics, Express, HTTP Methods (Completed)
* ✅ **Mini-Project:** Advanced Calculator with 11 operations (Completed)
* ✅ **Phase 1.5:** Calculation History with In-Memory Storage (Completed)
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
- ✅ Storing data in arrays with `.push()` method
- ✅ Managing unique IDs with auto-increment pattern
- ✅ Working with timestamps using `new Date()`

### JavaScript Skills
- ✅ Mathematical operations including modulo
- ✅ Trigonometric functions with degree-to-radian conversion
- ✅ Using `Math.PI` constant for calculations
- ✅ Array manipulation (`.push()`, `.length`, indexing)
- ✅ Object creation and manipulation
- ✅ Conditional logic and control flow
- ✅ Function parameters and return values
- ✅ JSON data structures
- ✅ Error handling with status codes
- ✅ Async/await for API requests
- ✅ Number formatting with `Math.round()`

### Frontend/UI Skills
- ✅ DOM manipulation with JavaScript
- ✅ Fetch API for HTTP requests
- ✅ Dynamic HTML generation
- ✅ CSS animations and transitions
- ✅ Glassmorphism design patterns
- ✅ Responsive layout with Flexbox
- ✅ Event handling (click, keypress)
- ✅ User-friendly time formatting
- ✅ Conditional rendering (empty states)

### Mathematical Concepts
- ✅ Basic arithmetic operations
- ✅ Modulo (remainder) operation
- ✅ Power and factorial functions
- ✅ Square root with validation
- ✅ Trigonometric functions (sin, cos, tan)
- ✅ Degree to radian conversion
- ✅ Number rounding and formatting

### API Design
- ✅ RESTful endpoint structure
- ✅ Consistent JSON response format
- ✅ Proper HTTP status codes (200, 400)
- ✅ Input validation patterns
- ✅ Data persistence (in-memory)

## 🔧 Project Structure
```
node-express-basics/
├── server.js           # Main Express server with 11 operations + history
├── calculator.html     # Calculator UI with glassmorphism and history display
├── package.json        # Dependencies and scripts
├── package-lock.json   # Locked dependency versions
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🎨 UI Features

### Calculator Interface
- Modern glassmorphism design with blur effects
- Gradient backgrounds and smooth transitions
- Responsive input fields with hover effects
- Real-time calculation results
- Enter key support for quick calculations

### History Display
- Colored operation icons for visual distinction
- Smart number formatting (max 4 decimal places)
- Relative timestamps ("5 minutes ago")
- Total calculation count badge
- Smooth slide-in animations
- Custom scrollbar styling
- Individual delete buttons (UI ready)
- Hover effects on history items
- Auto-refresh after each calculation
- Empty state messaging

## 🚀 Future Enhancements

### Backend
- [ ] Add DELETE endpoint for clearing history
- [ ] Add DELETE endpoint for individual items
- [ ] Connect to MongoDB for persistent storage
- [ ] Add user authentication
- [ ] Implement rate limiting
- [ ] Add calculation export (CSV/JSON)

### Frontend
- [ ] Implement actual delete functionality
- [ ] Add search/filter for history
- [ ] Add date range filtering
- [ ] Export history to file
- [ ] Add keyboard shortcuts
- [ ] Dark/light theme toggle

### Features
- [ ] Add inverse trigonometric functions (arcsin, arccos, arctan)
- [ ] Add hyperbolic functions (sinh, cosh, tanh)
- [ ] Implement logarithmic functions (log, ln)
- [ ] Add constants (π, e)
- [ ] Expression parser for complex calculations
- [ ] Scientific notation support
- [ ] Unit tests with Jest
- [ ] Deploy to cloud platform (Heroku/Railway)

## 📝 Notes

### Data Persistence
Currently, calculation history is stored **in-memory** on the server:
- **Advantage:** Simple, fast, perfect for learning
- **Limitation:** Data is lost when server restarts
- **Next Step:** Migrate to MongoDB for permanent storage

### Calculation History Structure
Each calculation is stored as an object:
```javascript
{
  id: 1,                              // Auto-increment unique ID
  number1: 10,                        // First operand
  number2: 5,                         // Second operand
  operation: '+',                     // Operation symbol
  result: 15,                         // Calculated result
  timestamp: '2026-02-04T14:30:00.000Z'  // ISO 8601 format
}
```

## 📄 License

This is a learning project - feel free to use it for educational purposes!

## 🤝 Contributing

This is a personal learning project, but feedback and suggestions are always welcome! Feel free to open an issue or reach out.

---

**Author:** Martin Baranek  
**Learning Focus:** Full-Stack JavaScript Development  
**Current Status:** Actively Learning & Building 🚀  
**Project Stage:** Phase 1.5 - In-Memory Data Management

Check out my other repositories to see my continuous progress in web development!

---

## 🔗 Quick Links

- **Live Demo:** `http://localhost:3000/calculator`
- **API Documentation:** See API Endpoints section above
- **GitHub:** [https://github.com/MBaranekTech/node-express-basics](https://github.com/MBaranekTech/node-express-basics)

## 💡 Learning Resources Used

- [Express.js Documentation](https://expressjs.com/)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Math.js Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)