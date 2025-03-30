import profileImg from "../assets/images/profile.jpg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Home() {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "HELLO My dear lovely visitor",
        "I am MEENAKSHI A M",
        "I'm a Web Developer",
        "Let's Create Something Amazing!",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy(); // Cleanup when component unmounts
    };
  }, []);

  return (
    <section id="home" className="home">
      <div className="home">
        <div className="home-content">
          <h1>Welcome!!!</h1>
          <p>
            <span ref={typedElement}></span> {/* Typed.js will type here */}.
          </p>
        </div>
        <img src={profileImg} alt="profile" className="profile" />
      </div>
    </section>
  );
}
