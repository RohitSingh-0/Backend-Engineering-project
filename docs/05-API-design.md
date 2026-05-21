# API Design

## What is an API?

API stands for Application Programming Interface.

API allows communication between client and server.

Frontend applications use APIs to send requests to backend and receive responses.

Examples:
- login request
- fetching posts
- creating new user
- updating profile

---

## Why APIs are Needed?

APIs help frontend and backend communicate with each other.

Without APIs:
- frontend could not access backend data
- backend could not receive user requests
- applications could not exchange information

APIs are responsible for:
- sending data
- receiving data
- processing requests
- returning responses

---

## Request and Response

Client sends request to server.

Server processes request and sends response back to client.

Example Flow:

Client  
↓  
Request  
↓  
Server  
↓  
Response  
↓  
Client  

---

## REST API

REST is a common API design style.

REST APIs use:
- resources
- HTTP methods
- status codes

REST APIs are:
- clean
- scalable
- easy to understand

---

## Resources in REST APIs

REST APIs are based on resources.

Examples:
- users
- posts
- products
- orders

Good API routes usually represent resources.

Examples:

``text
/posts
/users
/orders

# Good vs Bad Route Naming

## Bad Route Naming
/getPosts
/createUser
/deletePost
These routes focus on actions/functions

## Good Route Naming
/posts
/users
/orders
These routes focus on resources
HTTP methods already define actions

Example:

GET /posts
POST /posts
DELETE /posts/123

Same route can perform different actions using different HTTP methods

# Protected Routes

Some routes should only be accessible to authenticated users

Examples:

- profile routes
- dashboard routes
- admin routes

JWT middleware is commonly used to protect routes
JWT in Protected Routes
Client sends JWT token in request headers

Example:
Authorization: Bearer TOKEN

Backend middleware verifies token before allowing access
If token is valid:
- request moves to controller
If token is invalid:
- request is rejected

# API Scalability and Structure

Good API design improves:

- scalability
- maintainability
- readability
- debugging
- team collaboration

Clean API structure helps large applications remain organized

# Important Learning

API design is not only about creating routes.

Good API design focuses on:

- clear structure
- proper resource naming
- scalable architecture
- request/response consistency
- security
- maintainability

REST APIs help backend systems remain organized and easier to manage.