const { OpenAI } = require('openai');

require('dotenv').config();

const apiKey = process.env.OPENAI_KEY;
const openai = new OpenAI({apiKey: apiKey});

async function rewordQuestion() {
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are an assistant that helps reword homework questions for teachers."},
        {"role": "user", "content": "Without saying anything extra, reword this question:"}],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}
// main();