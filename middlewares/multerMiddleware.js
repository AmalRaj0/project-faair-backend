const multer =require('multer')

// to store multer data
const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    // create a new filename for images
    filename:(req,file,callback)=>{
        const filename=`image-${Date.now()}-${file.originalname}`
        callback(null,filename)
    }
})

// filter
const fileFilter = (req,file,callback)=>{
   const allowedMimeTpes=['image/png','image/jpeg','image/jpg']
   if(allowedMimeTpes.includes(file.mimetype)){
    callback(null,true)
   }else{
    callback(null,false)
    return callback(new Error("In valid type..must be image/png.image/jprq or image/jpg"))
   }
}
const multerConfig = multer({
    storage,fileFilter
})
module.exports = multerConfig