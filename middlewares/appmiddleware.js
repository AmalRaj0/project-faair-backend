const appmiddleware=(req,res,next)=>{
    console.log("inside the app middleware");
    next()
}
module.exports=appmiddleware