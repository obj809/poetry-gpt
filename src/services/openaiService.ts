/* src/services/openaiService.ts */

import axios from "axios";

interface ApiResponse {
  text: string;
}

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

export const generateCompletion = async (prompt: string): Promise<string> => {
  const response = await axios.post<ApiResponse>(
    `${API_BASE_URL}/generate`,
    { prompt },
    { headers: { "Content-Type": "application/json" } }
  );

  return response.data.text;
};