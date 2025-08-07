import React from "react";
import "./Library.css";
import Navbar from "../../components/navbar";

export default function Library() {
  return (
    <>
      <Navbar></Navbar>
      <section className="Library__container">
        <div>
          <h2 className="Library__title">Library About Women's Safety</h2>
          <br />
          <br />

          <div className="Article_Container">
            <div className="Library__Image">
              <img className="lib-img" src="./clicker2img1.jpg" />
            </div>
            <div className="Text__Container">
              <p>
                <h2>Online Safety</h2>
                <br />
                Cyberbullying occurs when someone uses digital devices—like
                phones, computers, or gaming platforms—to send or share harmful,
                false, or humiliating content, often persistent and lasting,
                impacting reputations and frequently going unnoticed by others.
                <br />
                <a href="https://www.stopbullying.gov/cyberbullying/what-is-it">
                  <button className="Lib_Button">Learn More</button>
                </a>
              </p>
            </div>
          </div>

          <div className="Article_Container">
            <div className="Text__Container">
              <p>
                <h2>Understanding Consent</h2>
                <br />
                Consent is a freely and clearly communicated agreement to engage
                in sexual activity; it must be ongoing, reversible,
                enthusiastic, and never coerced or assumed—each act requiring
                fresh permission and respect for boundaries.
                <br />
                <a href="https://www.rainn.org/articles/what-is-consent ">
                  <button className="Lib_Button">Learn More</button>
                </a>
              </p>
            </div>
            <div className="Library__Image">
              <img className="lib-img" src="./clicker1img2.jpg" />
            </div>
          </div>

          <div className="Article_Container">
            <div className="Library__Image">
              <img className="lib-img" src="./clicker1img3.jpg" />
            </div>
            <div className="Text__Container">
              <p>
                <h2>Personal Safety Tips</h2>
                <br />
                Staying alert, using well‑lit and busy routes, safeguarding
                personal belongings, and always knowing your
                surroundings—especially when walking, driving, or returning
                home—are fundamental strategies for women's safety.
                <br />
                <a href="https://police.slc.gov/ass3ts/uploads/2012/04/SLCPDSafetytipsforWomen.pdf ">
                  <button className="Lib_Button">Learn More</button>
                </a>
              </p>
            </div>
          </div>

          <div className="Article_Container">
            <div className="Text__Container">
              <p>
                <h2>Travel Safety Tips</h2>
                <br />
                Recent advice stresses that solo female travelers should share
                their itinerary, use location‑sharing apps, stay in socially
                vibrant accommodations, and trust their instincts—prioritizing
                real-time updates and personal safety above all.
                <br />
                <a href="https://www.google.com/search?q=https://www.forbes.com/advisor/travel-insurance/solo-female-travel-safety-tips/">
                  <button className="Lib_Button">Learn More</button>
                </a>
              </p>
            </div>
            <div className="Library__Image">
              <img className="lib-img" src="./clicker2img3.jpg" />
            </div>
          </div>

          <div className="Article_Container">
            <div className="Library__Image">
              <img className="lib-img" src="./clicker2img2.jpg" />
            </div>
            <div className="Text__Container">
              <p>
                <h2>Self defence</h2>
                <br />
                Awareness of one’s environment, trusting intuition, and
                preparedness—ranging from self-defense training to online
                privacy measures—empower women to avoid threats and respond
                effectively in risky situations.
                <br />
                <a href="https://rrs.org.in/women-safety/">
                  <button className="Lib_Button">Learn More</button>
                </a>
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    </>
  );
}
