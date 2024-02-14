const mongoose =require("mongoose")
const connectionString=process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("mongodb connection Established");
}).catch((error)=>{
console.log("mongodb connection error");
})
// await mongoose.connect(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }); 
//   await parseAndLoadPlanetsData();