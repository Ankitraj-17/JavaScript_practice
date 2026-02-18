import {createAgent} from 'langchain'
import {ChatOllama} from '@langchain/ollama'
import { TavilySearch } from "@langchain/tavily";
// Use provided key or fallback to environment variable
const TAVILY_API_KEY = process.env.TAVILY_API_KEY ?? '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'
const accessInternet = new TavilySearch({
    maxResults:5,
    topic: 'news',
    searchDepth: "Advanced",
    travilyApiKey:TAVILY_API_KEY,
});

let ollama = new ChatOllama({
    model:"gemma3:270m",
    temperature:0.1,
})


let agent = createAgent({
    model: ollama,
    tools : [accessInternet],
})
const run = async () => {
    try {
        const response = await agent.invoke({
            role:"user",
            message: `use the ${accessInternet} tool and tell me about the current news`
        })
        console.log(response);
    } catch (e) {
        console.error(e);
    }
};

run();
