"use client"

import { useState } from "react"
import ElectricBorderCard from "@/components/electric-border-card"
import type { CvLang } from "@/lib/cv-content"

export default function Home() {
  const [lang, setLang] = useState<CvLang>("es")

  const handlePrintPdf = () => {
    window.print()
  }

  return (
    <main className="main-container">
      <div className="cv-wrapper">
        <ElectricBorderCard lang={lang} />
        <div className="cv-actions">
          <nav className="language-bar" aria-label="Idioma / Language">
            <button
              type="button"
              className={`language-bar__item ${lang === "es" ? "language-bar__item--active" : ""}`}
              onClick={() => setLang("es")}
            >
              Español
            </button>
            <span className="language-bar__separator" aria-hidden />
            <button
              type="button"
              className={`language-bar__item ${lang === "en" ? "language-bar__item--active" : ""}`}
              onClick={() => setLang("en")}
            >
              English
            </button>
          </nav>
          <span className="cv-actions__separator" aria-hidden />
          <button
            type="button"
            className="cv-pdf-btn"
            onClick={handlePrintPdf}
            aria-label={lang === "es" ? "Descargar CV en PDF" : "Download CV as PDF"}
          >
            <svg className="cv-pdf-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M12 18v-6" />
              <path d="M9 15h6" />
            </svg>
            {lang === "es" ? "Descargar PDF" : "Download PDF"}
          </button>
        </div>
      </div>
    </main>
  )
}
