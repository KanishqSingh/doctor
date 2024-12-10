import multer from "multer";


// const storage = multer.diskStorage({
//     // Configure filename
//     filename: function (req, file, callback) {
//         callback(null, file.originalname); // Correctly call the callback function
//     }
// });

// const upload = multer({
//     storage
// });

// export default upload;

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads'); // Define a folder to save the files temporarily
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({
    storage
});
export default upload;

