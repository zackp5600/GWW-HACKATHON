import OpenAI from "openai";

const openai = new OpenAI();

async function generateSimilarQuestionFunction(question) {
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are a helpful assistant that will create similar questions to the one provided."},
        {"role": "user", "content": "Make one question similar to this one:".concat(question, "Only output the question, do not say anything else.")}],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}
generateSimilarQuestionFunction("Joe has 5 apples. If Amy takes two, how many does he have?");

document.getElementById("")