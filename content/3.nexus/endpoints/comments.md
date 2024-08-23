---
title: "Comments"
category: "nexus"
---

### Add a Comment
- **POST** `/api/v1/comments`
- **Authentication**: Required
- **Body**:
  ```json
  {
    "content": "Your comment here",
    "blogPostID": 123  // ID of the blog post
  }
  ```
- **Response**: Returns the created comment object

### Get Comments
- **GET** `/api/v1/comments`
- **Query Parameters**:
  - `blogPostID`: ID of the blog post
- **Response**: Returns an array of comment objects

### Update a Comment
- **PUT** `/api/v1/comments/:id`
- **Authentication**: Required
- **Body**:
  ```json
  {
    "content": "Updated comment content"
  }
  ```
- **Response**: Returns the updated comment object

### Delete a Comment
- **DELETE** `/api/v1/comments/:id`
- **Authentication**: Required
- **Response**: Returns a success message
