const handleError = (err, req, res, next) => {
  console.log(err);
  let code = 500;
  let message = "Internal Server Error";

  if (
    err.name === "SequelizeValidationError" ||
    err.name == "SequelizeUniqueConstraintError"
  ) {
    code = 400;
    message = [];
    err.errors.forEach((el) => {
      message.push(el.message);
    });
  } else if (err.name === "Invalid authorization") {
    code = 401;
    message = "Akses Token Tidak Ada";
  }

  // 400
  else if (err.name === "Email/Password Salah") {
    code = 400;
    message = "Email/Password Salah";
  } else if (err.name === "Mohon Masukkan Password") {
    code = 400;
    message = "Mohon Masukkan Password";
  } else if (err.name === "Mohon Masukkan Email") {
    code = 400;
    message = "Mohon Masukkan Email";
  } else if (err.name === "Email Sudah Terdaftar") {
    code = 400;
    message = "Email Sudah Terdaftar";
  } else if (err.name === "Mohon Masukkan Nomor Telepon") {
    code = 400;
    message = "Mohon Masukkan Nomor Telepon";
  } else if (err.name === "Nomor Telepon Tidak Terdaftar") {
    code = 400;
    message = "Nomor Telepon Tidak Terdaftar";
  } else if (err.name === "Nomor Telepon Sudah Terdaftar") {
    code = 400;
    message = "Nomor Telepon Sudah Terdaftar";
  } else if (err.name === "Mohon Masukkan Password Lama Anda") {
    code = 400;
    message = "Mohon Masukkan Password Lama Anda";
  } else if (err.name === "Mohon Masukkan Password Baru Anda") {
    code = 400;
    message = "Mohon Masukkan Password Baru Anda";
  } else if (err.name === "Mohon Masukkan Konfirmasi Password Anda") {
    code = 400;
    message = "Mohon Masukkan Konfirmasi Password Anda";
  } else if (err.name === "Password Lama Anda Salah") {
    code = 400;
    message = "Password Lama Anda Salah";
  } else if (err.name === "Konfirmasi Password Anda Tidak Cocok") {
    code = 400;
    message = "Konfirmasi Password Anda Tidak Cocok";
  } else if (err.name === "Masukkan Rating 1 sampai 5") {
    code = 400;
    message = "Masukkan Rating 1 sampai 5";
  } else if (err.name === "Buku Sudah Terdaftar DI Favorite") {
    code = 400;
    message = `Buku ${err.buku} Sudah Terdaftar DI Favorite`;
  }

  // 404
  else if (err.name === "Id User Tidak Ditemukan") {
    code = 404;
    message = "Id User Tidak Ditemukan";
  } else if (err.name === "Id Category Tidak Ditemukan") {
    code = 404;
    message = "Id Category Tidak Ditemukan";
  } else if (err.name === "Id Penulis Tidak Ditemukan") {
    code = 404;
    message = "Id Penulis Tidak Ditemukan";
  } else if (err.name === "Id Buku Tidak Ditemukan") {
    code = 404;
    message = "Id Buku Tidak Ditemukan";
  } else if (err.name === "Id Favorite Tidak Ditemukan") {
    code = 404;
    message = "Id Favorite Tidak Ditemukan";
  }

  // 401 dan 403
  else if (err.name === "JsonWebTokenError") {
    code = 401;
    message = "Token Tidak Sesuai";
  } else if (err.name === "TokenExpiredError") {
    code = 401;
    message = "Token Sudah Expired";
  } else if (err.name === "Forbidden") {
    code = 403;
    message = "Maaf, Anda Tidak Memiliki Hak Akses";
  }
  res.status(code).json({
    statusCode: code,
    message: message,
  });
};

module.exports = handleError;
