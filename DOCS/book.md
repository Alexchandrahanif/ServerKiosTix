## Endpoints

List of Available Endpoints:

- `POST /book`
- `GET /book/category/:CategoryId`
- `GET /book/author/:AuthorId`
- `GET /book/`
- `GET /book/:id`
- `PATCH /book/:id`
- `DELETE /book/:id`

## 1. POST /book

#### Description

- Create a new book data

#### Request


- Body
  ```json
  {
    "title": "string",
    "publicationYear": "string",
    "genre": "string",
    "countPage": Integer,
    "rating": Float,
    "AuthorId": "uuid",
    "CategoryId": "uuid",
  }
  ```

- File
  ```json
  {
    "image": "string",
  }
  ```

#### Response

_201 - Created_

- Body

  ```json
  {
    "statusCode": 201,
    "message": "Berhasil Membuat Data Buku Baru",
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

## 2. GET /user/category/:CategoryId

#### Description

- Get All Data Books By CategoryId
- Req Query (limir, page, serach, tanggal) not Required
- Format Query Date (2024-01-27)

#### Request

- Headers
  ```json
  {
    "authorization": "String"
  }
  ```
- Query
  ```json
  {
    "limit": Integer,
    "page": Integer,
    "search": "String",
    "tanggal": "date"
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "message": "Berhasil Menampilkan Semua Data Buku",
    "data": ["array"],
    "totalDataBuku" : Integer,
    "totalPage" : Integer
  }
  ```


## 3. GET /user/author/:AuthorId

#### Description

- Get All Data Books By AuthorId
- Req Query (limir, page, serach, tanggal) not Required
- Format Query Date (2024-01-27)

#### Request

- Headers
  ```json
  {
    "authorization": "String"
  }
  ```
- Query
  ```json
  {
    "limit": Integer,
    "page": Integer,
    "search": "String",
    "tanggal": "date"
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "message": "Berhasil Menampilkan Semua Data Buku",
    "data": ["array"],
    "totalDataBuku" : Integer,
    "totalPage" : Integer
  }
  ```


## 4. GET /user

#### Description

- Get All Data Books
- Req Query (limir, page, serach, tanggal) not Required
- Format Query Date (2024-01-27)

#### Request

- Headers
  ```json
  {
    "authorization": "String"
  }
  ```
- Query
  ```json
  {
    "limit": Integer,
    "page": Integer,
    "search": "String",
    "tanggal": "date"
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "message": "Berhasil Menampilkan Semua Data Buku",
    "data": ["array"],
    "totalDataBuku" : Integer,
    "totalPage" : Integer
  }
  ```


## 5. GET /book/:id

#### Description

- Get One Data Book With Request Params Id

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
    "message" : "Berhasil Menampilkan Data Buku",
    "data": {object}
  }
  ```
  
_404 - Not Found_

- Body
  ```json
  {
    "statusCode": 404,
    "message": "String"
  }
  ```


## 6. PATCH /book/:id

#### Description

- Update Data book

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
    "title": "string",
    "publicationYear": "string",
    "genre": "string",
    "countPage": Integer,
    "rating": Float,
    "AuthorId": "uuid",
    "CategoryId": "uuid",
  }
  ```

- File
  ```json
  {
    "image": "string",
  }
  ```


#### Response

_200 - Success_

- Body

  ```json
  {
    "statusCode": 200,
    "message": "Berhasil Memperbaharui Data Buku"
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

_404 - Not Found_

- Body
  ```json
  {
    "statusCode": 404,
    "message": "String"
  }
  ```


## 7. DELETE /book/:id

#### Description

- Delete book

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
    "message": "Berhasil Menghapus Data Buku"
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

_404 - Not Found_

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
