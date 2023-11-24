const apiKey = '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'
const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';


const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
};

const prompt = 'Translate the following English text to French:';

const requestBody = {
    prompt: prompt,
    max_tokens: 100,
};
function chatgpt(){
  var input = document.getElementById("input")
  var value = input.value;

  fetch(apiUrl, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(requestBody),
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  var output = document.getElementById("output");

  output = value;

}






function loadPage(pageNumber) {
  // Your code to load the corresponding page goes here
  console.log("Loading Page " + pageNumber);
  // You can replace the console.log statement with the actual logic to load the page
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
          fetch('http://localhost:3000/upload', {
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