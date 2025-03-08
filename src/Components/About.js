import React, { useState } from "react";
import "./About.css";
import { IoRocketSharp, IoDiamondSharp, IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { GiStaryu } from "react-icons/gi";
import { PiStepsBold } from "react-icons/pi";
import logo from "../Assets/logo.png";
import { FaPeopleCarryBox } from "react-icons/fa6";

const menuItems = [
  { id: 0, label: "معلومات عنا", icon: "i" },
  { id: 1, label: "الرساله", icon: <IoRocketSharp /> },
  { id: 2, label: "الرؤيه", icon: <FaEye /> },
  { id: 3, label: "القيم", icon: <IoDiamondSharp /> },
];

const aboutContent = [
  "نحن شركه تسويق شامله تهدف إلي مساعده الشركات لتحقيق النجاح من خلال حملات تسوقيه مبتكره و إستراتجيات مدروسه ... نحن نقدم مجموعه واسعه من الخدمات التسويقيه، بدءً من الاعلان التقليدي و وصولاً إلي الحلول البرمجيه الحديثه، حيث نحرص علي تلبيه احتياجات  و أهداف عملائنا بطرق فعاله و متخصصه",
  "تتمثل رسالتنا في تمكين الشركات من جميع الاحجام علي تحقيق نمو مستدام و قابل للتطوير عبر إستراتجيات تسويقية دقيقة و مؤثرة مما يساهم في بناء علامه تجارية قوية وقادره علي التكييف مع التغيرات السريعه في السوق",
  "أن نصبح الخيار الأول و الرائد في مجال التسويق، ملهمين للشركات والأفراد لتحقيق متطلباتهم من من خلال حملات تسويقية فريدة تٌحدث تأثيراً حقيقياً و تعزز الروابط القويه بين العلامات التجارية و جماهيرها. نسعي لأن نكون وكالة تقود التغيير من خلال الإبداع و الكفاءة",
  <div>
    <ul>
      <li><RiLightbulbFlashFill className="list-style" /> الإبداع</li>
      <li><IoShieldCheckmarkSharp className="list-style" /> النزاهه</li>
      <li><GiStaryu className="list-style" /> التميز</li>
      <li><FaPeopleCarryBox className="list-style" /> التعاون</li>
      <li><PiStepsBold className="list-style" /> التطور المستمر</li>
    </ul>
  </div>,
];

function About() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="About" id="About">
      <div className="Main-Menu">
        <img src={logo} className="Main-Menu-Logo" alt="logo" />
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`menu-btn ${selected === item.id ? "active" : ""}`}
            onClick={() => setSelected(item.id)}
          >
            {item.icon}
          </button>
        ))}
      </div>
      <div className="content-section">
        <h1 className="About-Header">{menuItems[selected].label}</h1>
        <div className="About-Intro">{aboutContent[selected]}</div>
      </div>
    </div>
  );
}

export default About;
