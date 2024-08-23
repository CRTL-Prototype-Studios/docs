---
title: "Photo Management"
category: "nexus"
---

### Create a Photo
- **POST** `/api/v1/photos`
- **Authentication**: Required
- **Body**:
  ```json
  {
    "title": "Photo Title",
    "description": "Photo description",
    "fileID": 123,  // ID of the associated file
    "width": 1920,
    "height": 1080
  }
  ```
- **Response**: Returns the created photo object

### Get All Photos
- **GET** `/api/v1/photos`
- **Query Parameters**:
  - `page` (optional): Page number for pagination (default: 1)
  - `pageSize` (optional): Number of items per page (default: 10)
- **Response**: Returns an array of photo objects

### Get a Specific Photo
- **GET** `/api/v1/photos/:id`
- **Response**: Returns the specified photo object

### Update a Photo
- **PUT** `/api/v1/photos/:id`
- **Authentication**: Required
- **Body**:
  ```json
  {
    "title": "Updated Title",
    "description": "Updated description",
    "fileID": 456,  // Optional: New associated file ID
    "width": 3840,
    "height": 2160
  }
  ```
- **Response**: Returns the updated photo object

### Delete a Photo
- **DELETE** `/api/v1/photos/:id`
- **Authentication**: Required
- **Response**: Returns a success message
