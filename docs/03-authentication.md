# Authentication

## What is Authentication?

Authentication is the process of verifying user identity
It checks whether the user is valid or not

Example:
- login using email and password

Authentication helps backend identify users before allowing access to protected resources

## Why Authentication is Needed?

Authentication is important for security and user privacy

Without authentication:
- anyone could access private user data
- protected routes would not be secure
- backend could not identify users

Authentication helps protect:
- user accounts
- private data
- application resources

## Signup Flow

1. User enters email and password
2. Backend receives request
3. Backend checks whether email already exists or not
4. Password is hashed using bcrypt
5. User data is stored in database
6. Response is sent back to client

## Login Flow

1. User enters email and password
2. Backend retrieves user data from database
3. Stored hashed password is retrieved
4. bcrypt.compare() verifies password
5. JWT token is generated
6. Token is sent to client
7. User sends token in future requests
8. Backend verifies token before allowing access

## Password Hashing

Passwords should not be stored in plain text
If database gets leaked and passwords are stored in plain text, attackers can directly see user passwords
bcrypt is used to hash passwords before storing them in database
Hashing is a one-way process, which means original password cannot be retrieved from hashed password

Example:

Plain Password:
123456

Hashed Password:
$2b$10$abcxyz...

## Salt in bcrypt

bcrypt uses random salt while hashing passwords

Because of salt:
same password can generate different hashes every time

Example:

Password:
123456

Hash 1:
$2b$10$abc...

Hash 2:
$2b$10$xyz...

Both hashes can belong to same password

Salt improves password security and makes attacks more difficult

## Password Verification During Login

During login:
- user enters plain text password
- backend retrieves stored hashed password from database
- bcrypt.compare() verifies password

bcrypt.compare():
- extracts salt from stored hash
- uses same hashing process on entered password
- compares result with stored hash

If passwords match:
user is authenticated successfully

Original password is never retrieved from hashed password

## What is JWT?

JWT stands for JSON Web Token
JWT is used to identify authenticated users
After successful login, backend generates JWT token and sends it to user
The token is used in future requests for verification

## Why JWT is Needed?

HTTP is stateless
Stateless means backend does not automatically remember users between request

Without JWT:
users may need to login repeatedly
JWT helps backend identify users without asking for credentials again and again

## JWT Flow

1. User logs in using email and password
2. Backend verifies credentials
3. JWT token is generated
4. Token is sent to client
5. Client stores token
6. Client sends token in future requests
7. Backend verifies token
8. Access is granted if token is valid

## JWT Signature

JWT contains a signature
Signature helps backend verify whether token is original or modified
If token payload is changed manually, signature becomes invalid
Backend verifies token using secret key

## Authentication vs Authorization

### Authentication

Authentication checks:
Who is the user?

Example:
- login using email and password

### Authorization

Authorization checks:
What is the user allowed to access?

Example:
- checking whether user can access admin routes or not

## Important Learning

Authentication is not only login functionality

Authentication helps:
- protect user identity
- secure backend resources
- verify users
- manage protected routes

bcrypt protects passwords using hashing and salt
JWT helps backend identify authenticated users in stateless HTTP requests