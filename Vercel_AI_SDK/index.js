import { openai } from "./config.js"
import { generateText, embed } from "ai"

const EMBEDDING_MODEL_NAME = 'text-embedding-3-small';
const aiModel = openai("gpt-5.4-mini-2026-03-17")

async function main() {

    const textToEmbed = await generateResponse()
    await generateEmbeddings(textToEmbed)

}
main()

async function generateResponse() {

    const { text } = await generateText({
        model: aiModel,
        prompt: 'Give me a recipe for pastitsio'
    })

    console.log(`Generated text: ${text}\n\n`)

    return text
}

async function generateEmbeddings(textToEmbed) {

    const { embedding } = await embed({
        model: openai.textEmbeddingModel(EMBEDDING_MODEL_NAME),
        value: textToEmbed
    })
    console.log(`Embedding generated: ${embedding}`)
}