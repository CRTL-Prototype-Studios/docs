---
title: "Blog"
category: "nexus"
---

### Create a Blog Post
- **POST** `/api/v1/blog`
- **Authentication**: Required
- **Body**:
  ```json
  {
    "title": "Your Blog Post Title",
    "content": "Your blog post content goes here",
    "coverID": 123  // Optional: ID of the cover photo
  }
  ```
- **Response**: Returns the created blog post object

### Get All Blog Posts
- **GET** `/api/v1/blog`
- **Query Parameters**:
  - `page` (optional): Page number for pagination (default: 1)
  - `pageSize` (optional): Number of items per page (default: 10)
- **Response**: Returns an array of blog post objects

### Get a Specific Blog Post
- **GET** `/api/v1/blog/:id`
- **Response**: Returns the specified blog post object

### Update a Blog Post
- **PUT** `/api/v1/blog/:id`
- **Authentication**: Required
- **Body**:
  ```json
  {
    "title": "Updated Title",
    "content": "Updated content",
    "coverID": 456  // Optional: New cover photo ID
  }
  ```
- **Response**: Returns the updated blog post object

### Delete a Blog Post
- **DELETE** `/api/v1/blog/:id`
- **Authentication**: Required
- **Response**: Returns a success message
