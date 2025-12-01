/* src/services/openaiService.ts */

import axios from 'axios';

const apiKey: string = import.meta.env.VITE_OPENAI_API_KEY || '';
const apiUrl: string = import.meta.env.VITE_OPENAI_API_URL || '';
const model: string = import.meta.env.VITE_OPENAI_MODEL || '';

interface Message {
    content: string;
}

interface Choice {
    message: Message;
}

interface CompletionResponse {
    choices: Choice[];
}

export const generateCompletion = async (prompt: string): Promise<string> => {
    try {
        const response = await axios.post<CompletionResponse>(apiUrl, {
            model: model,
            messages: [{ role: "user", content: prompt }]
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data.choices[0].message.content);
        return response.data.choices[0].message.content;
    } catch (error) {
        console.log('There was an error')
        console.error('Error in generating completion:', error);
        throw error;
    }
};
