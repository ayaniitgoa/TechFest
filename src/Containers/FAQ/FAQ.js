import React, { useState } from "react";
import "./FAQ.css";
import rightIcon from "./rightButton.svg";
import leftIcon from "./leftButton.svg";
import questions from "./questions";

function FAQ() {
  const [questionNum, setQuestionNum] = useState(0);

  return (
    <div className="faq__section">
      <h2 className="faq__title">FAQ</h2>
      <div className="faq__bottom__div">
        <div className="faq__left__button">
          <img src={leftIcon} className="left__button" />
        </div>
        <div className="row faq__questions__div">
          {/* <div className="row"> */}
          {questions.map((quest, index) => {
            return (
              <div className="full__question__box" key={index}>
                <div className="question__div">{quest.question}</div>
                <div className="answer__div">{quest.answer}</div>
              </div>
            );
          })}
          {/* </div> */}
        </div>
        <div className="faq__right__button">
          <img src={rightIcon} className="right__button" />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
