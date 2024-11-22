import './Services.css';
import { VscMilestone } from "react-icons/vsc";
import { TbBulbFilled } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiTrademarkFill } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaBullhorn } from "react-icons/fa6";


function Servics() {
  return (
    <div className="Services" id="Services">
      <h1 className='Header'>نقدم مجموعه متكامله من الخدمات</h1>
      <div className='Services-Container'>
      <div className='Card'>
          <TbBulbFilled  className='Card-Icon'/>
          <h2 className='Card-Header'>تطوير استراتجية التسويق</h2>
        </div>
        <div className='Card'>
          <VscMilestone className='Card-Icon'/>
          <h2 className='Card-Header'>تطوير الاعمال</h2>
        </div>
        <div className='Card'>
          <FaBullhorn  className='Card-Icon'/>
          <h2 className='Card-Header'>التسويق عبر وسائل التواصل الاجتماعي</h2>
        </div>
        <div className='Card'>
        <FaPeopleGroup  className='Card-Icon'/>
          <h2 className='Card-Header'>استشارات الاعمال</h2>
        </div>
        <div className='Card'>
          <PiTrademarkFill className='Card-Icon'/>
          <h2 className='Card-Header'>العلامات التجاريه</h2>
        </div>
        <div className='Card'>
          <HiMiniWrenchScrewdriver className='Card-Icon'/>
          <h2 className='Card-Header'>الدعم الفني</h2>
        </div>
        <div className='Card'>
          <FaHandshake className='Card-Icon'/>
          <h2 className='Card-Header'>علاقات عامه</h2>
        </div>
      </div>
    </div>
  ); 
}

export default Servics;
