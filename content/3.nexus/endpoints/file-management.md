---
title: "File Management"
category: "nexus"
---

### Upload a File
- **POST** `/api/v1/files`
- **Authentication**: Required
- **Form Data**:
  - `file`: The file to upload
  - `path` (optional): The directory path to store the file (default: root directory)
  - `isDirectory` (optional): Set to "true" if creating a directory (default: "false")
- **Response**: Returns the file object

### List Files
- **GET** `/api/v1/files`
- **Query Parameters**:
  - `path` (optional): The directory path to list files from (default: root directory)
- **Response**: Returns an array of file objects in the specified directory

### Get File or Directory Contents
- **GET** `/api/v1/files/dir/*path`
- **Response**:
  - If path is a file: Returns the file object
  - If path is a directory: Returns an array of file objects in the directory

### Update File Metadata
- **PUT** `/api/v1/files/:id`
- **Authentication**: Required
- **Body**:
  ```json
  {
    "name": "Updated file name"
  }
  ```
- **Response**: Returns the updated file object

### Delete a File
- **DELETE** `/api/v1/files/:id`
- **Authentication**: Required
- **Response**: Returns a success message

### Create a Directory
- **POST** `/api/v1/directories`
- **Authentication**: Required
- **Body**:
  ```json
  {
    "name": "New Directory Name",
    "path": "/parent/directory/path"
  }
  ```
- **Response**: Returns the created directory object
