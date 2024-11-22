import "./About.css";
import { IoRocketSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { IoDiamondSharp } from "react-icons/io5";
import { useState } from "react";
import logo from "../Assets/logo.png";
function About() {
  const [display] = useState([
    "نحن شركه تسويق شامله تهدف إلي مساعده الشركات لتحقيق النجاح من خلال حملات تسوقيه مبتكره و إستراتجيات مدروسه ... نحن نقدم مجموعه واسعه من الخدمات التسويقيه، بدءً من الاعلان التقليدي و وصولاً إلي الحلول البرمجيه الحديثه، حيث نحرص علي تلبيه احتياجات  و أهداف عملائنا بطرق فعاله و متخصصه",
    "تتمثل رسالتنا في تمكين الشركات من جميع الاحجام علي تحقيق نمو مستدام و قابل للتطوير عبر إستراتجيات تسويقية دقيقة و مؤثرة مما يساهم في بناء علامه تجارية قوية وقادره علي التكييف مع التغيرات السريعه في السوق",
    "أن نصبح الخيار الأول و الرائد في مجال التسويق، ملهمين للشركات والأفراد لتحقيق متطلباتهم من من خلال حملات تسويقية فريدة تٌحدث تأثيراً حقيقياً و تعزز الروابط القويه بين العلامات التجارية و جماهيرها. نسعي لأن نكون وكالة تقود التغيير من خلال الإبداع و الكفاءة",
  <ul><li>الإبداع</li><li>النزاهه</li><li>التميز</li><li>التعاون</li><li>التطور المستمر</li></ul>]);
  const [header] = useState(["معلومات عنا", "الرساله", "الرؤيه", "القيم"]);
  const [counter, setCounter] = useState(0);
  const handleClick = (id) => {
    setCounter(parseInt(id));
    console.log(typeof counter);
  };
  return (
    <div className="About" id="About">
      <div className="Main-Menu">
        <img src={logo} className="Main-Menu-Logo" alt="logo"/>
        <button
          className={`About-Section ${counter===0?'active':''}`}
          id="0" 
          onClick={(e) => {
            handleClick(e.currentTarget.id);
          }}
        >
          i
        </button>
        <button
          className={`Mission-Section ${counter===1?'active':''}`}
          id="1"
          onClick={(e) => {
            handleClick(e.currentTarget.id);
          }}
        >
          <IoRocketSharp />
        </button> 
        <button
          className={`Vision-Section ${counter===2?'active':''}`}
          id="2"
          onClick={(e) => {
            handleClick(e.currentTarget.id);
          }} 
        >
          <FaEye />
        </button>
        <button
          className={`Values-Section ${counter===3?'active':''}`}
          id="3"
          onClick={(e) => {
            handleClick(e.currentTarget.id);
          }}
        >
          <IoDiamondSharp />
        </button>
      </div>
      <div>
        <h1 className="About-Header">{header[counter]}</h1>
        <div className="About-Intro">{display[counter]}</div>
      </div>
    </div>
  );
}

export default About;
