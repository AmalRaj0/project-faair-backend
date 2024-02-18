const projects=require("../Models/projectSchema")

//add project

exports.adduserproject=async(req,res)=>{
    console.log("add user project");
    //user Id
    // res.status(200).json("Add user project request")
    const userId=req.payload
    //get add project details
    const {title,language,github,link,overview}=req.body
    //get the image
    projectImage=req.file.filename
    console.log(projectImage);
    //logic
    try{
        const existingproject= await projects.findOne({github})
        if(existingproject){
           res.status(400).json("project already exist")
        }else{
            const newproject=  new projects({userId,title,language,github,link,overview,projectImage})
            await  newproject.save()
            res.status(200).json(newproject)
        }
    }catch(err){
        res.status(404).json({message:err.message})
    }
}
exports.getuserproject=async(req,res)=>{
    const userId=req.payload
    try {
        const userproject=await projects.find({userId})
        res.status(200).json(userproject)
        
    } catch (error) {
      res.status(401).json(error.message)  
    }
}
exports.getallproject=async(req,res)=>{
    const searchkey=req.query.search
    const query={
        language:{
            $regex:searchkey,
            $options:"i"
        },
        title:{
            $regex:searchkey,
            $options:"i"
        }
    }
    try {
        const allproject=await projects.find(query)
     return  res.status(200).json(allproject)
    } catch (error) {
        return res.status(401).json(error.message)  
    }
}
exports.gethomeproject=async(req,res)=>{
try {
    const homeproject=await projects.find().limit(3)
    res.status(200).json(homeproject)
} catch (error) {
    return res.status(401).json(error.message) 
}
}
exports.editproject=async(req,res)=>{
const {title,language,github,link,overview,projectImage}=req.body
const uploadedImage=req.file?req.file.filename:projectImage
const userId=req.payload
const {id}=req.params
try {
   const updateproject= await projects.findByIdAndUpdate({_id:id},{title,language,github,link,overview,projectImage:uploadedImage,userId},{new:true}) 
   await updateproject.save()
   return res.status(200).json(updateproject)
} catch (error) {
   return  res.status(401).json(error)
}
}
exports.deleteproject=async(req,res)=>{
    const {id}=req.params
try{
   const deleteproject=await projects.findByIdAndDelete({_id:id})
   return res.status(200).json(deleteproject)
}catch (err){
    return res.status(200).json(err.message)
}
}