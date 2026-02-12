import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);
  return (
    <header className="nav-bar-container">
      <nav className="nav-bar">


        <div className="nav-logo">
          <h1><a href="#home">Sujal</a></h1>
        </div>

    

        <ul className={`nav-links-container ${open ? "open" : ""}`}>
          <li className="nav-link"><a href="#projets">PROJECT</a></li>
          <li className="nav-link"><a href="#aboutme">ABOUT ME</a></li>
          <li className="nav-link"><a href="#gallery">GALLERY</a></li>

          <li className="desktop-connect">
            <a href="#connect">
              <button id="connect-btn">CONNECT</button>
            </a>
          </li>
        </ul>
        

        <div className="mobile-connect">
            <a href="#connect">
                <button id="connect-btn">CONNECT</button>
            </a>
            <button
            className={`mobile-toggle ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            >
            ▼
            </button>
        </div>
        

      </nav>
    </header>
  );
}
