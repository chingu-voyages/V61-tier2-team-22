import './Footer.css';
import { useState } from 'react';

export default function Footer() {
  const [showDropdown, setShowDropdown] = useState(false);

  const githubLinks = [
    { label: 'Nahul', url: 'https://github.com/nahul100' },
    { label: 'Anjelica', url: 'https://github.com/Anjie-MF' },
    { label: 'Zee', url: 'https://github.com/ZahraSoley' },
    { label: 'Hany', url: 'https://github.com/hany2working-dev' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">&copy; 2024 Wordle Game. Made with React.</p>
          <div className="footer-links">
            <div 
              className="github-dropdown"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="footer-link github-btn">
                GitHub
              </button>
              {showDropdown && (
                <div className="dropdown-menu">
                  {githubLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropdown-item"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <span className="link-separator">•</span>
            <a 
              href="https://github.com/chingu-voyages/V61-tier2-team-22/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Report Issue
            </a>
            <span className="link-separator">•</span>
            <a 
              href="https://github.com/chingu-voyages/V61-tier2-team-22" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
