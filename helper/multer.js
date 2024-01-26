const multer = require("multer");
const fs = require("fs");

const upload = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      fs.mkdirSync(`upload/${file.fieldname}/`, { recursive: true });

      if (file.fieldname === "image") {
        cb(null, `./upload/image/`);
      }
    },
    filename: function (req, file, cb) {
      const tanggal = new Date().getTime().toString();
      cb(null, `${tanggal}${file.originalname}`);
    },
  });

  const uploadImg = multer({
    storage: storage,
    limits: {
      fieldNameSize: 100,
    },
  });

  return uploadImg;
};

module.exports = upload;
