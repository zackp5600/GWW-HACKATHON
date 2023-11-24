// const { OpenAI } = require('openai');

// require('dotenv').config();

// const apiKey = process.env.OPENAI_KEY;
// const openai = new OpenAI({apiKey: apiKey});

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{"role": "system", "content": "You are a helpful assistant."},
//         {"role": "user", "content": "Who won the world series in 2020?"},
//         {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
//         {"role": "user", "content": "Where was it played?"}],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices[0]);
// }
// main();

async function sendMessage() {
  const inputText = document.getElementById("inputText").value;

  const responseElement = document.getElementById("response");
  responseElement.innerHTML = "Loading...";

  const apiKey = "OPENAI_KEY"; // Replace with your OpenAI API key

  const apiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions"; // Change to the appropriate engine and endpoint

  const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiKey}`,
  };

  const requestBody = {
  prompt: inputText,
  max_tokens: 64,
  };

  try {
  const response = await fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestBody),
  });

  const responseData = await response.json();
  const generatedText = responseData.choices[0].text;

  responseElement.innerHTML = generatedText;
  } catch (error) {
  console.error('Error:', error);
  responseElement.innerHTML = "An error occurred.";
  }
  }