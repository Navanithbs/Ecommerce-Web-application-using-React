import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";
const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            To ensure a high conversion rate, any web store should be designed
            with the needs of the target audience in mind. If you want to
            comprehend the full specifics of furniture ecommerce and understand
            how to win customers in this exact domain, I can recommend an
            article by my colleague providing in-depth guidance on how to launch
            and sell furniture online smartly. the essential design practices
            followed are : * Create spacious and uncluttered design, which is
            trendy now. * At the very least, make filtering by brands and price
            range.* Vary content types to present products attractively and
            rival real-life shopping.* Video, 3D visualization, product
            builders, and assembly tutorials help customers with a choice
            online.* Find a way to showcase furniture items in real interiors:
            with images or AR applications. Integrate messengers for customers
            to easily share and discuss the items they like.* Take a fresh look
            at commonplace functionality and start using live chat for a
            customer experience survey.* Use lower-priced items as upsells.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
