import { useState } from "react";
import { API_BASE_URL } from "../config";
import { loadAuthToken } from "../utils/local-storage";

export default function useBooksApi() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function getAllBooks() {
    setLoading(true);
    setError(false);

    const authToken = loadAuthToken();

    return await fetch(`${API_BASE_URL}/books`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((res) => res.json())
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }

  return {
    error,
    loading,
    getAllBooks,
  };
}
