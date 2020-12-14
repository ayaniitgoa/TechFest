import React, { Component } from "react";
import "./FAQ.css";
import rightIcon from "./rightButton.svg";
import leftIcon from "./leftButton.svg";
import questions from "./questions";

export default class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, questionNum: 4, questionIncrease: 4 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (window.innerWidth < 990) {
      this.setState({
        questionNum: 1,
        questionIncrease: 1,
      });
    } else {
      this.setState({
        questionNum: 4,
        questionIncrease: 4,
      });
    }
  }

  handleForwardPage = () => {
    this.setState(() => {
      if (this.state.questionNum < questions.length) {
        return {
          questionNum: this.state.questionNum + this.state.questionIncrease,
        };
      }
    });
  };
  handleBackPage = () => {
    this.setState(() => {
      if (this.state.questionNum > 4) {
        return {
          questionNum: this.state.questionNum - this.state.questionIncrease,
        };
      }
    });
  };

  render() {
    return (
      <div className="faq__section">
        <h2 className="faq__title">FAQ</h2>
        <div className="faq__bottom__div">
          <div
            className="faq__left__button"
            onClick={() => this.handleBackPage()}
          >
            <img src={leftIcon} alt="left" className="left__button" />
          </div>
          <div className="row faq__questions__div">
            {questions.map((quest, index) => {
              if (
                index < this.state.questionNum &&
                this.state.questionNum - this.state.questionIncrease <= index
              ) {
                return (
                  <div
                    className={
                      this.state.questionIncrease === 1
                        ? "full__question__box__large"
                        : "full__question__box"
                    }
                    key={index}
                  >
                    <div className="question__div">{quest.question}</div>
                    <div className="answer__div">{quest.answer}</div>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div
            className="faq__right__button"
            onClick={() => this.handleForwardPage()}
          >
            <img alt="right-btn" src={rightIcon} className="right__button" />
          </div>
        </div>
      </div>
    );
  }
}
