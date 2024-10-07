import React, { useContext, useRef } from "react";
import classes from "./askQuestion.module.css";
import {axiosInstance} from "../../../utility/axios";
import { Link } from "react-router-dom";
import Layout from "../../../Layout/Layout";
import { UserState } from "../../../App";
// import { StatusCodes } from "http-status-codes";
// import { useNavigate } from "react-router-dom";
function AskQuestion() {
  const {user}=useContext(UserState);

  // const navigate = useNavigate();
  const titleDom = useRef();
  const descriptionDom = useRef();
  const userId = user?.userid;
  console.log(user)
  async function handleSubmit(e) {
    e.preventDefault();
    const title = titleDom.current.value;
    const description = descriptionDom.current.value; // Make a POST request to your server to create a new question
const userid=userId;
const tag="General";
    // Make a POST request to your server to create a new question
    const response = await axiosInstance.post("/question", { userid, title, description, tag });
    
    try {
      if (response.status === 201) {
        console.log("Question created successfully");
        window.location.href = "/"; // Redirect to the home page and refresh the page
      } else {
        console.error("Failed to create question");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Layout>
      <div className={classes.question__container}>
        <div className={classes.question__wrapper}>
          <h3 className={classes.question__header__title}>
            <span className={classes.highlight}>
              Steps To Write A Good Question
            </span>
          </h3>
          <div className={classes.question__list}>
            <ul className={classes.question__listUl}>
              <li>Summarize your problems in a one-line title.</li>
              <li>Describe your problem in more detail.</li>
              <li>
                Explain what you have tried and what you expected to happen.
              </li>
              <li>Review your question and post it to the site.</li>
            </ul>
          </div>

          <h4 className={classes.highlight}>Post Your Question</h4>
          <div className={classes.question__header__titleTwo}>
            <form onSubmit={handleSubmit} className={classes.question__form}>
              <input
                className={classes.question__title2}
                ref={titleDom}
                type="text"
                placeholder="Question title"
                required
              />
              <textarea
                rows={4}
                className={classes.question__description}
                ref={descriptionDom}
                type="text"
                placeholder="Question Description..."
                required
              />

              <span>
                <button
                  className={classes.question__button}
                  variant="primary"
                  type="submit"
                >
                  Post Question
                </button>
                <span>
                  <Link to={"/"}>
                    <button
                      className={classes.question__btn}
                      variant="success"
                      type="submit"
                    >
                      Back to Home
                    </button>
                  </Link>
                </span>
              </span>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AskQuestion;
