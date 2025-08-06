import React, { useState } from "react";
import "./FAQ.css";
import Scrolltop from "../../components/ScrollTop/Scrolltop";
import Navbar from "../../components/navbar";
import { Fragment } from "react";

export default function FAQ() {
  const [isOneActive, setOneActive] = useState(true);
  const [isTwoActive, setTwoActive] = useState(true);
  const [isThreeActive, setThreeActive] = useState(true);
  const [isFourActive, setFourActive] = useState(true);
  const [isFiveActive, setFiveActive] = useState(true);
  const [isSixActive, setSixActive] = useState(true);
  const [isSevenActive, setSevenActive] = useState(true);
  const [isEightActive, setEightActive] = useState(true);
  const [isNineActive, setNineActive] = useState(true);
  const [isTenActive, setTenActive] = useState(true);
  const [isElevenActive, setElevenActive] = useState(true);
  const [isTwelveActive, setTwelveActive] = useState(true);


  const handleToggle = (ques) => {
  switch (ques) {
    case "one":
      setOneActive((prev) => !prev);
      break;
    case "two":
      setTwoActive((prev) => !prev);
      break;
    case "three":
      setThreeActive((prev) => !prev);
      break;
    case "four":
      setFourActive((prev) => !prev);
      break;
    case "five":
      setFiveActive((prev) => !prev);
      break;
    case "six":
      setSixActive((prev) => !prev);
      break;
    case "seven":
      setSevenActive((prev) => !prev);
      break;
    case "eight":
      setEightActive((prev) => !prev);
      break;
    case "nine":
      setNineActive((prev) => !prev);
      break;
    case "ten":
      setTenActive((prev) => !prev);
      break;
    case "eleven":
      setElevenActive((prev) => !prev);
      break;
    case "twelve":
      setTwelveActive((prev) => !prev);
      break;
    default:
      break;
  }
};

  return (
    <Fragment>
      <Navbar></Navbar>
  <section className="faq__container">
    <Scrolltop showBelow={250} />
    <div>
      <h2 className="faq__title">FAQs About Women's Safety</h2>

      <div className={`faq ${isOneActive ? "" : "active"}`} onClick={handleToggle.bind(this, "one")} key="1">
        <div className="faq__question">
          <h3>Q: What should I do if I feel unsafe in public?</h3>
          <svg width="15" height="10" viewBox="0 0 42 25"><path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/></svg>
        </div>
        <div className="faq__answer">
          <p>If you feel unsafe, trust your instincts. Move to a crowded, well-lit place, inform someone you trust, and contact emergency services if necessary.</p>
        </div>
      </div>

      <div className={`faq ${isTwoActive ? "" : "active"}`} onClick={handleToggle.bind(this, "two")} key="2">
        <div className="faq__question">
          <h3>Q: Are there safety apps women can use?</h3>
          <svg width="15" height="10" viewBox="0 0 42 25"><path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/></svg>
        </div>
        <div className="faq__answer">
          <p>Yes, apps like bSafe, Raksha, Safetipin, and My Safetipin allow you to share your location, alert emergency contacts, and even record situations in real time.</p>
        </div>
      </div>

      <div className={`faq ${isThreeActive ? "" : "active"}`} onClick={handleToggle.bind(this, "three")} key="3">
        <div className="faq__question">
          <h3>Q: What should I carry for personal safety?</h3>
          <svg width="15" height="10" viewBox="0 0 42 25"><path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/></svg>
        </div>
        <div className="faq__answer">
          <p>Carry a fully charged phone, a small personal alarm, pepper spray (if legal in your area), and emergency contacts written down in your wallet.</p>
        </div>
      </div>

      <div className={`faq ${isFourActive ? "" : "active"}`} onClick={handleToggle.bind(this, "four")} key="4">
        <div className="faq__question">
          <h3>Q: How can I stay safe while commuting alone?</h3>
          <svg width="15" height="10" viewBox="0 0 42 25"><path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/></svg>
        </div>
        <div className="faq__answer">
          <p>Use verified public transport, avoid dark or empty streets, and let someone know your route and arrival time. Use live location sharing if possible.</p>
        </div>
      </div>

      <div className={`faq ${isFiveActive ? "" : "active"}`} onClick={handleToggle.bind(this, "five")} key="5">
        <div className="faq__question">
          <h3>Q: What are some trusted helpline numbers for women?</h3>
          <svg width="15" height="10" viewBox="0 0 42 25"><path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/></svg>
        </div>
        <div className="faq__answer">
          <p>In India, you can call 112 for emergencies, 1091 for women's helpline, and 181 for support services. Save them in your phone for quick access.</p>
        </div>
      </div>

      <div className={`faq ${isSixActive ? "" : "active"}`} onClick={handleToggle.bind(this, "six")} key="6">
        <div className="faq__question">
          <h3>Q: How can I identify potentially unsafe situations?</h3>
          <svg width="15" height="10" viewBox="0 0 42 25"><path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/></svg>
        </div>
        <div className="faq__answer">
          <p>Be alert to unusual behavior, persistent following, or people invading your space. If you feel uncomfortable, remove yourself from the situation quickly.</p>
        </div>
      </div>

      <div className={`faq ${isSevenActive ? "" : "active"}`} onClick={handleToggle.bind(this, "seven")} key="7">
        <div className="faq__question">
          <h3>Q: What should I do if I experience online harassment?</h3>
          <svg width="15" height="10" viewBox="0 0 42 25"><path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/></svg>
        </div>
        <div className="faq__answer">
          <p>Do not respond. Take screenshots, block the offender, and report the incident to the platform. You can also file a complaint with cybercrime authorities.</p>
        </div>
      </div>

      <div className={`faq ${isEightActive ? "" : "active"}`} onClick={handleToggle.bind(this, "eight")} key="8">
        <div className="faq__question">
          <h3>Q: Are self-defense classes effective?</h3>
          <svg width="15" height="10" viewBox="0 0 42 25"><path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/></svg>
        </div>
        <div className="faq__answer">
          <p>Yes, learning basic self-defense improves confidence and helps you react wisely during threats. Look for local or online classes specifically for women.</p>
        </div>
      </div>

      <div className={`faq ${isNineActive ? "" : "active"}`} onClick={handleToggle.bind(this, "nine")} key="9">
        <div className="faq__question">
          <h3>Q: What legal rights do women have against harassment?</h3>
          <svg width="15" height="10" viewBox="0 0 42 25"><path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/></svg>
        </div>
        <div className="faq__answer">
          <p>Women are protected under laws like IPC Section 354 (outraging modesty), 509 (insulting modesty), and the POSH Act at workplaces. Know your rights and report violations.</p>
        </div>
      </div>

      <div className={`faq ${isTenActive ? "" : "active"}`} onClick={handleToggle.bind(this, "ten")} key="10">
        <div className="faq__question">
          <h3>Q: How do I safely use cabs or ride-sharing apps?</h3>
          <svg width="15" height="10" viewBox="0 0 42 25"><path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/></svg>
        </div>
        <div className="faq__answer">
          <p>Check driver details, share ride status, sit in the back seat, and avoid sharing personal info. Avoid taking rides alone at night if avoidable.</p>
        </div>
      </div>

      <div className={`faq ${isElevenActive ? "" : "active"}`} onClick={handleToggle.bind(this, "eleven")} key="11">
        <div className="faq__question">
          <h3>Q: Can bystanders help during harassment incidents?</h3>
          <svg width="15" height="10" viewBox="0 0 42 25"><path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/></svg>
        </div>
        <div className="faq__answer">
          <p>Yes. Bystanders can help by creating a distraction, offering support, or calling for help. Avoid physical confrontation if it puts you or the victim at risk.</p>
        </div>
      </div>

      <div className={`faq ${isTwelveActive ? "" : "active"}`} onClick={handleToggle.bind(this, "twelve")} key="12">
        <div className="faq__question">
          <h3>Q: What role does community play in women’s safety?</h3>
          <svg width="15" height="10" viewBox="0 0 42 25"><path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/></svg>
        </div>
        <div className="faq__answer">
          <p>Aware, empathetic communities can prevent violence by spreading awareness, reporting abuse, and supporting victims. Safety is a collective responsibility.</p>
        </div>
      </div>

    </div>
    <br /><br /><br /><br /><br /><br /><br /><br />
  </section>
</Fragment>

  );
}
