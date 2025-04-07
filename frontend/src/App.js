import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar.js"; // Matches the file name
import ResponseSection from "./components/ResponseSection";
import ProgressTracker from "./components/ProgressTracker"; // Import ProgressTracker
import "./styles/App.css";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [aiResponse, setAIResponse] = useState("");
  const [progress, setProgress] = useState(10); // Dynamic progress state

  const handleTopicClick = async (topic) => {
    const prompt = `Explain ${topic} with theory, examples, important interview questions, and code if required.`;
    setSelectedTopic(prompt);

    try {
      const response = await axios.post("http://localhost:5000/api/ask-ai", {
        prompt,
      });
      setAIResponse(response.data.response);
      setProgress((prevProgress) => (prevProgress + 10) % 100); // Update progress dynamically
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setAIResponse("Failed to fetch AI response.");
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Sidebar onTopicClick={handleTopicClick} />
        <div className="main-content">
          <ResponseSection
            selectedTopic={selectedTopic}
            aiResponse={aiResponse}
          />
          <ProgressTracker progress={progress} /> {/* Add ProgressTracker */}
        </div>
      </div>
    </div>
  );
}

export default App;
