import Header from "../layout/Header"
import "../styles/principal.css"

const Principal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        {/* Background Image */}
        <div className="hero-background">
          <img src="https://a.cdn-hotels.com/gdcs/production97/d402/6baff29c-e43b-4caf-a9e8-5dcf1279dea0.jpg" alt="Playa de Cancún" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Cancún no empieza en el aeropuerto, ni en la playa</h1>
            <p className="hero-subtitle">Comienza con la sonrisa de quien te da la bienvenida</p>
            <button className="cta-button">Únete al Movimiento</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="section-container">
          <h2 className="section-title">¿Qué es Juntos somos Cancún?</h2>

          <p className="section-description">
            Juntos somos Cancún es un movimiento colectivo para transformar la experiencia turística y mejorar la
            calidad de vida de todos los habitantes. Buscamos unir esfuerzos entre ciudadanos, empresas y gobierno para
            crear un destino más sustentable, inclusivo y próspero para nuestra comunidad y visitantes del mundo.
          </p>

          {/* Stats */}
          <div className="stats-grid">
            <div className="stat-card">
              <h3 className="stat-number">50,000</h3>
              <p className="stat-title">PERSONAS</p>
              <p className="stat-description">Beneficiadas en nuestra comunidad</p>
            </div>

            <div className="stat-card">
              <h3 className="stat-number">150,000</h3>
              <p className="stat-title">EMPRESAS</p>
              <p className="stat-description">Comprometidas con la visión</p>
            </div>

            <div className="stat-card">
              <h3 className="stat-number teal">1</h3>
              <p className="stat-title">SOLO PROPÓSITO</p>
              <p className="stat-description">Transformar nuestra comunidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formación Section */}
      <section className="formacion-section">
        <div className="section-container">
          <div className="formacion-header">
            <h2 className="formacion-title">Formación</h2>
            <p className="formacion-subtitle">Programas Transformadores</p>
          </div>

          <div className="programas-grid">
            {/* Programa 1 */}
            <div className="programa-card">
              <div className="programa-header" style={{ backgroundColor: "#FACC15" }}>
                <div className="programa-number">1.</div>
                <h3 className="programa-title">Experience Masters</h3>
              </div>
              <div className="programa-content">
                <p className="programa-label">Para:</p>
                <p className="programa-text">
                  Profesionales del sector turístico, recepcionistas, concierges y representantes digitales.
                </p>

                <div className="programa-objetivo">
                  <p className="programa-label">Objetivo:</p>
                  <p className="programa-text">
                    Elevar el nivel de servicio al cliente y crear experiencias memorables.
                  </p>
                </div>

                <a href="#" className="programa-button">
                  Inscríbete aquí
                </a>
              </div>
            </div>

            {/* Programa 2 */}
            <div className="programa-card">
              <div className="programa-header" style={{ backgroundColor: "#A3E635" }}>
                <div className="programa-number">2.</div>
                <h3 className="programa-title">Cancún Taxi</h3>
              </div>
              <div className="programa-content">
                <p className="programa-label">Para:</p>
                <p className="programa-text">Taxistas, transportistas, operadores turísticos.</p>

                <div className="programa-objetivo">
                  <p className="programa-label">Objetivo:</p>
                  <p className="programa-text">Transformar el primer contacto del turista con la ciudad.</p>
                </div>

                <a href="#" className="programa-button">
                  Inscríbete aquí
                </a>
              </div>
            </div>

            {/* Programa 3 */}
            <div className="programa-card">
              <div className="programa-header" style={{ backgroundColor: "#2DD4BF" }}>
                <div className="programa-number">3.</div>
                <h3 className="programa-title">Hospitality Visionaries</h3>
              </div>
              <div className="programa-content">
                <p className="programa-label">Para:</p>
                <p className="programa-text">Empresarios, directivos y líderes del sector.</p>

                <div className="programa-objetivo">
                  <p className="programa-label">Objetivo:</p>
                  <p className="programa-text">Construir una visión innovadora y eficiente sostenible.</p>
                </div>

                <a href="#" className="programa-button teal">
                  Súmate como líder
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premios Section */}
      <section className="premios-section">
        <div className="premios-background"></div>
        <div className="premios-content">
          <div className="premios-logo">
          </div>

          <h2 className="premios-title">Premios Cancún Legends</h2>
          <p className="premios-subtitle">
            Porque quien transforma el servicio, <span className="premios-highlight">merece ser leyenda.</span>
          </p>

          <p className="premios-description">
            Un programa de reconocimiento a quienes hacen la diferencia en la experiencia turística de Cancún, elevando
            los estándares de servicio y hospitalidad.
          </p>

          <div className="awards-grid">
            <div className="award-item">
              <div className="award-icon">★</div>
              <h4 className="award-title">VISITOR CHOICE AWARD</h4>
              <p className="award-description">Para empresas transformadoras</p>
            </div>

            <div className="award-item">
              <div className="award-icon green">★</div>
              <h4 className="award-title">EXPERIENCE MASTER AWARD</h4>
              <p className="award-description">Para los mejores anfitriones</p>
            </div>

            <div className="award-item">
              <div className="award-icon green">★</div>
              <h4 className="award-title">GUEST CONNECT AWARD</h4>
              <p className="award-description">Para innovadores del servicio</p>
            </div>

            <div className="award-item">
              <div className="award-icon green">★</div>
              <h4 className="award-title">FAVORITE AWARD</h4>
              <p className="award-description">Votado por los propios turistas</p>
            </div>

            <div className="award-item">
              <div className="award-icon green">★</div>
              <h4 className="award-title">SUSTAINABLE HOSPITALITY AWARD</h4>
              <p className="award-description">Turismo con impacto positivo</p>
            </div>
          </div>

          <div className="premios-footer">
            <p>Gala de premiación: Octubre 2025 | Hotel Sede Cancún</p>
          </div>
        </div>
      </section>

      {/* Campaña Section */}
      <section className="campana-section">
        <div className="campana-background">
          <img
            src="https://th.bing.com/th/id/R.d39859e93d4fef1977680817e064a13f?rik=tKaptygYcElt0A&pid=ImgRaw&r=0"
            alt="Playa de Cancún al atardecer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="campana-overlay"></div>

        <div className="campana-content">
          <h2 className="campana-title">
            <span className="campana-title-yellow">El viaje </span>
            <span className="campana-title-green">comienza </span>
            <span className="campana-title-yellow">en nosotros</span>
          </h2>

          <p className="campana-subtitle">Una campaña viva que muestra el orgullo de pertenecer a Cancún.</p>

          <ul className="campana-list">
            <li className="campana-list-item">Historias reales de transformación</li>
            <li className="campana-list-item">Activaciones en calle, hoteles, transportes</li>
            <li className="campana-list-item">Acciones en redes sociales y medios locales</li>
            <li className="campana-list-item">Menciones en Booking, TripAdvisor, Google Reviews</li>
          </ul>

          <a href="#" className="campana-button">
            Comparte tu historia o la de alguien que te inspira
          </a>
        </div>
      </section>

      {/* Alianzas Section */}
      <section className="alianzas-section">
        <div className="alianzas-container">
          <div className="alianzas-image">
            <img src="../../public/image/Alianzas_image.png" alt="Empresario de Cancún" className="w-full h-auto rounded-lg" />
          </div>

          <div className="alianzas-content">
            <h2 className="alianzas-title">Alianzas y Empresas</h2>

            <p className="alianzas-description">
              JSC es una plataforma para empresas que creen en el turismo como motor de transformación.
            </p>

            <ul className="alianzas-list">
              <li className="alianzas-list-item">Reconocimiento como Empresa Visionaria</li>
              <li className="alianzas-list-item">Visibilidad en medios y en el sitio oficial</li>
              <li className="alianzas-list-item">Participación en networking y formación ejecutiva</li>
              <li className="alianzas-list-item">Certificación institucional por participación</li>
            </ul>

            <div className="alianzas-buttons">
              <a href="#" className="alianzas-button">
                Registra tu empresa
              </a>
              <a href="#" className="alianzas-button">
                Descarga el paquete de patrocinio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Eventos Section */}
      <section className="eventos-section">
        <div className="eventos-container">
          <div className="eventos-content">
            <h2 className="eventos-title">Eventos Destacados</h2>

            <p className="eventos-description">
              JSC es una plataforma para empresas que creen en el turismo como motor de transformación.
            </p>

            <ul className="eventos-list">
              <li className="eventos-list-item">
                <div>
                  <p className="eventos-list-title">Lanzamiento oficial:</p>
                  <p className="eventos-list-date">Julio 2025 | Centro de Convenciones Cancún</p>
                </div>
              </li>

              <li className="eventos-list-item">
                <div>
                  <p className="eventos-list-title">Inicio de talleres:</p>
                  <p className="eventos-list-date">Agosto 2025</p>
                </div>
              </li>

              <li className="eventos-list-item">
                <div>
                  <p className="eventos-list-title">Premios Cancún Legends:</p>
                  <p className="eventos-list-date">Octubre 2025</p>
                </div>
              </li>

              <li className="eventos-list-item">
                <div>
                  <p className="eventos-list-title">Foro Internacional de Hospitalidad:</p>
                  <p className="eventos-list-date">Noviembre 2025</p>
                </div>
              </li>
            </ul>

            <a href="#" className="eventos-button">
              Reserva tu lugar
            </a>
          </div>

          <img src="../../public/image/Eventos_image.png" alt="Evento de Cancún" className="eventos-image" />
        </div>
      </section>

      {/* Contacto Section */}
      <section className="contacto-section">
        <div className="contacto-container">
          <img src="/placeholder-44b19.png" alt="Representante de atención al cliente" className="contacto-image" />

          <div className="contacto-content">
            <h2 className="contacto-title">Contacto y Comunidad</h2>

            <p className="contacto-subtitle">¿Tienes preguntas o deseas sumarte de forma más activa?</p>

            <div className="contacto-info">
              <span className="contacto-label">WhatsApp directo:</span>
              <span className="contacto-value">+52 998 123 4567</span>
            </div>

            <div className="contacto-info">
              <span className="contacto-label">Email:</span>
              <span className="contacto-value">contacto@juntosporcancun.org</span>
            </div>

            <div className="contacto-info">
              <span className="contacto-label">Redes sociales:</span>
              <span className="contacto-value">@JuntosPorCancun</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Principal
