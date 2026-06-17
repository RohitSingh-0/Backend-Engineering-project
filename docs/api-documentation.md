# API Documentation

Base URL

```http
http://localhost:5000
```
# Authentication APIs

## Register User

Create a new user account.

### Endpoint

```http
POST /signup
```

### Request Body

```json
{
  "email": "user@example.com",
  "password": "Admin123!"
}
```

### Success Response

```json
{
  "message": "User created successfully"
}
```

### Validation

* Email must be a valid email address.
* Password must contain:

  * Minimum 8 characters
  * One uppercase letter
  * One lowercase letter
  * One number
  * One special character

## Login User

Authenticate an existing user and generate a JWT token.

### Endpoint

```http
POST /login
```

### Request Body

```json
{
  "email": "user@example.com",
  "password": "Admin123!"
}
```

### Success Response

```json
{
  "token": "jwt_token"
}
```

### Error Responses

```json
{
  "message": "Invalid credentials"
}
```

---

# Protected APIs

The following endpoints require a valid JWT token.

### Authorization Header

```http
Authorization: Bearer <jwt_token>
```

## Get User Profile

Fetch the authenticated user's profile.

### Endpoint

```http
GET /profile
```

### Success Response

```json
{
  "id": "user_id",
  "email": "user@example.com"
}
```

### Error Response

```json
{
  "message": "Profile not found"
}
```

## Update User Profile

Update authenticated user's profile information.

### Endpoint

```http
PATCH /profile
```

### Request Body

```json
{
  "email": "newemail@example.com"
}
```

### Success Response

```json
{
  "id": "user_id",
  "email": "newemail@example.com"
}
```

### Validation

* Email cannot be empty.
* Email must be valid.
* New email must be different from current email.

## Change Password

Change authenticated user's password.

### Endpoint

```http
PATCH /change-password
```

### Request Body

```json
{
  "oldPassword": "Admin123!",
  "newPassword": "NewAdmin123!"
}
```

### Success Response

```json
{
  "message": "Password updated successfully"
}
```

### Validation

* Old password must be correct.
* New password cannot be empty.
* New password must be different from current password.
* New password must satisfy password strength requirements.

### Error Responses

```json
{
  "message": "Incorrect old password"
}
```

```json
{
  "message": "New password must be different from current password"
}
```

# Project Architecture

```text
Route
↓
Controller
↓
Service
↓
Repository
↓
Database
```

## Responsibilities

### Controller

* Handles request and response.
* Passes data to service layer.

### Service

* Contains business logic.
* Performs validation.
* Handles authentication logic.

### Repository

* Performs database operations.
* Interacts with MongoDB using Mongoose.

# Security Features

* JWT Authentication
* Password Hashing using bcrypt
* Protected Routes
* Email Validation
* Password Strength Validation
* Layered Architecture
* TypeScript Type Safety