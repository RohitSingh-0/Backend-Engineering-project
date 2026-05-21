# Middleware

## What is Middleware?

Middleware is a function that executes between request and response cycle

It acts as an intermediate layer between route and controller

Middleware can:
- modify request
- validate data
- verify authentication
- handle errors
- control request flow

Middleware helps backend process requests in a structured and reusable way

## Why Middleware is Needed?

Without middleware:
- controllers become overloaded
- repeated logic gets duplicated
- authentication logic becomes messy
- request handling becomes difficult to maintain

Middleware helps separate common logic from business logic

It improves:
- scalability
- maintainability
- code reusability
- request management

## Request Flow with Middleware

Basic request lifecycle with middleware:

Client 
↓ 
Route  
↓  
Middleware  
↓  
Controller  
↓  
Service  
↓  
Repository  
↓  
Database  

Middleware executes before controller logic

It can:
- allow request
- modify request
- reject request
- stop request flow

## The next() Function

`next()` is used to pass request to the next middleware or controller

If middleware successfully completes its task, it calls:

next()
This allows request flow to continue

# What Happens if next() is Not Called?

If middleware:

- does not send response
- and does not call next()

request may remain stuck and response may never reach client

Middleware must either:

- send response
- OR
- call next()

## Authentication Middleware

Authentication middleware is commonly used to protect routes
It verifies whether user is authenticated or not before allowing access

Example:
- dashboard routes
- profile routes
- admin routes

## JWT Authentication Middleware Flow
1. Client sends JWT token in request headers
2. Middleware extracts token
3. JWT token is verified
4. If token is valid:
- next() is called
- request moves to controller
5. If token is invalid:
- request is rejected
- error response is returned

## Authorization Header

JWT tokens are commonly sent using authorization headers.

Example:
Authorization: Bearer TOKEN
Middleware reads token from request headers before verification

## Middleware and Stateless Authentication

HTTP is stateless, which means backend does not automatically remember users between requests
JWT middleware helps backend identify authenticated users on every request using token verification
This allows protected routes to remain secure without storing login state on server memory

## Common Middleware Use Cases

Middleware is commonly used for:

- authentication
- authorization
- request logging
- validation
- error handling
- rate limiting
- request parsing

Middleware allows these features to remain centralized and reusable

# Types of Middleware

## Application Middleware

Runs for multiple routes across application

Example:

- logging middleware
- JSON parsing middleware

## Route Middleware

Runs only for specific routes.

Example:

- protecting admin routes
- protecting profile routes

## Error Middleware

Handles application errors in centralized way
Helps avoid repetitive try-catch handling across application

### Middleware and Clean Architecture

Middleware helps maintain separation of concerns

Example:

- authentication logic stays inside middleware
- controller focuses on request/response
- service focuses on business logic

This keeps backend architecture clean and scalable

# Why Middleware is Important in Large Applications?

Large backend systems contain:

- many routes
- multiple services
- protected resources
- repeated validations

Middleware prevents duplication of common logic across routes

It becomes easier to:

- scale application
- debug requests
- manage authentication
- maintain clean architecture

# Important Learning

Middleware is one of the most important parts of backend architecture
It helps backend:

- control request flow
- centralize repeated logic
- protect routes
- maintain scalable architecture

Proper middleware design improves backend maintainability, readability and security

# Understanding req.headers.authorization

When a client sends a request to a protected route, the JWT token is usually sent inside request headers
Example:
Authorization: Bearer TOKEN

The frontend/client stores the JWT token after successful login and sends it with future protected requests
Inside Express backend:

req.headers.authorization
returns:

Bearer eyJhbGciOi...

Headers contain extra metadata/information sent with the request
Examples:

authorization token
content type
browser information

Middleware reads the authorization header before verifying user authentication

# Understanding Bearer TOKEN Structure

Authorization header usually contains two parts:
Bearer TOKEN
Example:
- Bearer abc123
- Bearer → token type
abc123 → actual JWT token
The middleware only needs the actual token for verification

# Why split(" ") Is Used
The authorization header is received as a string:
Bearer abc123
To separate the token we use string method .split() like this:

header.split(" ")

Result:

["Bearer", "abc123"]
But the actual token exists at index:
[1]
so,
It something like that `` const token = header.split(" ")[1];``

# JWT Verification Flow
After extracting the token, middleware verifies it using: (as you show above)

jwt.verify(
      token,
      process.env.JWT_SECRET
    );
    
JWT verification checks:

- whether token is valid
- whether token was signed using correct secret key
- whether token is expired
- whether token was modified

If verification succeeds:

- next() is called
- request moves to controller

If verification fails:

- middleware sends error response
- request flow stops

# Why return Is Important in Middleware

If authorization header or token is missing, middleware sends a response:
res.status(401).send("authorization header missing")
After sending response:
return;
is important because it stops further execution
Without return, code below would continue executing and may crash application

# Understanding next()
next() passes request to next middleware or controller
Flow:

Client
 ↓
Route
 ↓
Middleware
 ↓
next()
 ↓
Controller
 ↓
Response

Without next(), request would stop inside middleware
Middleware must either:
send response
OR
call next()

# Why Protected Routes Are Needed
Protected routes prevent unauthorized users from accessing sensitive resources

Examples:

- profile routes
- dashboard routes
- orders
- cart
- admin routes

Protected routes first verify authentication before allowing access
In this project:
``router.get("/profile", middleware, authController.profile);``
it is a protected route because middleware verifies token before controller executes

# Testing Protected Routes Using Postman
Different request scenarios were tested during implementation

1. Request Without Token

Request:

- GET /profile
- No headers were sent

Result:

- 401 Unauthorized
- authorization header missing

Reason:
- because no authorization header existed

2. Request With Invalid Token

Request header:

- Authorization: Bearer RANDOMTOKEN

Result:

- 401 Unauthorized
- detail mismatch

Reason:
- jwt.verify() failed because token was invalid.

3. Request With Valid Token

Request header:

- Authorization: Bearer VALID_TOKEN

Result:

profile valid

Reason:

- token verified successfully
- middleware called next()
- controller executed successfully
- Important Backend Concepts Learned

Through practical implementation and testing, the following concepts became clear:

- request lifecycle
- middleware flow
- JWT authentication
- protected routes
- authorization headers
- token extraction
- token verification
- Express request flow
- request/response cycle
- Postman API testing
- client-server communication
- route protection
- request debugging

This implementation helped understand how authentication actually works internally in real backend systems.