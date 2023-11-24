const express = require('express');
const fs = require("fs");
const path = require('path');
const multer = require('multer'); // For handling file uploads


const app = express();
const port = 3000;


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Files will be stored in the 'uploads' directory
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname);
  }
});


const upload = multer({ storage: storage });  


// Serve static files from the 'src' folder
app.use(express.static(path.join(__dirname, 'src')));
app.get("/quizzes",(req,res)=>{
    try{
        res.write(fs.readFileSync("src/index.html"));
        res.end();
    }catch{
        res.write("REFRESH");
    }
});

app.post('/upload', upload.single('pdfFile'), (req, res) => {
  // Assuming you want to send a response back to the client
  res.json({ message: 'File uploaded successfully!' });

  // Do further processing with the uploaded file if needed
  // For example, you can access the file details using req.file
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});