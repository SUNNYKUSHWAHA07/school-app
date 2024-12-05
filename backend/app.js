const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongodb = require('./mongoose');
const cors= require('cors')
const multer= require('multer');
const school = require('./model')
const path = require('path');
const cloudinary =  require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})



const app = express();
const _dirname = path.resolve()
app.use(express.json());
app.use(express.urlencoded({extended: true}))
mongodb();
app.use(cors());

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "schoolproject", 
      format: async () => "jpeg", 
      public_id: (req, file) => file.filename, 
    },
  });
const upload = multer({storage})

app.post("/upload",upload.single("image"), async function(req, res) {
    try{
        const{ email,address,city,name } = req.body;
        

        if(!email){
            return res.status(400).send("invaild email address");
        }

        if (!req.file) {
            return res.status(400).send("No file uploaded!");
        }


        const newImage = new school({
           email,
           image: req.file.path,
           contentType: req.file.mimetype,
           address,
           name,
           city,
        });

        await newImage.save();

    }catch(err){
        console.log(err);
        res.status(500).json({ success: false, error: "Failed to upload image" });
    }

}
)

app.get("/getschool",  async function(req,res){
   try{
    const schools = await school.find();
    if(!schools || schools.length === 0){
        return res.status(404).send("No school found");
    }

   res.send(schools);
   }catch(err){
    console.log(err);
   }
})

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(_dirname, "/frontend/dist")));

  app.get("*", (req, res) =>{
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
  })
}

app.listen(5000, function() {
    console.log('Server started on port 5000')
})