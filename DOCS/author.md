## Endpoints

List of Available Endpoints:

- `POST /author`
- `GET /author/`
- `GET /author/:id`
- `PATCH /author/:id`
- `DELETE /author/:id`

## 1. POST /author/register

#### Description

- Create a new author data

#### Request


- Body
  ```json
  {
    "displayName": "string",
    "birthYear": "string",
    "placeOfBirth": "string",
  }
  ```

#### Response

_201 - Created_

- Body

  ```json
  {
    "statusCode": 201,
    "message": "Berhasil Membuat Data Penulis Baru",
    "data": ["array"],
  }
  ```

_400 - Bad Request_

- Body
  ```json
  {
    "statusCode": 400,
    "message": "String",
  }
  ```

## 2. GET /author

#### Description

- Get All Data Authors


#### Request

- Headers
  ```json
  {
    "authorization": "String"
  }
  ```


#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "message" : "Berhasil Menampilkan Data Penulis",
    "data": ["array"],
  }
  ```

## 3. GET /author/:id

#### Description

- Get One Data author With Request Params Id

#### Request

- Params
  ```json
  {
    "id": "uuid"
  }
  ```
- Headers
  ```json
  {
    "authorization": "String"
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "message" : "Berhasil Menampilkan Data Penulis",
    "data": {object}
  }
  ```
  
_404 - Bad Request_

- Body
  ```json
  {
    "statusCode": 404,
    "message": "String"
  }
  ```


## 4. PATCH /author/:id

#### Description

- Update Data author

#### Request

- Headers

  ```json
  {
    "authorization": "String"
  }
  ```

- Params

  ```json
  {
    "id": "uuid"
  }
  ```


- Body

  ```json
  {
    "displayName": "string",
    "birthYear": "string",
    "placeOfBirth": "string",
  }
  ```

#### Response

_200 - Success_

- Body

  ```json
  {
    "statusCode": 200,
    "message": "Berhasil Memperbaharui Data Penulis"
  }
  ```

_400 - Bad Request_

- Body
  ```json
  {
    "statusCode": 400,
    "message": "String"
  }
  ```

_404 - Bad Request_

- Body
  ```json
  {
    "statusCode": 404,
    "message": "String"
  }
  ```


## 5. DELETE /author/:id

#### Description

- Delete author

#### Request

- Headers

  ```json
  {
    "authorization": "String"
  }
  ```

- Params

  ```json
  {
    "id": "uuid"
  }
  ```


#### Response

_200 - Success_

- Body

  ```json
  {
    "statusCode": 200,
    "message": "Berhasil Menghapus Data Penulis"
  }
  ```

_400 - Bad Request_

- Body
  ```json
  {
    "statusCode": 400,
    "message": "String"
  }
  ```

_404 - Bad Request_

- Body
  ```json
  {
    "statusCode": 404,
    "message": "String"
  }
  ```


## Global Error

#### Response

_401 - InvalidAccessToken

- Body

  ```json
  {
    "statusCode": 401,
    "message": "Akses Token Tidak Ada"
  }
  ```

_403 - Forbidden_

- Body

  ```json
  {
    "statusCode": 403,
    "message": "Maaf, Anda Tidak Memiliki Hak Akses"
  }
  ```

_404 - JsonWebTokenError_

- Body
  ```json
  {
    "statusCode": 401,
    "message": "Token Tidak Sesuai"
  }
  ```

_404 - JsonWebTokenExpired_

- Body
  ```json
  {
    "statusCode": 401,
    "message": "Token Sudah Expired"
  }
  ```

_500 - Internal Server Error_

- Body

  ```json
  {
    "statusCode": 500,
    "message": "Internal Server Error"
  }
  ```
