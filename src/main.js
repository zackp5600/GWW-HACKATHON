const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
};

function chatgpt() {
    console.log("hello");
    var input = document.getElementById("title");
    var value = input.innerHTML;

    // Update the requestBody with the user's input
    console.log(value);
    const requestBody = {
        prompt: "You are a helpful chat assistant. Make a similar question that is related to this question. Do not add any extra information:".concat(value),
        max_tokens: 100 ,
        // temperature: 0.2,
        // // model: "gpt-3.5-turbo",
        // model: "gpt-3.5-turbo"

    };

    var output = document.getElementById("paragraph");

    fetch(apiUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.choices[0]);
        // Update the output element with the generated text
        output.innerHTML = data.choices[0].text;
    })
    .catch(error => console.error('Error:', error));
}


function loadPage(pageNumber) {
  // Your code to load the corresponding page goes here
  console.log("Loading Page " + pageNumber);
  // You can replace the console.log statement with the actual logic to load the page
}
