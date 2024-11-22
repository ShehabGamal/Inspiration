import "./Home.css";
import { TypeAnimation } from "react-type-animation";
function Home() {
  return (
    <div className="Home">
      <div className="RGBLogo"></div>
      <TypeAnimation
        sequence={[
          "مرحباً بكم في صفحتنا الرسميه",
          1000,
          "ًWelcome To Our Official Web Page",
          1000,
        ]}
        wrapper="div"
        speed={10}
        className="Introduction"
        repeat={Infinity}
        cursor={false}
      />
    </div>
  );
}

export default Home;
