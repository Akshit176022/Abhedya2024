import React, { useState } from "react";
import "./Faq.css";

const faqData = [
  {
    question: "How many persons can be there in a team?",
    answer: "ashutoshashutoshashutoshashutoshashutoshashutoshashutoshashutoshvs",
  },
  {
    question: "How is the winning determined?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci deserunt asperiores delectus repellat magni!",
  },
  {
    question: "What is the cost of participation?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci deserunt asperiores delectus repellat magni!",
  },
];

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <h2>FAQs</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <button
            className={`accordion ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            {faq.question}
          </button>
          <div
            className="panel"
            style={{
              maxHeight: activeIndex === index ? "100px" : "0",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faqs;
