const express =require('express')
const router =new express.Router()
const userController =require("./controllers/userController")
const projectController=require("./controllers/projectController")
const multerConfug =require("./middlewares/multerMiddleware")
//register
const jwtmiddeleware=require('./middlewares/jwtMiddleware')
router.post('/register',userController.register)
router.post('/login',userController.login)
//add project api
router.post('/projects/add',jwtmiddeleware,multerConfug.single('projectImage') ,projectController.adduserproject)
router.get('/get-user-projectdetail',jwtmiddeleware,projectController.getuserproject)
router.get('/get-all-projectdetail',jwtmiddeleware,projectController.getallproject)
router.get('/get-home-projectdetail',projectController.gethomeproject)
// updateproject
router.put('/project/update-project/:id',jwtmiddeleware,multerConfug.single('projectImage'),projectController.editproject)
router.delete('/project/delete-project/:id',jwtmiddeleware,projectController.deleteproject)
module.exports=router