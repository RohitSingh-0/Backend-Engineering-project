## What is Request Lifecycle?

Request lifecycle is the step-by-step flow of a request inside backend architecture
A request moves through different layers before response is sent back to client

## Why Request Lifecycle is Important?

Request lifecycle helps in:

- code organization
- scalability
- maintainability
- easier debugging
- separation of concerns

## Why Different Layers are Used?

Different layers separate responsibilities

Examples:
- controller handles request and response
- service handles business logic
- repository handles database queries
If everything is written in one file, code becomes messy and difficult to maintain

## Request Flow
A request moves through multiple layers inside backend architecture before response is sent back to the client

    Client
     ↓
    Route
     ↓
    Controller
     ↓
    Service
     ↓
    Repository
     ↓
    Database

## Route
Route receives the incoming request and forwards it to the correct controller

Example:
- `/login`
- `/signup`
- `/posts`

Routes help organize API endpoints

## Controller

Controller handles request and response

Responsibilities
- receive request data
- call service layer
- send response to client

Controller should not contain heavy business logic

## Service

Service layer contains business logic

Responsibilities:
- authentication logic
- validation logic
- password hashing
- JWT generation
- error handling

Service keeps business logic separated from request handling and database logic

## Repository

Repository handles database queries and interactions

Responsibilities:
- find data
- create data
- update data
- delete data

Repository separates database logic from business logic

## Database

Database stores application data

Examples:
- users
- posts
- orders

Database is responsible for persistent data storage

## Response Flow

After database operation is completed, response moves back through layers

Flow:
 
 Database
    ↓
 Repository
    ↓
 Service
    ↓
 Controller
    ↓
 Client
 