import OpenAI from "openai";

const openai = new OpenAI();

async function queryBot(prompt) {
  return  await openai.chat.completions.create({
    messages: [{ role: "system", content: prompt}],
    model: "gpt-4",
    // model: "gpt-3.5-turbo",
  });
}

async function main() {
  const input_prompt = Bun.argv[2];
  const response = await queryBot(input_prompt);
  console.log(response.choices[0]['message']['content']);
}

main();
