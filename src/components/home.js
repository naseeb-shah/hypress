import { useState } from "react";
import  './home.css'

const navItems=["Business Checking", "Solution","Resources","Result","Contact","Login"]
export const Home = () => {
  return <>
  <Navbar />
  <div className="containerOne">
  <BigText/>
  <div className="textonpic">

  <img className="imgOne" src="/girl.png"  />
  <p className="textone">BUSINESS</p>
  <p className="texttwo">IN ONE</p>
  
  </div>
  <img className="imgTwo" src="/card.png"  />
  </div>
  </>;
};


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav logo">
          nova logo
        </a>
        {/* menu *

        {/* <ul className={`nav_menu ${isMenuOpen?"open":''}`}> */}
           {navItems.map((e,index)=><p key={e+index} className="nav_item">
                {e}

            </p>) }
            <GetStartedButton />
        {/* </ul> */}
      </nav>
    </header>
  );
};
const BigText=()=>{
    const text=["ALL YOUR ","BANKING ","PLATFORM"]
    const smallText=  ["Take your business to new height with",
    "faster cash flow and clear financial",
    "inshigihts all with a free Nova account",
    "Apply in 10 minutes."]
    return <div className="bigB" >
        <div className="bigC">
    {
        text.map((e,i)=><p className="bigText" key={e+i}>
            {e}
        </p>)
    }
    </div>
    {
        smallText.map((e,i)=><p className="small" key={e+i}>
            {e}
        </p>)
    }
    <GetStartedButton />
    <p className="al">Already Started  ?<span className="fi">Finish Your Applicaton</span></p>
    </div>
}

const GetStartedButton=()=>{
    return <button className="buttonStarted">
        <div className="ball">

        </div>
        Get Started

    </button>
}