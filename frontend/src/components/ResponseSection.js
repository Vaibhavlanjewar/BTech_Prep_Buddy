import React from "react";

const ResponseSection = ({ selectedTopic, aiResponse }) => {
  return (
    <div className="response-section">
      <h3>Selected Topic:</h3>
      <p>{selectedTopic}</p>

      <h3>AI Response:</h3>
      <div className="response">
        {aiResponse.split("\n").map((line, index) => {
          if (line.startsWith("**")) {
            return <h4 key={index}>{line.replace(/\*\*/g, "")}</h4>;
          } else if (line.startsWith("*")) {
            return (
              <ul key={index}>
                <li>{line.replace(/\*/g, "")}</li>
              </ul>
            );
          } else if (line.startsWith("```")) {
            return (
              <pre key={index}>
                <code>{line.replace(/```/g, "")}</code>
              </pre>
            );
          } else {
            return <p key={index}>{line}</p>;
          }
        })}
      </div>
    </div>
  );
};

export default ResponseSection;