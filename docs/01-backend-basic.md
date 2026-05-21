# Backend Basics

## What is Backend?

Backend is responsible for handling requests and sending responses

It manages:
- business logic
- authentication
- authorization
- database operations
- APIs

Backend also stores and manages data using databases

Frontend sends requests to backend and backend processes those requests before sending responses

Example:
- user login
- signup
- fetching posts
- updating profile

## Client and Server

Client sends requests to backend

Examples of clients:
- browser
- frontend application
- mobile apps

Server receives requests, processes them and sends responses

Example:
When user clicks login button, request goes to backend server

The request usually flows through:
Route → Controller → Service → Repository → Database

## HTTP Methods

### What are HTTP Methods?

HTTP methods are used to define the type of action a client wants to perform on the server

### Why are HTTP Methods Needed?

Backend needs to understand what type of operation the client wants to perform

Examples:
- fetch data
- create data
- update data
- delete data

Without HTTP methods, backend would not clearly know the purpose of the request

### Common HTTP Methods

- GET (used to fetch data from server)
- POST (update existing data)
- PUT  (used to store/create new data)
- DELETE (used to delete data)

## Status Codes

### What are Status Codes?

Status codes are responses sent by server to indicate the result of a request

They help client understand whether request was successful or failed

### Status Code Categories

range          meaning
 4xx       client/user error
 5xx       server error
 2xx       success

 ## Status Codes

 Code       Meaning
 
  200     success (Request successful)
  201     resource created (New resource/data created successfully)
  400     bad request (Invalid or incomplete request)
  401     unauthorized (Authentication failed or token invalid)
  403     forbidden  (User does not have permission)
  404     not found (Requested route/resource not found)
  500     server error

## Important Learning
Backend is not only database handling
It is responsible for authentication, business logic and request processing