import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import FaqBox from "./FaqBox";

export default function FaqSlider() {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <FaqBox
            answer="Based on their years of experience, our portfolio managers design and create baskets and determine the weight of each cryptocurrency based on the market research they conduct. The baskets have varying risk profiles to cater to the needs of the investors. Each basket has its unique idea, strategy, and characteristics. For example, please consider a simple basket that is named “Crypto Large Cap.” All the assets in this basket would be weighted according to their market cap. Since this basket includes the most stable coins, it will be relatively less risky than others."
            question="What is a basket?"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <FaqBox
            answer="The investors may find a basket to subscribe to either directly in our Suggested Baskets
             section or on the Discover page with the help of filters. On the Discover page, the investors can filter the matched baskets according to their volatility, subscription type, and risk type
             When the investors find their baskets, they read more about them by clicking the View Basket button. If they like a certain basket, they may subscribe to them through our Strip checkout."
            question="How does a subscription work?"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <FaqBox
            answer="The main aim of portfolio managers is to scale their business by reaching out to more investors and providing them with thoroughly market-researched crypto-currency baskets. Portfolio managers have the freedom to design and create their baskets based on their unique experiences and background. Each basket reflects an idea and a strategy of its creators. Hence, each basket has its theme. Moreover,  baskets have varying risk profiles to cater to the needs of the investors. Portfolio managers may pay close attention to these subjects based on their background experience and rebalance their baskets according to the current trends."
            question="Who are fund managers?"
          />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
