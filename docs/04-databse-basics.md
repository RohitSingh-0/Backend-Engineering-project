# Database Basics

## What is a Database?

Database is a system used to store and manage application data

Examples of stored data:
- users
- posts
- products
- orders
- comments

Backend applications use databases to store persistent data
Persistent means data remains saved even after server restart

## Why Databases are Needed?

Databases help applications:
- store large amounts of data
- organize information
- retrieve data efficiently
- update existing data
- delete data safely

Without databases:
- data would be temporary
- applications could not manage users or application state properly

## Types of Databases

There are many types of databases, but two major categories are:

### SQL Databases
(Relational Databases)

Examples:
- MySQL
- PostgreSQL

SQL databases use:
- tables
- rows
- columns
- relationships
They follow structured schema-based systems.

### NoSQL Databases
(Non-Relational Databases)

Example:
- MongoDB

MongoDB stores data in JSON-like documents
NoSQL databases are usually more flexible in structure

## SQL vs MongoDB

### SQL Databases

Data is stored in tables
Example:

| id | name  | email |
|----|-------|--------|
| 1  | Rohit | test@gmail.com |

SQL databases are good for:
- strong relationships
- structured systems
- complex queries

### MongoDB

Data is stored as documents

Example:
`json
{
  "name": "Rohit",
  "email": "test@gmail.com"
}`
MongoDB is flexible and document-based
MongoDB is commonly used in modern JavaScript backend applications

## MySQL vs PostgreSQL

Both MySQL and PostgreSQL are SQL relational databases
Both use:
- SQL language
- tables
- rows
- columns
- MySQL

MySQL is beginner-friendly and widely used in web applications

Commonly used in:

- simple web applications
- traditional web systems
- PostgreSQL

PostgreSQL is more advanced and feature-rich.

It is known for:

- strict data consistency
- advanced queries
- scalability
- enterprise-level systems
- What is a Schema?

# What is a Schema?

Schema defines the structure and rules of data
It helps maintain consistency inside database

Schema defines:

- fields
- data types
- validation rules
- required fields

`Example:`

email: String
password: String

Without schema, data can become inconsistent and messy.

Example of inconsistent data:
`{`
  "email": "test@gmail.com"
`}`
`{`
  "gmail": "test@gmail.com"
`}`
Backend expects consistent structure, so schema is important

# What is Validation?
Validation checks whether data is correct or not before storing it in database

Examples:
- required fields
- correct data type
- minimum password length
- valid email format

Validation prevents invalid or garbage data from entering database

# What is a Model?

Model is used to interact with database

Models help perform operations like:
- create data
- find data
- update data
- delete data
Schema defines structure and rules
Model uses schema to interact with database

Example:
`userModel.findOne()`
`userModel.create()`

## Database Relationships

Relationships define how different data is connected
Examples:
- users and posts
- products and orders
- students and courses

### One-to-One Relationship

One item is connected to one item
Example:
- one user → one profile


### One-to-Many Relationship

One item is connected to many items

Example:
- one user → many posts
Each post belongs to one user

### Many-to-Many Relationship

Many items are connected to many items

Example:
- students and courses

One student can join many courses
One course can contain many students

# Why Relationships are Important?

Relationships help backend:

organize connected data
retrieve related information
build scalable systems

Backend applications are mostly connected systems

Example:
- users create posts
- products belong to categories
- orders belong to users

## Embedding vs Referencing

MongoDB provides two common ways to organize related data

### Embedding
Related data is stored inside same document
{
  "name": "Rohit",
  "posts": [
    {
      "title": "Post 1"
    }
  ]
}

Embedding is useful for:
- small related data
- tightly connected data
- data that does not grow heavily

### Problems with Embedding

- If related data grows too much:
- document becomes very large
- performance may decrease
- scalability becomes difficult

Example:
- social media posts
- large comments systems

## Referencing
Related data is stored separately using IDs.

Example:

User:
{
  "_id": "u1",
  "name": "Rohit"
}

Post:
{
  "title": "Post 1",
  "userId": "u1"
}

### Why Referencing is Important?

Referencing improves:
- scalability
- clean data organization
- maintainability
It also prevents unnecessary data duplication

#### Data Duplication Problem

Suppose post stores:

{
  "title": "Hello",
  "userName": "Rohit"
}

If user changes name:
- database becomes inconsistent
- old posts may still contain old username
Using references solves this problem because relation is maintained using userId instead of repeated user data

#### Query Thinking

Backend often retrieves related data using references

Example:
- getting all posts of specific user
- Backend can filter posts using userId
- This is common in one-to-many relationships

# Important Learning

Database design is not only about storing data

Good database design helps:
- scalability
- maintainability
- consistency
- efficient querying
- clean architecture
Relationships, references and schema design are very important parts of backend engineering.

backend engineering me:
- data ko kaise organize karna hai
- relations kaise maintain karni hain
- schema kaise design karna hai
ye bahut important part hain