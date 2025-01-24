import { useState,useEffect } from "react";
import "./Portfolio.css";

function Portfolio() {
  const clients = [
    { name: "El MrooJ CO", info: "Trading & Contract" },
    { name: "Aseel CO", info: "Import & Export" },
    { name: "FH Corp", info: "FMGC" },
    { name: "Business Wolves", info: "Educational Academy" },
    { name: "MIL", info: "Law & Immigration Firm" },
    { name: "IconX", info: "Software Development" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [clients.length]);
  return (
    <div className="Portfolio" id="Portfolio">
      <h1 className="quote">We Love These Guys</h1>
      <div className="row">
      {clients.map((client, index) => (
        <div
          key={index}
          className={`card ${activeIndex === index ? "active" : ""}`}
        > 
          <div className="client-name">{client.name}</div>
          <div className="client-info">{client.info}</div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Portfolio;
