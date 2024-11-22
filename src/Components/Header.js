import './Header.css';
import Logo from '../Assets/logo.png'
import { useEffect,useState } from 'react';
function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    width: "100%",
    backgroundColor: isFixed ? "white" : "transparent",
    position: isFixed ? "fixed" : "relative",
    top: 0,
    zIndex: 10,
    boxShadow: isFixed ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
    transition: "background-color 0.3s ease, position 0.3s ease",
    left: "50%",
    transform: "translateX(-50%)"
  };

  return (
    <div className='header' style={headerStyle}>
        <a href="#Home">
            <img src={Logo} className="logo" alt="logo"/>
        </a>
        <nav className='nav'>
            <a href="#About" className='nav-link'>About</a>
            <a href="#Services" className='nav-link'>Services</a>
            <a href="#Portfolio" className='nav-link'>Portfolio</a>
        </nav>
    </div>
  );
}

export default Header;
