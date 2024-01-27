## Endpoints

List of Available Endpoints:

- `POST /user/register`
- `POST /user/loginEmail`
- `POST /user`
- `GET /user/`
- `GET /user/profile`
- `GET /user/:id`
- `PATCH /user/:id`
- `PATCH /user/password/:id`
- `DELETE /user/:id`

## 1. POST /user/register

#### Description

- Create a new user data
- Email Must be Unique
- Phone Number Must be Unique

#### Request


- Body
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string",
    "phoneNumber": "string",
    "address": "string",
    "role": "string"
  }
  ```

#### Response

_201 - Created_

- Body

  ```json
  {
    "statusCode": 201,
    "message": "Selamat Anda Berhasil Register"
  }
  ```

_400 - Bad Request_

- Body
  ```json
  {
    "statusCode": 400,
    "message": "String",
    "data": ["array"],
  }
  ```

## 2. POST /user/login

#### Description

- Login with email and password
- Email must be format Email

#### Request

- Body

```json
{
  "email": "String",
  "password": "String",
}
```

#### Response

_200 - Ok_

- Body
  ```json
  {
    "statusCode": 200,
    "message": "String",
    "authorization": "Selamat Datang {username}",
    "username": "String",
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

_404 - Data Not Found_

- Body
  ```json
  {
    "statusCode": 404,
    "message": "String"
  }
  ```

## 3. GET /user

#### Description

- Get All Data Users


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
    "message" : "Berhasil Menampilkan Data User",
    "data": ["array"],
  }
  ```

## 4. GET /user/:id

#### Description

- Get One Data User With Request Params Id

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
    "message" : "Berhasil Menampilkan Data User",
    "data": {object}
  }
  ```

## 5. GET /user/profile

#### Description

- Get One Data User (Profile) With Request User id

#### Request

- User
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
    "message" : "Berhasil Menampilkan Data User",
    "data": {object}
  }
  ```

## 6. PATCH /user/:id

#### Description

- Update Data User

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
    "username": "string",
    "email": "string",
    "password": "string",
    "phoneNumber": "string",
    "address": "string",
    "role": "string"
  }
  ```

#### Response

_200 - Success_

- Body

  ```json
  {
    "statusCode": 200,
    "message": "Berhasil Memperbaharui Data User"
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


## 7. PATCH /user/password/:id

#### Description

- Update Password User

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
    "oldPassword": "string",
    "newPassword": "string",
    "confirmPassword": "string",
  }
  ```

#### Response

_200 - Success_

- Body

  ```json
  {
    "statusCode": 200,
    "message": "Berhasil Memperbaharui Password User"
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


## 8. DELETE /user/:id

#### Description

- Delete User

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
    "message": "Berhasil Menghapus Data User"
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
