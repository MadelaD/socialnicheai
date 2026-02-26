import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    try {
        const { prompt, platform, tone } = await req.json();

        const systemPrompt = `You are an expert social media manager for top brands. 
Create highly engaging, completely original content for the following platform: ${platform}. 
The desired tone is: ${tone}. 
Ensure the output is formatted cleanly, includes relevant hashtags if appropriate for the platform, and is highly optimized for engagement.`;

        const result = streamText({
            model: google('gemini-1.5-pro-latest'), // Use gemini-3.1-pro or similar when available in Vercel AI SDK
            system: systemPrompt,
            prompt: prompt,
        });

        return result.toTextStreamResponse();
    } catch (error) {
        console.error("Error generating content:", error);
        return new Response(JSON.stringify({ error: "Failed to generate content." }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
