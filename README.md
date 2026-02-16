NODE.JS EXPRESS CALCULATOR (MVC REFACTOR)

A simple, functional Calculator API and web interface built with Node.js and Express. This project has been refactored from a basic script to a professional MVC (Model-View-Controller) structure.

RECENT IMPROVEMENTS

I have refactored this project to follow industry best practices:
- MVC Architecture: Divided the project into controllers and routes for better scalability
- Environment Variables: Used dotenv to manage configuration like the server PORT
- Logic Extraction: Moved heavy mathematical logic out of the main server file into dedicated controller functions
- Improved Security: Added .gitignore to protect sensitive environment files

TECH STACK
- Runtime: Node.js
- Framework: Express.js
- Environment: Dotenv
- Frontend: HTML/JavaScript

PROJECT STRUCTURE

node-express-basics/
  - controllers/
      calcController.js (Mathematical logic & history management)
  - .env (Environment variables - Port configuration)
  - .gitignore (Git ignore rules)
  - calculator.html (Main user interface)
  - server.js (Entry point & Server setup)
  - package.json (Project dependencies)

INSTALLATION & SETUP

Copy and paste these commands into your terminal:

1. Clone and enter the project:
   git clone https://github.com/MBaranekTech/node-express-basics.git
   cd node-express-basics

2. Install dependencies:
   npm install

3. Create the environment file:
   echo "PORT=3000" > .env

4. Start the server:
   node server.js

5. Visit http://localhost:3000 in your browser!

API ENDPOINTS

GET /                  - Home welcome message
GET /calculator        - Load the web calculator interface
POST /api/calculate    - Perform math operations (+, -, *, /, ^, √, !, %, sin, cos, tan)
GET /api/history       - View history of recent calculations
GET /api/info          - Get project tech stack info

LEARNING JOURNEY

This project is part of my DevOps learning path. I believe understanding coding and application architecture helps me become a better DevOps engineer.