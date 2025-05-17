"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import "../styles/header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo-container">
          <img src="/image/vite.svg" alt="Logo" className="logo-image" />
          <span className="logo-text"></span>
        </div>

        {/* Mobile menu button */}
        <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="desktop-nav">
          <a href="#hero" className="nav-link">
            Únete
          </a>
          <div className="nav-dropdown">
            <button
              className="nav-link dropdown-trigger"
              onClick={() => toggleDropdown("formacion")}
              aria-expanded={activeDropdown === "formacion"}
            >
              Formación <ChevronDown className="dropdown-icon" size={16} />
            </button>
            {activeDropdown === "formacion" && (
              <div className="dropdown-menu">
                <a href="#experience-masters" className="dropdown-item">
                  Experience Masters
                </a>
                <a href="#cancun-taxi" className="dropdown-item">
                  Cancún Taxi
                </a>
                <a href="#hospitality" className="dropdown-item">
                  Hospitality Visionaries
                </a>
              </div>
            )}
          </div>
          <a href="#premios" className="nav-link">
            Premios
          </a>
          <a href="#campana" className="nav-link">
            Campaña
          </a>
          <a href="#alianzas" className="nav-link">
            Alianzas
          </a>
          <a href="#eventos" className="nav-link">
            Eventos
          </a>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              <a href="#hero" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Únete
              </a>
              <div className="mobile-dropdown">
                <button className="nav-link mobile-dropdown-trigger" onClick={() => toggleDropdown("mobile-formacion")}>
                  Formación{" "}
                  <ChevronDown
                    className={`dropdown-icon ${activeDropdown === "mobile-formacion" ? "rotate" : ""}`}
                    size={16}
                  />
                </button>
                {activeDropdown === "mobile-formacion" && (
                  <div className="mobile-dropdown-menu">
                    <a href="#experience-masters" className="mobile-dropdown-item" onClick={() => setIsMenuOpen(false)}>
                      Experience Masters
                    </a>
                    <a href="#cancun-taxi" className="mobile-dropdown-item" onClick={() => setIsMenuOpen(false)}>
                      Cancún Taxi
                    </a>
                    <a href="#hospitality" className="mobile-dropdown-item" onClick={() => setIsMenuOpen(false)}>
                      Hospitality Visionaries
                    </a>
                  </div>
                )}
              </div>
              <a href="#premios" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Premios
              </a>
              <a href="#campana" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Campaña
              </a>
              <a href="#alianzas" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Alianzas
              </a>
              <a href="#eventos" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Eventos
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
