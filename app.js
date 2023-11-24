const express = require('express');
const fs = require("fs");
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'src' folder
app.use(express.static(path.join(__dirname, 'src')));
app.get("/",(req,res)=>{
    try{
        res.write(fs.readFileSync("src/index.html"));
        res.end();
    }catch{
        res.write("REFRESH");
    }
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
const { OpenAI } = require('openai');

require('dotenv').config();

const apiKey = process.env.OPENAI_KEY;
const openai = new OpenAI({apiKey: apiKey});

async function main() {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": "Who won the world series in 2020?"},
          {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
          {"role": "user", "content": "Where was it played?"}],
      model: "gpt-3.5-turbo",
    });
  } catch (error) {
    console.log("error")
  }


  console.log(completion);
}
main();