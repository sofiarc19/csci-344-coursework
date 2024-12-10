import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

export default function Suggestions({ token }) {
  const [suggestions, setSuggestions] = useState([]);

  async function fetchSuggestions() {
    const data = await getDataFromServer(token, "/api/suggestions");
    setSuggestions(data);
  }

  useEffect(() => {
    fetchSuggestions();
  }, []);

  return (
    <div className="mt-4">
      <p className="text-base text-gray-400 font-bold mb-4">
        Suggestions for you
      </p>

      <section className="flex justify-between items-center mb-4 gap-2">
        {suggestions.length > 0 ? (
          suggestions.map((suggestion) => (
            <div key={suggestion.id}>{suggestion.name}</div>
          ))
        ) : (
          <p>No suggestions available.</p>
        )}
      </section>
    </div>
  );
}

