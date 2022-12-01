import multer, { diskStorage } from "multer";

const storage = multer.diskStorage({
    // destination: function(req, file, cb){
    //     cb(null, './uploads/')
    // },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString()+'-'+file.originalname)
    }
})

const fileFilterC = (req, file, cb) =>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    }else{
        cb({message: 'Error image format'}, false);
    }
}

// export const uploads = multer({
//     storage: diskStorage({filename: function(req, file, cb){
//         cb(null, new Date().toISOString()+'-'+file.originalname)
//     }}),
//     limits: {fileSize: 500000}
// })

export const uploads = multer({
    storage: diskStorage({}),
    limits: {fileSize: 500000}
})

// module.exports = multer({
//     storage: multer.diskStorage({}),
//     limits: {fileSize: 500000}
// })

// export const upload = multer({
//     storage: storage,
//     limits: {fileSize: 500000},
//     fileFilter: fileFilterC,
// });

