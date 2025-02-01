import logo from "../../logo.svg";
import { useEffect, useState } from "react";
import TabsSection from "../TabsSections";
import "./Header.css";

export default function Header({ tab, setTab }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <button className="logo-button" onClick={() => setTab("main")}>
          <img src={logo} alt="Logo" className="logo" />
        </button>
        <TabsSection active={tab} onChange={setTab} />
      </div>
      <span className="header-time">{now.toLocaleTimeString()}</span>
    </header>
  );
}

//   return (
//     <header className="header">
//       <div className="header-left">
//         <img src={logo} alt="Logo" className="logo" />
//         <TabsSection active={tab} onChange={setTab} />
//       </div>
//       <span className="header-time">{now.toLocaleTimeString()}</span>
//     </header>
//   );
// }
