const express=require('express')
const app=express();
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const helmet=require('helmet')
const morgan=require('morgan')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth') 
const postRoute = require('./routes/posts') 
const multer = require ("multer")
const path = require ("path")
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
  // middleware
app.use("/images",express.static(path.join(__dirname,"public/images")))
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"public/images/posts")
  },
  filename:(req,file,cb)=>{
    const customName = req.body.name;
    cb(null, customName ? customName : Date.now() + path.extname(file.originalname));
  }
})

const upload=multer({storage});
app.post("/api/upload",upload.single("file"),(req,resp)=>{
  try{
    return resp.status(200).json("File uploaded Successfully.")
  }catch(err){
    console.log(err);
  }
})

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);

app.listen(8801,()=>{
  console.log("backend of app is ready to run");
})