import React from "react";

import Script from "dangerous-html/react";
import PropTypes from "prop-types";

import "./hero.css";

const Hero = (props) => {
  return (
    <div className="hero-header78">
      <div className="hero-column thq-section-padding thq-section-max-width">
        <div className="hero-content1">
          <h1 className="hero-text1 thq-heading-1">{props.heading1}</h1>
          <p className="hero-text2 thq-body-large">{props.content1}</p>
        </div>
        <div className="hero-actions">
          <button className="thq-button-filled hero-button1">
            <a href="./complaint">
              <span className="thq-body-small">{props.action1}</span>
            </a>
          </button>
        </div>
      </div>
      <div className="hero-content2">
        <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="hero-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image28 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image29 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image30 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image31 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image32 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  );
};

Hero.defaultProps = {
  image1Src:
    "https://imgs.search.brave.com/Pd4tzKDM6mRpxOcUr9uO8Gz5GpIN0WoltHq9puqzn0A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAw/MzQxNjk0Ni92ZWN0/b3IvYmFuZGFnZWQt/d29tYW4uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUJGNm80/alJrdUdlYVRsVFVh/NWZHLXR1a3BrLWh1/aGczaHhCRUZBcG1y/d3M9",
  image1Alt: "Stop Domestic Violence Poster",

  image2Src:
    "https://imgs.search.brave.com/EUIxz3y3Y5mnJah1zn4MdveL9enafcrFGmzwJ4rFr64/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ha20t/aW1nLWEtaW4udG9z/c2h1Yi5jb20vbGlu/Z28vY29zbW8vaW1h/Z2VzL3N0b3J5LzE0/NDkyMDkzMjQtZW5o/YW5jZWQtMjA3MDUt/MTQ0OTE0MTMzNS00/LmpwZw",
  image2Alt: "Elimination of Violence Against Women Illustration",

  image3Src:
    "https://imgs.search.brave.com/SCpLpaIcnKyBBf3USccgylgxdZUtHdNdRH0_H_3P0NM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vc2FmZXR5/Y2FydG9vbi5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDQvc2FmZXR5LWNh/cnRvb24tc2xpcC10/cmlwLWZhbGxzLWhh/emFyZC5qcGc_cmVz/aXplPTMxNiw0NDcm/c3NsPTE",
  image3Alt: "Powerful Women Safety Poster from Pinterest",

  image4Src:
    "https://imgs.search.brave.com/LaFYNolcXOPvvuUCI6wdeYcHonx0k_JA7vGd2exMJ28/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ExL2Jl/L2QxL2ExYmVkMTgw/MmI0MjY0MWFmYjhj/MTM5OWQ1NTcwNGY1/LmpwZw",
  image4Alt: "Cartoon Movement – Women Empowerment Cartoon",

  image5Src:
    "https://imgs.search.brave.com/F697Jfn_EZcHHmiNq_oD1uKeuX8IJnmuKcSgkkGANSo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg1LzE1/L2IxLzg1MTViMWE1/NTAzN2Q5YWY5Y2Vi/MzU1YWM3ZjVmZGRj/LmpwZw",
  image5Alt: "Workplace Safety Cartoon – Women",

  image6Src:
    "https://imgs.search.brave.com/vJ1_6RDX3apqy0HMEJREvhk4iOUF84OTBl_dYs68RB4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNhL2Jm/L2JjLzNhYmZiYzg3/YmE5ODk2OTgwNDU5/NTZhMjU3NzlmMjNj/LmpwZw",
  image6Alt: "Shutterstock – Stop Violence Banner",

  image7Src:
    "https://imgs.search.brave.com/73zuCr4g-BFDzfk1dp8DiRiLxnP0Jp2h3gYadSp5QRU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L3N0YXRpYy9zeXMt/aW1hZ2VzL0d1YXJk/aWFuL1BpeC9waWN0/dXJlcy8yMDEyLzMv/Ny8xMzMxMTI1Mjkx/MTI1L0NhcnRvb25z/LWFib3V0LWdlbmRl/ci0wMDUuanBnP3dp/ZHRoPTMwMCZxdWFs/aXR5PTg1JmF1dG89/Zm9ybWF0JmZpdD1t/YXgmcz0zNjFhY2Vk/ODdjZGNiMTNjMzEz/NGJkN2YyYTk1NDIz/ZA",
  image7Alt: "Freepik – Stop Abuse Illustration",

  image8Src:
    "https://imgs.search.brave.com/oFRLugV3doTRdCbSJxYIzmqhv4DGNsl-JS1w4c5vVHo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L3N0YXRpYy9zeXMt/aW1hZ2VzL0d1YXJk/aWFuL1BpeC9waWN0/dXJlcy8yMDEyLzMv/Ny8xMzMxMTI1Mjg2/ODM1L0NhcnRvb25z/LWFib3V0LWdlbmRl/ci0wMDMuanBnP3dp/ZHRoPTMwMCZxdWFs/aXR5PTg1JmF1dG89/Zm9ybWF0JmZpdD1t/YXgmcz1hODNjZjQ2/ZjViMjk2YjQ2YzMx/NTdjYTEzZTM5YjE4/Ng",
  image8Alt: "Shielding Women from Violence – Getty",

  image9Src:
    "https://imgs.search.brave.com/v4gGG8dIqyHGztOJU6P0pQcn0fPwNdGfG9cVoNFqNfI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L3N0YXRpYy9zeXMt/aW1hZ2VzL0d1YXJk/aWFuL1BpeC9waWN0/dXJlcy8yMDEyLzMv/OC8xMzMxMjEyMTE0/ODI5L0NhcnRvb25z/LW9uLWdlbmRlci0t/MDAxLmpwZz93aWR0/aD0zMDAmcXVhbGl0/eT04NSZhdXRvPWZv/cm1hdCZmaXQ9bWF4/JnM9MTE3ZTRkZTBl/YTgyM2U2M2UyYjYw/MWY3YjExYzQxYWE",
  image9Alt: "Guardian – Violence Against Women Cartoon",

  image10Src:
    "https://imgs.search.brave.com/wsqgxguG5tacsO0iyUxHImlEym2etqZvc4ddxOC_fTI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L3N0YXRpYy9zeXMt/aW1hZ2VzL0d1YXJk/aWFuL1BpeC9waWN0/dXJlcy8yMDEyLzMv/Ny8xMzMxMTI1Mjk3/NjI4L0NhcnRvb25z/LWFib3V0LWdlbmRl/ci0wMDguanBnP3dp/ZHRoPTMwMCZxdWFs/aXR5PTg1JmF1dG89/Zm9ybWF0JmZpdD1t/YXgmcz1iMzBhMGQw/ZGVkZDI4MDFkMzcw/MjdhMmFjOTYwNDk2/Zg",
  image10Alt: "Guardian – Violence Against Women Cartoon",

  image11Src:
    "https://imgs.search.brave.com/yJ97SXgW0biCfdXXlaLVG7g4pNgB6iS-oKOXg84v1s4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saXZl/LnN0YXRpY2ZsaWNr/ci5jb20vMTU0Ni8y/NTc3NzUzOTYxMV84/MDY4NTE0YzMxLmpw/Zw",
  image11Alt: "Guardian – Violence Against Women Cartoon",

  image12Src:
    "https://imgs.search.brave.com/W5xdRphhLBylN433pUqsnJvSL3eLXvEDj_y2BOUKLaM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L3N0YXRpYy9zeXMt/aW1hZ2VzL0d1YXJk/aWFuL1BpeC9waWN0/dXJlcy8yMDEyLzMv/Ny8xMzMxMTI1Mjkz/MzMwL0NhcnRvb25z/LWFib3V0LWdlbmRl/ci0wMDYuanBnP3dp/ZHRoPTMwMCZxdWFs/aXR5PTg1JmF1dG89/Zm9ybWF0JmZpdD1t/YXgmcz03N2JlODIy/YTcyNGE5MjJmNDEy/NzZhMDViMmUyYTg5/Ng",
  image12Alt: "Guardian – Violence Against Women Cartoon",

  heading1: "Stop Abuse Today.",
  content1:
    "Join us on a journey to make safety commonplace. Our expertly designed alert system helps women face confidently.",
  action1: "Report a Problem",
};

Hero.propTypes = {
  image3Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image12Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image11Alt: PropTypes.string,
  action1: PropTypes.string,
  image8Src: PropTypes.string,
  image5Src: PropTypes.string,
  image4Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  image10Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image1Src: PropTypes.string,
};

export default Hero;
