import React, { useState } from "react";

function TextAnalysis() {
  const [userInputText, setUserInputText] = useState("");
  const [fileText, setFileText] = useState("");
  const [result, setResult] = useState(null);

  const analyzeText = async (text) => {
    try {
      const response = await fetch("http://localhost:8000/api/analyze-text/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error analyzing text:", error);
      setResult({ error: "Something went wrong." });
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = () => {
        setFileText(reader.result);
        analyzeText(reader.result); // Automatically analyze file text
      };
      reader.readAsText(file);
    } else {
      alert("Please upload a valid .txt file.");
    }
  };

  const handleManualSubmit = () => {
    if (userInputText.trim() === "") {
      alert("Please enter some text.");
      return;
    }
    analyzeText(userInputText);
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "auto" }}>
      <h2>Text Disinformation Analysis</h2>

      {/* Manual Input */}
      <textarea
        rows="6"
        value={userInputText}
        onChange={(e) => setUserInputText(e.target.value)}
        placeholder="Paste or type text here..."
        style={{ width: "100%", marginBottom: "1rem" }}
      />
      <button onClick={handleManualSubmit} style={{ marginBottom: "1rem" }}>
        Analyze Text
      </button>

      <hr />

      {/* File Upload */}
      <h4>Or Upload a .txt File</h4>
      <input type="file" accept=".txt" onChange={handleFileUpload} />

      {/* Result Display */}
      {result && (
        <div style={{ marginTop: "1.5rem" }}>
          <h4>Analysis Result:</h4>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default TextAnalysis;