import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";

const feedback = () => {
  return (
    <Wrapper>
      <div class="feedback">
        <PageHero title="feedback" />
        <h3>Please submit your Feedback here : </h3>
        <form
          type="email"
          className="contact-form"
          action="https://formspree.io/f/xwkalwvo"
          method="POST"
        >
          <textarea cols="100" rows="20" className="form-input" name="_replyto">
            Feedback from :
          </textarea>
          <br></br>
          <button type="submit" class="btn btn-success">
            Submit :)
          </button>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  color: var(--clr-primary-1);
  .feedback {
    text-align: center;
  }
  textarea {
    outline: blue;
    border
  }`;

export default feedback;
