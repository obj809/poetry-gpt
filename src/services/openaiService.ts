/* src/services/openaiService.ts */

import axios from "axios";

interface ApiResponse {
  text: string;
}

export const generateCompletion = async (prompt: string): Promise<string> => {
  const response = await axios.post<ApiResponse>(
    "http://localhost:3001/generate",
    { prompt }
  );

  return response.data.text;
};
