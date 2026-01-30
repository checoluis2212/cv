import { getCvContent, type CvLang } from "@/lib/cv-content"

interface ElectricBorderCardProps {
  lang: CvLang
}

export default function ElectricBorderCard({ lang }: ElectricBorderCardProps) {
  const c = getCvContent(lang)
  const { sections } = c

  return (
    <>
      <svg className="svg-container">
        <defs>
          <filter id="turbulent-displace" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="2" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
              <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="2" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
              <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
            <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
            <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />

            <feDisplacementMap
              in="SourceGraphic"
              in2="combinedNoise"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>
      </svg>

      <div className="card-container">
        <div className="inner-container">
          <div className="border-outer">
            <div className="main-card"></div>
          </div>
          <div className="glow-layer-1"></div>
          <div className="glow-layer-2"></div>
        </div>

        <div className="overlay-1"></div>
        <div className="overlay-2"></div>
        <div className="background-glow"></div>

        <div className="content-container">
          <div className="content-top">
            <div className="cv-header-row">
              <div className="cv-photo-wrap">
                <img src="/yo.jpg" alt="Luis Sergio Burgos Torres" className="cv-photo" />
              </div>
              <span className="cv-badge-top">CV 2029</span>
            </div>
            <h1 className="title">Luis Sergio Burgos Torres</h1>
            <p className="cv-subtitle">{c.subtitle}</p>
            <p className="cv-contact">
              {(() => {
                const parts = c.contact.split(" · ")
                return (
                  <>
                    {parts[0]} · {parts[1]} ·{" "}
                    <a href="mailto:luissergio.mkt@gmail.com" className="cv-link">
                      {parts[2]}
                    </a>{" "}
                    · {parts[3]}
                  </>
                )
              })()}
            </p>
          </div>

          <hr className="divider" />

          <div className="content-bottom cv-scroll">
            <section className="cv-section">
              <h2 className="cv-section-title">{sections.executiveSummary.title}</h2>
              {sections.executiveSummary.paragraphs.map((p, i) => (
                <p key={i} className="cv-text">
                  {p}
                </p>
              ))}
            </section>

            <section className="cv-section">
              <h2 className="cv-section-title">{sections.experience.title}</h2>
              {sections.experience.jobs.map((job, i) => (
                <div key={i} className="cv-job">
                  <h3 className="cv-company">{job.company}</h3>
                  <p className="cv-role">{job.role}</p>
                  {job.description && <p className="cv-text">{job.description}</p>}
                  {job.bullets && (
                    <ul className="cv-bullets">
                      {job.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {job.impact && <p className="cv-impact">{job.impact}</p>}
                </div>
              ))}
            </section>

            <section className="cv-section">
              <h2 className="cv-section-title">{sections.competencies.title}</h2>
              <ul className="cv-bullets cv-compact">
                {sections.competencies.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="cv-section">
              <h2 className="cv-section-title">{sections.tools.title}</h2>
              {sections.tools.lines.map((line, i) => (
                <p key={i} className="cv-text">
                  <strong>{line.label}</strong> {line.text}
                </p>
              ))}
            </section>

            <section className="cv-section">
              <h2 className="cv-section-title">{sections.education.title}</h2>
              <p className="cv-text">
                <strong>{sections.education.degree}</strong>
                <br />
                {sections.education.school}
              </p>
            </section>

            <section className="cv-section">
              <h2 className="cv-section-title">{sections.languages.title}</h2>
              <p className="cv-text">{sections.languages.text}</p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
