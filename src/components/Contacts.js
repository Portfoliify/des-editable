import React, { useEffect, useState } from "react";
import "../css/contact.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

export default function Contacts({ setemail, email, number, setnumber , host }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const navigate = useNavigate();
  function onchangen(e) {
    setnumber(e.target.value)
      }  function onchangee(e) {
        setemail(e.target.value)
          }
  useEffect(() => {
    gsap.from(".line1", { width: 0, duration: 2 });
    gsap.from(".linemiddle", { height: 0, duration: 2 });
    gsap.from(".line2", { width: 0, duration: 2 });
    gsap.from([".titleContact", ".number", ".email", ".ph", ".em"], {
      y: 50,
      opacity: 0,
      duration: 1,
    });
  }, []);

  function circleColorChange(projectj) {
    if (showOverlay) {
      gsap.to(".disappearabout", { opacity: 0, duration: 0.3 });
      gsap.to( ".socialmedia", { opacity: 0, duration: 0 });

      var menuu = document.getElementById("overla1");

      menuu.classList.toggle("closing-animation");

      let menu = document.getElementById("men");

      menu.classList.remove(showOverlay ? "menu1" : "menu");
      menu.classList.add(showOverlay ? "menu" : "menu1");
      return setTimeout(function () {
        setShowOverlay(false);
        if (projectj === "home") {
          navigate("/");
        }
        if (projectj === "contact") {
          navigate("/contact");
        }
        if (projectj === "projects") {
          navigate("/projects");
        }
      }, 500);
    }
    gsap.to(".disappearabout", { opacity: 0, duration: 0.3, delay: 1 });
    gsap.to( ".socialmedia", { opacity: 0, duration: 0.01,delay:1 });

    setShowOverlay(!showOverlay);
    let menu = document.getElementById("men");

    menu.classList.remove(showOverlay ? "menu1" : "menu");
    menu.classList.add(showOverlay ? "menu" : "menu1");
  }
  return (
    <>
      {showOverlay && (
        <>
          {" "}
          <div className="overlay1" id="overla1">
            <div className="onepartabout">
              <div className="refsabout">
                <div
                  className="disappearabout refs"
                  onClick={() => {
                    circleColorChange("home");
                  }}
                >
                  Home
                </div>
                <div
                  className="disappearabout refs"
                  onClick={() => {
                    circleColorChange("projects");
                  }}
                >
                  Projects
                </div>

                <div className="disappearabout refs">Contact</div>
              </div>
              <div className="socialmedia" onClick={host}>
Host it
              </div>
            </div>
            <div className="secondpartabout">
              <div className="disappearabout">{number}</div>
            </div>
          </div>
        </>
      )}
      <div>
        <div className="ContactHero">
          <div className="titcont">
            <h1 className="titleContact">Contacts</h1>
          </div>
          <div className="layerline">
            <div className="linebox1">
              <div className="line1"></div>

              <div className="insidedivlb1">
                <div className="ph">phone</div>
                <textarea className="number" onChange={onchangen}>{number}</textarea>
                <div className="linemiddle"></div>
              </div>
            </div>
            <div className="linebox2">
              <div className="line2"></div>
              <div className="insidedivlb2">
                <div className="em">email</div>
                <textarea className="email" onChange={onchangee}>{email}</textarea>
              </div>
            </div>
          </div>
        </div>
        <div
          className="menu"
          id="men"
          onClick={() => {
            setShowOverlay(!showOverlay);
          }}
        >
          Menu
        </div>
      </div>
    </>
  );
}
