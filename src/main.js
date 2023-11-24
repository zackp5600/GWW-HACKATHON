// const { OpenAI } = require('openai');

// require('dotenv').config();

// const apiKey = process.env.OPENAI_KEY;
// const openai = new OpenAI({apiKey: apiKey});

async function rewordQuestion(question) {
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are a helpful assistant that will create similar questions to the one provided."},
        {"role": "user", "content": "Make one question similar to this one:".concat(question, "Only output the question, do not say anything else.")}],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

function uploadPDF() {
  // Get the file input element
  var fileInput = document.getElementById('fileInput');

  // Check if any file is selected
  if (fileInput.files.length > 0) {
      // Get the selected file
      var file = fileInput.files[0];

      // Check if the selected file is a PDF
      if (file.type === 'application/pdf') {
          // Create a FormData object to append the file
          var formData = new FormData();
          formData.append('pdfFile', file);

          // You can use XMLHttpRequest or fetch to send the file to the server
          // Here's an example using fetch:
          fetch('your-upload-endpoint', {
              method: 'POST',
              body: formData
          })
          .then(response => response.json())
          .then(data => {
              console.log('File uploaded successfully:', data);
          })
          .catch(error => {
              console.error('Error uploading file:', error);
          });
      } else {
          alert('Please select a PDF file.');
      }
  } else {
      alert('Please choose a file to upload.');
  }
}