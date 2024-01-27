## Endpoints

List of Available Endpoints:

- `POST /category`
- `GET /category/`
- `GET /category/:id`
- `PATCH /category/:id`
- `DELETE /category/:id`

## 1. POST /category/register

#### Description

- Create a new category data

#### Request


- Body
  ```json
  {
    "name": "string",
  }
  ```

#### Response

_201 - Created_

- Body

  ```json
  {
    "statusCode": 201,
    "message": "Berhasil Membuat Data Category Baru",
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

## 2. GET /category

#### Description

- Get All Data Categories


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
    "message" : "Berhasil Menampilkan Data category",
    "data": ["array"],
  }
  ```

## 3. GET /category/:id

#### Description

- Get One Data category With Request Params Id

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
    "message" : "Berhasil Menampilkan Data category",
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


## 4. PATCH /category/:id

#### Description

- Update Data category

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
    "name": "string",
  }
  ```

#### Response

_200 - Success_

- Body

  ```json
  {
    "statusCode": 200,
    "message": "Berhasil Memperbaharui Data category"
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


## 5. DELETE /category/:id

#### Description

- Delete category

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
    "message": "Berhasil Menghapus Data category"
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
