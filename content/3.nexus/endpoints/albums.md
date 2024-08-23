---
title: "Album"
category: "nexus"
---

### Create an Album
- **POST** `/api/v1/albums`
- **Authentication**: Required
- **Body**:
  ```json
  {
    "name": "My New Album"
  }
  ```
- **Response**: Returns the created album object

### Get All Albums
- **GET** `/api/v1/albums`
- **Query Parameters**:
  - `page` (optional): Page number for pagination (default: 1)
  - `pageSize` (optional): Number of items per page (default: 10)
- **Response**: Returns an array of album objects

### Get a Specific Album
- **GET** `/api/v1/albums/:id`
- **Response**: Returns the specified album object with associated photos

### Update an Album
- **PUT** `/api/v1/albums/:id`
- **Authentication**: Required
- **Body**:
  ```json
  {
    "name": "Updated Album Name"
  }
  ```
- **Response**: Returns the updated album object

### Delete an Album
- **DELETE** `/api/v1/albums/:id`
- **Authentication**: Required
- **Response**: Returns a success message

### Add a Photo to an Album
- **POST** `/api/v1/albums/:id/photos`
- **Authentication**: Required
- **Body**:
  ```json
  {
    "photoID": 123
  }
  ```
- **Response**: Returns a success message

### Remove a Photo from an Album
- **DELETE** `/api/v1/albums/:id/photos/:photoID`
- **Authentication**: Required
- **Response**: Returns a success message
