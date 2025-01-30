import React, { useState } from "react";
import subjectsData from "../data/subjects.json";

const Sidebar = ({ onTopicClick }) => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <div className="sidebar">
      <h2>Subjects</h2>
      <ul>
        {subjectsData.subjects.map((subject, index) => (
          <li key={index} onClick={() => setSelectedSubject(subject)}>
            {subject.name}
          </li>
        ))}
      </ul>

      {selectedSubject && (
        <div className="subtopics">
          <h3>{selectedSubject.name}</h3>
          <ul>
            {selectedSubject.topics.map((topic, idx) => (
              <li key={idx} onClick={() => onTopicClick(topic)}>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;