(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`
  <div class="about-page">
    <h1>Acerca de Nosotros</h1>
    <p>Set de aplicaciones para Android y Navegadores</p>
    <p>Este set de aplicaciones para Android permite gestionar de
forma local e ilimitada una base de datos completa con productos, fotos, videos, dietas,
rutinas de gimnasio y diferentes tareas, almacenando toda la información de manera segura en el
dispositivo sin depender de servidores ni conexiones a la nube.</p>
    <p>El ecosistema ofrece, desde la aplicación general, acceso total y gratuito a 
    todas sus funciones para cualquier navegador, de forma ilimitada
    y sin costos ocultos.</p>
    <p>Para garantizar la seguridad
de la información, el sistema incluye funciones avanzadas para exportar respaldos
completos de la base de datos y recuperarlos fácilmente en otros dispositivos,
manteniendo una sincronización manual perfecta tanto en la versión móvil como en el
navegador.</p>
  </div>
`;function t(t){t.innerHTML=e}var n=`
  <div class="aplicaciones-page">
    <h1>Aplicaciones</h1>
    <p>Elegí una aplicación para comenzar.</p>
    <div class="aplicaciones-grid">
      ${[{vista:`product`,icono:`📦`,titulo:`Productos`,detalle:`Consultá la tabla de productos y sus precios.`},{vista:`archivo`,icono:`🗂️`,titulo:`Archivo`,detalle:`Accedé a los documentos y archivos guardados.`},{vista:`fotos`,icono:`🖼️`,titulo:`Fotos`,detalle:`Recorré las fotos disponibles.`},{vista:`diet`,icono:`🥗`,titulo:`Dietas`,detalle:`Revisá los planes de alimentación.`},{vista:`gym`,icono:`🏋️`,titulo:`Gimnasio`,detalle:`Seguí tus rutinas y entrenamientos.`}].map(e=>`
          <a class="aplicacion-card" href="#" data-vista="${e.vista}">
            <span class="aplicacion-card__icono" aria-hidden="true">${e.icono}</span>
            <span class="aplicacion-card__titulo">${e.titulo}</span>
            <span class="aplicacion-card__detalle">${e.detalle}</span>
          </a>
        `).join(``)}
    </div>
  </div>
`;function r(e){e.innerHTML=n}function i(e){e.innerHTML=`<iframe class="vista-iframe" src="/static/archivo/index.html" title="Archivo" loading="lazy"></iframe>`}var a=`
  <div class="ayuda-page">
    <h1>Ayuda</h1>
    <p>Guía rápida para uso de las App de PrecioDeAmigo</p>

    <h2>¿Qué es esta aplicación?</h2>
    <ul class="ayuda-lista">
      <li><strong>Pensada para tu negocio:</strong> Es una herramienta diseñada para emprendedores, vendedores y fabricantes. No funciona como un carrito de compras, sino como un creador de listados y catálogos de productos para facilitar tu trabajo diario.</li>
      <li><strong>Listados listos para compartir:</strong> Te permite armar listas de precios, fotos y datos para enviarlas a tus clientes en formato PDF o ZIP.</li>
      <li><strong>Apps independientes:</strong> Todas nuestras aplicaciones actuales y futuras funcionan de manera independiente entre sí.</li>
    </ul>

    <h2>Recomendaciones de uso</h2>
    <ul class="ayuda-lista">
      <li><strong>Uso gratuito y respaldos:</strong> La aplicación es 100 % gratuita y está en fase de prueba. Te recomendamos crear tu listado, enviarlo a tus clientes y guardar una copia de seguridad (backup) para llevar tus datos o abrirlos en otro dispositivo.</li>
      <li><strong>Acceso rápido:</strong> Para ahorrar tiempo, creá un acceso directo desde tu navegador hacia la pantalla de inicio de tu celular o el escritorio de tu computadora.</li>
    </ul>

    <h2>Novedades y contacto</h2>
    <ul class="ayuda-lista">
      <li><strong>Sugerencias y mejoras:</strong> Si tenés ideas para mejorar la app o necesitás una herramienta nueva, envianos tu propuesta. Si es de uso masivo, podremos desarrollarla gratis para otros usuarios de tu mismo rubro.</li>
      <li><strong>Estado de la tienda:</strong> Nuestra tienda online se encuentra en transición. Por el momento, todas las ventas se realizan exclusivamente a través de Mercado Libre.</li>
    </ul>

    <p>¿Tenés alguna duda? Escribinos por correo electrónico o WhatsApp.
   
  </div>
`;function o(e){e.innerHTML=a}var s=`
  <div class="contacto-contenedor">
    <h1 class="titulo-contacto">Contáctanos</h1>
    <p>Si tienes alguna pregunta, sugerencia o necesitas un presupuesto, no dudes en contactarnos.</p>
    <p>Puedes enviarnos un mensaje al: &nbsp;&nbsp;
      <a
        class="whatsapp-button"
        href="https://wa.me/541134795400?text=Hola!%20Necesito%20informaci%C3%B3n%20acerca%20de%20la%20Aplicaciones"
        target="_blank"
        rel="noopener noreferrer"
      >Whatsapp!</a>
    </p>
    <p>También puedes encontrarnos en nuestras redes sociales:</p>
    <ul>
      <li><a href="#">X-Twitter: @preciodeamigoar</a></li>
      <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram: @preciodeamigo</a></li>
    </ul>

    <h2 class="subtitulo-contacto">Mensaje por E-mail</h2>

    <form class="formulario-email" id="form-contacto">
      <div class="campo">
        <label class="etiqueta" for="nombre">Nombre:</label>
        <input class="input-texto" type="text" id="nombre" name="nombre" required />
      </div>
      <div class="campo">
        <label class="etiqueta" for="email">E-mail:</label>
        <input class="input-texto" type="email" id="email" name="email" required />
      </div>
      <div class="campo">
        <label class="etiqueta" for="whatsapp">Whatsapp:</label>
        <input class="input-texto" type="tel" id="whatsapp" name="whatsapp" />
      </div>
      <div class="campo">
        <label class="etiqueta" for="descripcion">Descripción:</label>
        <textarea class="input-area" id="descripcion" name="descripcion" rows="5" required></textarea>
      </div>
      <div class="campo-boton">
        <button type="submit" class="boton-principal">Enviar</button>
      </div>
    </form>
  </div>
`;function c(e){let t=e.querySelector(`#form-contacto`);t&&t.addEventListener(`submit`,t=>{t.preventDefault();let n=e.querySelector(`#nombre`).value,r=e.querySelector(`#email`).value,i=e.querySelector(`#whatsapp`).value,a=e.querySelector(`#descripcion`).value,o=[`--- Datos de Contacto ---`,``,`Nombre: ${n}`,`E-mail: ${r}`,`Whatsapp: ${i}`,``,`Descripción:`,a].join(`
`),s=`mailto:claujocabrera@gmail.com?subject=Consulta%20desde%20la%20web%20-%20Preciodeamigo.com&body=${encodeURIComponent(o)}`;window.location.href=s})}function l(e){e.innerHTML=s,c(e)}function u(e){e.innerHTML=`<iframe class="vista-iframe" src="/static/diet/index.html" title="Dietas" loading="lazy"></iframe>`}function d(e){e.innerHTML=`<iframe class="vista-iframe" src="/static/fotos/index.html" title="Fotos" loading="lazy"></iframe>`}function f(e){e.innerHTML=`<iframe class="vista-iframe" src="/static/gym/index.html" title="Gimnasio" loading="lazy"></iframe>`}var p=`
  <div class="home-view">
    <section class="container section">
      <div class="hero-grid">
        <div class="hero-content">
          <div class="hero-title-group"> 
          <h1 class="hero-title">PrecioDeAmigo</h1>
            
            <h2 class="hero-subtitle">Herramientas para Emprendedores</h2>
            <br>

                            <a
                      class="tienda-boton"
                      href="https://listado.mercadolibre.com.ar/_CustId_87005029"
                      target="_blank"
                      rel="noopener noreferrer"
                    >Ir a la Tienda</a>
                          
    </div>
        </div>
        <div
          class="hero-image-placeholder"
          style="background-image:url('/images/preciodeamigo.png');"
          role="img"
          aria-label="PrecioDeAmigo"
        ></div>
      </div>
    </section>

    <section class="container section">
      <h2 class="featured-heading">Nuestras apps</h2>
      <div class="product-grid">
        <div class="product-card">
          <div class="product-image" style="background-image: url('/images/pda_productos.svg');"></div>
          <div>
            <p class="product-title">ART.</p>
            <p class="product-subtitle">
Es una aplicación móvil ágil, autónoma y sin límites para gestionar tu catálogo comercial
sin depender de la nube.
Almacenamiento 100% local e ilimitado: Guarda los artículos en tu dispositivo en la cantidad
como la memoria y potencia de tu móvil lo permitan.
Envíos de datos en PDF: Imprime o comparte fichas individuales
(hasta 10 fotos por artículo) o listados completos de productos (precio, descripción
y 1 foto principal por ítem).
Respaldo seguro: Genera copias de seguridad (backups) completas de tu base de datos
y restaura todo el contenido cuando lo necesites.</p>
          </div>
        </div>

        <div class="product-card">
          <div class="product-image" style="background-image: url('/images/pda_fotos.svg');"></div>
          <div>
            <p class="product-title">FOTOS.</p>
            <p class="product-subtitle">
Esta aplicación móvil para Android y navegadores es una solución
integral, autónoma y sin límites para gestionar y almacenar material audiovisual
localmente sin depender de la nube. Al contar con un almacenamiento local, permite
gestionar y almacenar material audiovisual siendo el límite la
memoria y la potencia de tu dispositivo, guardando tus imágenes directamente en
la base de datos local para luego imprimirlas o enviarlas convertidas en documentos
PDF. El sistema permite compartir de forma ordenada enviando paquetes de hasta diez
fotos o creando un archivo con un listado completo de todas tus imágenes, además de
permitir almacenar videos localmente y empaquetarlos comprimidos en formato ZIP.
Asimismo, la herramienta ofrece un respaldo que genera copias de seguridad
completas de toda la base de datos para resguardar o restaurar la totalidad del
contenido en caso de pérdida o para transferirlo y utilizarlo en otro dispositivo.</p>
          </div>
        </div>

        <div class="product-card">
          <div class="product-image" style="background-image: url('/images/pda_dietas.svg');"></div>
          <div>
            <p class="product-title">DIET.</p>
            <p class="product-subtitle">
Esta aplicación móvil para Android y navegadores es una herramienta ágil, autónoma
y sin límites para gestionar planes nutricionales personalizados sin depender de la
nube. Al contar con un almacenamiento cien por cien local e ilimitado, permite guardar
y generar dietas directamente en el dispositivo en la cantidad que la memoria y
la potencia del móvil lo permitan, sin restricciones en el número de días. El sistema
incluye una función para el envío de datos en PDF que facilita la impresión o el hecho
de compartir los planes de alimentación completos con descripciones detalladas
directamente con los usuarios. Asimismo, ofrece un respaldo seguro que genera copias
de seguridad completas de toda la base de datos para restaurar todo el contenido
cuando sea necesario en caso de pérdida o para transferirlo y utilizarlo en otro
dispositivo.</p>
          </div>
        </div>

        <div class="product-card">
          <div class="product-image" style="background-image: url('/images/pda_gimnasio.svg');"></div>
          <div>
            <p class="product-title">GYM.</p>
            <p class="product-subtitle">
Esta aplicación móvil para Android y navegadores es una herramienta ágil, autónoma
y sin límites para gestionar rutinas de gimnasio personalizadas sin depender de la
nube. Al contar con un almacenamiento cien por cien local e ilimitado, permite
guardar y generar planes de entrenamiento directamente en el dispositivo en
la cantidad que la memoria y la potencia del móvil lo permitan, organizando
detalladamente los días, los ejercicios, las repeticiones, el peso y los minutos
de descanso. El sistema incluye una función para el envío de datos en PDF que
facilita la impresión o el hecho de compartir las rutinas completas directamente
con los usuarios. Asimismo, ofrece un respaldo seguro que genera copias de seguridad
completas de toda la base de datos para restaurar todo el contenido cuando sea
necesario en caso de pérdida o para transferirlo y utilizarlo en otro dispositivo.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
`;function m(e){e.innerHTML=p}var h=`
  
    <img src="/images/preciodeamigo.png" alt="IndatServer" width="70" height="70" />
    <a href="#">Copyright © PrecioDeAmigo 2000-2026 Todos los derechos reservados.</a>
  </div>
`;function g(e){e.innerHTML=h}function _(e){e.innerHTML=`<iframe class="vista-iframe" src="/static/pda/index.html" title="Tabla de productos" loading="lazy"></iframe>`}var v=`
  <div class="tienda-page">
    <h1>Tienda</h1>
    <p>Visítanos en nuestra tienda oficial de Mercado Libre.</p>
    <a
      class="tienda-boton"
      href="https://listado.mercadolibre.com.ar/_CustId_87005029"
      target="_blank"
      rel="noopener noreferrer"
    >Ir a la Tienda</a>
  </div>
`;function y(e){e.innerHTML=v}var b=[{vista:`home`,label:`Inicio`},{vista:`about`,label:`Acerca de`},{vista:`tienda`,label:`Tienda`},{vista:`apps`,label:`Aplicaciones`},{vista:`ayuda`,label:`Ayuda`},{vista:`contact`,label:`Contacto`}],x=`
  * {
    box-sizing: border-box;
  }

  :root {
    --color-primary: #135bec;
    --color-text: #f8fafc;
    --color-text-muted: #cbd5e1;
    --color-border: rgba(148, 163, 184, 0.22);
    --color-blue-surface: rgba(13, 42, 92, 0.82);
    --color-blue-surface-soft: rgba(12, 32, 68, 0.74);
    --color-blue-border: rgba(96, 165, 250, 0.28);
    --color-blue-glow: rgba(19, 91, 236, 0.18);
    --navbar-height: 60px;
  }

  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    background-color: #0F172A;
    overflow: hidden;
  }

  /* Capa 0: fondo 2D estático y transparente */
  #fondo-canvas {
    position: fixed;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
  }

  /* Capa 1: interfaz DOM nativa */
  #app {
    position: fixed;
    inset: 0;
    z-index: 1;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  /* --- NAVBAR --- */
  .navbar {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.75rem clamp(1rem, 4vw, 2rem);
    background: #090D16;
    backdrop-filter: blur(14px) saturate(140%);
    -webkit-backdrop-filter: blur(14px) saturate(140%);
    color: #F8FAFC;
    border-bottom: 1px solid var(--color-border);
    box-shadow: 0 12px 30px rgba(2, 6, 23, 0.32);
    z-index: 20;
  }

  .navbar__brand {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    gap: 0.5rem;
    font-size: clamp(1.05rem, 2vw, 1.2rem);
    font-weight: 700;
    letter-spacing: 0.2px;
    color: #F8FAFC;
    text-decoration: none;
    white-space: nowrap;
    transition: color 0.2s ease;
  }

  .navbar__brand:hover,
  .navbar__brand:focus-visible {
    color: #93c5fd;
    outline: none;
  }

  .navbar__menu {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 0.25rem;
    min-width: 0;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .navbar__menu li {
    flex: 0 0 auto;
  }

  .navbar__link {
    position: relative;
    display: block;
    padding: 0.5rem 0.85rem;
    border-radius: 999px;
    color: #F8FAFC;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    white-space: nowrap;
    transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  }

  .navbar__link:hover,
  .navbar__link:focus-visible {
    background: rgba(148, 163, 184, 0.16); */
   
    color: var(--color-text);
    outline: none;
  }

  .navbar__link:focus-visible {
    box-shadow: 0 0 0 2px rgba(147, 197, 253, 0.65);
  }

  .navbar__link.is-active {
    background: linear-gradient(135deg, var(--color-primary), #2563eb);
    color: #F8FAFC;
    box-shadow: 0 6px 16px rgba(19, 91, 236, 0.35);
  }

  .navbar__toggle {
    display: none;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    border: 1px solid var(--color-border);
    border-radius: 0.65rem;
    background: rgba(148, 163, 184, 0.1);
    color: inherit;
    cursor: pointer;
    margin-left: auto;
    transition: background-color 0.2s ease, border-color 0.2s ease;
  }

  .navbar__toggle:hover,
  .navbar__toggle:focus-visible {
    background: rgba(148, 163, 184, 0.2);
    border-color: rgba(148, 163, 184, 0.45);
    outline: none;
  }

  .navbar__toggle:focus-visible {
    box-shadow: 0 0 0 2px rgba(147, 197, 253, 0.65);
  }

  .navbar__toggle-icon {
    position: relative;
    width: 1.25rem;
    height: 2px;
    background: currentColor;
    transition: background-color 0.2s ease;
  }

  .navbar__toggle-icon::before,
  .navbar__toggle-icon::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: currentColor;
    transition: transform 0.2s ease, top 0.2s ease;
  }

  .navbar__toggle-icon::before { top: -6px; }
  .navbar__toggle-icon::after { top: 6px; }

  .navbar__toggle[aria-expanded="true"] .navbar__toggle-icon { background: transparent; }
  .navbar__toggle[aria-expanded="true"] .navbar__toggle-icon::before { top: 0; transform: rotate(45deg); }
  .navbar__toggle[aria-expanded="true"] .navbar__toggle-icon::after { top: 0; transform: rotate(-45deg); }

  /* --- CONTENEDOR DE VISTAS --- */
  #vista {
    min-height: calc(100vh - var(--navbar-height));
  }

  .vista-iframe {
    display: block;
    width: 100%;
    height: calc(100vh - var(--navbar-height));
    border: 0;
    background: #000000;;
  }

  /* --- ABOUT --- */
  .about-page {
    max-width: 960px;
    margin: 1.5rem auto;
    padding: 1.5rem;
    border: 1px solid var(--color-blue-border);
    border-radius: 10px;
    background: #0F172A;
    box-shadow: 0 18px 40px rgba(2, 6, 23, 0.28);
    color: #F8FAFC;
    line-height: 1.6;
  }

  .about-page h1 {
    margin: 0 0 1.5rem;
    font-size: 1.6rem;
    color: #F8FAFC;
  }

  .about-page p {
    margin: 0 0 1rem;
    white-space: pre-line;
  }

  /* --- AYUDA --- */
  .ayuda-page {
    max-width: 960px;
    margin: 1.5rem auto;
    padding: 1.5rem;
    border: 1px solid var(--color-blue-border);
    border-radius: 10px;
    background: #0F172A;
    box-shadow: 0 18px 40px rgba(2, 6, 23, 0.28);
    color: #F8FAFC;
    line-height: 1.6;
  }

  .ayuda-page h1 {
    margin: 0 0 1rem;
    font-size: 1.6rem;
    color: #F8FAFC;
  }

  .ayuda-page h2 {
    margin: 1.5rem 0 0.5rem;
    font-size: 1.15rem;
    color: #F8FAFC;
  }

  .ayuda-page p {
    margin: 0 0 1rem;
  }

  .ayuda-page a {
    color: #93c5fd;
    font-weight: 600;
  }

  .ayuda-lista {
    margin: 0 0 1rem;
    padding-left: 1.35rem;
    color: var(--color-text-muted);
  }

  .ayuda-lista li {
    margin-bottom: 0.35rem;
  }

  .ayuda-ejemplo {
    margin: 0 0 1rem;
    padding: 1rem;
    border: 1px solid var(--color-blue-border);
    border-radius: 8px;
    background: var(--color-blue-surface-soft);
    color: #F8FAFC;
    font-size: 0.9rem;
    overflow-x: auto;
  }

  .ayuda-ejemplo code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    white-space: pre;
  }

  /* --- CONTACTO --- */
  .contacto-contenedor {
    max-width: 900px;
    margin: 1.5rem auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    border: 1px solid var(--color-blue-border);
    border-radius: 10px;
    background: #0F172A;
    box-shadow: 0 18px 40px rgba(2, 6, 23, 0.28);
    color: #F8FAFC;
  }

  .titulo-contacto {
    font-size: 1.8em;
    font-weight: bold;
    margin: 0 0 5px;
    color: #F8FAFC;
  }

  .subtitulo-contacto {
    font-size: 1.2em;
    font-weight: 600;
    margin: 20px 0 10px;
    color: #F8FAFC;
  }

  .formulario-email {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .campo {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
  }

  .etiqueta {
    font-weight: 600;
    margin-bottom: 5px;
  }

  .input-texto,
  .input-area {
    padding: 10px;
    border: 1px solid #475569;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
    background: rgba(15, 23, 42, 0.85);
    color: #f8fafc;
    font: inherit;
  }

  .input-area {
    resize: vertical;
  }

  .boton-principal {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }

  .boton-principal:hover {
    background-color: #0056b3;
  }

  .whatsapp-button {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 5px;
    background: #057e32ff;
    color: #052e16;
    font-weight: 700;
    text-decoration: none;
  }

  .contacto-contenedor a {
    color: #f7f8f8ff;
  }

  @media (min-width: 768px) {
    .contacto-contenedor {
      gap: 20px;
    }
  }

  /* --- TIENDA --- */
  .tienda-page {
    max-width: 900px;
    margin: 1.5rem auto;
    padding: 1.5rem;
    border: 1px solid var(--color-blue-border);
    border-radius: 10px;
    background: #0F172A;
    box-shadow: 0 18px 40px rgba(2, 6, 23, 0.28);
    color: #F8FAFC;
    line-height: 1.6;
  }

  .tienda-page h1 {
    margin: 0 0 1rem;
    font-size: 1.6rem;
    color: #F8FAFC;
  }

  .tienda-boton {
    display: inline-block;
    margin-top: 0.5rem;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #007bff;
    color: #F8FAFC;
    font-weight: 700;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .tienda-boton:hover {
    background-color: #0056b3;
  }

  /* --- APLICACIONES --- */
  .aplicaciones-page {
    max-width: 900px;
    margin: 1.5rem auto;
    padding: 1.5rem;
    border: 1px solid var(--color-blue-border);
    border-radius: 10px;
    background: #0F172A;
    box-shadow: 0 18px 40px rgba(2, 6, 23, 0.28);
    color: #F8FAFC;
    line-height: 1.6;
  }

  .aplicaciones-page h1 {
    margin: 0 0 1rem;
    font-size: 1.6rem;
    color: #F8FAFC;
  }

  .aplicaciones-page p {
    margin: 0 0 1.25rem;
    color: var(--color-text-muted);
  }

  .aplicaciones-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
  }

  .aplicacion-card {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    padding: 1rem;
    border: 1px solid var(--color-blue-border);
    border-radius: 10px;
    background: var(--color-blue-surface-soft);
    color: #F8FAFC;
    text-decoration: none;
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .aplicacion-card:hover,
  .aplicacion-card:focus-visible {
    transform: translateY(-4px);
    border-color: rgba(96, 165, 250, 0.55);
    box-shadow: 0 12px 26px rgba(2, 6, 23, 0.45);
    outline: none;
  }

  .aplicacion-card__icono {
    font-size: 1.75rem;
    line-height: 1;
  }

  .aplicacion-card__titulo {
    font-size: 1.05rem;
    font-weight: 700;
  }

  .aplicacion-card__detalle {
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--color-text-muted);
  }

  /* --- FOOTER --- */
  .pie {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.35rem;
    padding: 1.75rem clamp(1rem, 4vw, 2rem) 2.25rem;
    text-align: center;
    color: var(--color-text-muted);
    background:
      radial-gradient(circle at 50% 0%, rgba(19, 91, 236, 0.14), transparent 55%),
      linear-gradient(180deg, rgba(15, 23, 42, 0.82), rgba(2, 6, 23, 0.96));
    border-top: 1px solid var(--color-border);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .pie br {
    display: none;
  }

  .pie > span {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .pie > span:first-of-type {
    color: var(--color-text);
    font-weight: 600;
    letter-spacing: 0.2px;
  }

  .pie div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.65rem;
    width: min(100%, 32rem);
    margin-top: 0.75rem;
    padding-top: 0.85rem;
    border-top: 1px solid rgba(148, 163, 184, 0.16);
  }

  .pie img {
    display: inline-block;
    width: 56px;
    height: 56px;
    object-fit: contain;
    margin-top: 0;
    padding: 0.3rem;
    border: 1px solid var(--color-border);
    border-radius: 0.65rem;
    background: rgba(255, 255, 255, 0.06);
  }

  .pie a {
    color: var(--color-text-muted);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
  }

  .pie a:hover,
  .pie a:focus-visible {
    color: #93c5fd;
    outline: none;
  }

  @media (min-width: 768px) {
    .pie div {
      width: auto;
      padding-inline: 1.25rem;
    }
  }

  /* --- RESPONSIVE NAVBAR --- */
  @media (max-width: 1080px) {
    .navbar {
      padding: 0.65rem 1rem;
    }

    .navbar__toggle {
      display: inline-flex;
    }

    .navbar__menu {
      position: absolute;
      top: calc(100% + 0.5rem);
      left: 0.75rem;
      right: 0.75rem;
      flex-direction: column;
      align-items: stretch;
      gap: 0.25rem;
      padding: 0.5rem;
      background: rgba(15, 23, 42, 0.98);
      border: 1px solid var(--color-border);
      border-radius: 0.9rem;
      box-shadow: 0 18px 40px rgba(2, 6, 23, 0.45);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      opacity: 0;
      visibility: hidden;
      transform: translateY(-0.5rem);
      pointer-events: none;
      transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
      z-index: 10;
      /* Scroll responsive: nunca excede el espacio visible bajo la navbar */
      max-height: calc(100vh - var(--navbar-height) - 1rem);
      max-height: calc(100dvh - var(--navbar-height) - 1rem);
      overflow-y: auto;
      overscroll-behavior: contain;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: thin;
      scrollbar-color: rgba(148, 163, 184, 0.45) transparent;
    }

    .navbar__menu::-webkit-scrollbar {
      width: 6px;
    }

    .navbar__menu::-webkit-scrollbar-track {
      background: transparent;
    }

    .navbar__menu::-webkit-scrollbar-thumb {
      background: rgba(148, 163, 184, 0.45);
      border-radius: 999px;
    }

    .navbar__menu.is-open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      pointer-events: auto;
    }

    .navbar__link {
      padding: 0.75rem 0.9rem;
      border-radius: 0.65rem;
    }
  }

  /* --- SCROLL HORIZONTAL RESPONSIVE DEL NAVBAR (ESCRITORIO) --- */
  /* Se activa solo cuando los ítems no entran en el ancho disponible;
     en pantallas <= 1080px el menú desplegable ya usa scroll vertical. */
  @media (min-width: 1081px) {
    .navbar__menu.is-scrollable {
      overflow-x: auto;
      overflow-y: hidden;
      padding-block: 1.5rem;
      margin-block: -1.5rem;
      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
      overscroll-behavior-x: contain;
    }

    .navbar__menu.is-scrollable::-webkit-scrollbar {
      display: none;
    }
  }
`,S=`
  /* Tema oscuro de la vista Home */
  .home-view {
    --color-primary: #135bec;
    --color-text-dark: #F8FAFC;
    --color-heading-dark: #F8FAFC;
    --border-color: rgba(96, 165, 250, 0.16);
    background: transparent;
    color: #F8FAFC;
    min-height: calc(100vh - var(--navbar-height));
  }

  .home-view a {
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }

  .home-view .container {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .home-view .section {
    padding: 3rem 1rem;
  }

  @media (min-width: 640px) {
    .home-view .section {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
  }

  .home-view .hero-grid {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 3rem;
  }

  @media (min-width: 1024px) {
    .home-view .hero-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .home-view .hero-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }

  @media (min-width: 1024px) {
    .home-view .hero-content {
      text-align: left;
    }
  }

  .home-view .hero-title-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .home-view .hero-title {
    margin: 0;
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.05em;
    color: var(--color-heading-dark);
  }

  @media (min-width: 640px) {
    .home-view .hero-title { font-size: 3rem; }
  }

  @media (min-width: 768px) {
    .home-view .hero-title { font-size: 3.75rem; }
  }

  .home-view .hero-subtitle {
    margin: 0;
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--color-text-dark);
  }

  @media (min-width: 768px) {
    .home-view .hero-subtitle { font-size: 1.25rem; }
  }

  .home-view .hero-image-placeholder {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 0.75rem;
    background-size: cover;
    background-position: center;
    background-color: #d1d5db;
  }

  .home-view .featured-heading {
    margin: 0;
    text-align: center;
    font-size: 1.875rem;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.025em;
    color: var(--color-heading-dark);
  }

  @media (min-width: 640px) {
    .home-view .featured-heading { font-size: 2.25rem; }
  }

  .home-view .product-grid {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1.5rem;
  }

  @media (min-width: 640px) {
    .home-view .product-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }

  @media (min-width: 1024px) {
    .home-view .product-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  }

  .home-view .product-card {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    border: 1px solid rgba(96, 165, 250, 0.14);
    border-radius: 0.75rem;
    background-color: rgba(96, 165, 250, 0.08);
    padding: 1rem;
    transition: transform 0.2s ease-in-out, border-color 0.2s ease;
  }

  .home-view .product-card:hover {
    transform: translateY(-0.5rem);
    border-color: rgba(96, 165, 250, 0.32);
  }

  .home-view .product-image {
    width: 100%;
    aspect-ratio: 3 / 4;
    border-radius: 0.5rem;
    background-size: cover;
    background-position: center;
    background-color: #d1d5db;
  }

  .home-view .product-title {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-heading-dark);
  }

  .home-view .product-subtitle {
    margin: 0;
    font-size: 0.875rem;
    font-weight: 400;
    color: #F8FAFC;
    white-space: pre-line;
  }
`,C=`
  <canvas id="fondo-canvas" aria-hidden="true"></canvas>
  <div id="app">
    <header class="navbar">
      <a class="navbar__brand" href="#" data-vista="home">PrecioDeAmigo📱🤳📲📡</a>

      <button
        class="navbar__toggle"
        type="button"
        aria-label="Abrir menú"
        aria-expanded="false"
        aria-controls="navbar-menu"
      >
        <span class="navbar__toggle-icon" aria-hidden="true"></span>
      </button>

      <ul class="navbar__menu" id="navbar-menu">
        ${b.map(e=>`<li><a class="navbar__link" href="#" data-vista="${e.vista}">${e.label}</a></li>`).join(``)}
      </ul>
    </header>

    <main id="vista"></main>

    <footer class="pie" id="pie"></footer>
  </div>
`;document.head.insertAdjacentHTML(`beforeend`,`<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />`),document.head.insertAdjacentHTML(`beforeend`,`<style>${x}${S}</style>`),document.body.innerHTML=C;var w=document.querySelector(`#app`),T=document.querySelector(`#fondo-canvas`),E=w.querySelector(`#vista`),D=w.querySelector(`#pie`),O=w.querySelector(`.navbar__toggle`),k=w.querySelector(`#navbar-menu`);g(D);var A=T.getContext(`2d`);if(!A)throw Error(`Sin contexto 2d`);var j=0,M=0;function N(){let e=T.width,t=T.height;A.clearRect(0,0,e,t);let n=A.createRadialGradient(e*.85,t*.1,0,e*.85,t*.1,Math.max(e,t)*.45);n.addColorStop(0,`rgba(77, 163, 255, 0.20)`),n.addColorStop(1,`rgba(77, 163, 255, 0)`),A.fillStyle=n,A.fillRect(0,0,e,t),A.strokeStyle=`rgba(148, 163, 184, 0.08)`,A.lineWidth=1;for(let n=48;n<e;n+=48)A.beginPath(),A.moveTo(n+.5,0),A.lineTo(n+.5,t),A.stroke();for(let n=48;n<t;n+=48)A.beginPath(),A.moveTo(0,n+.5),A.lineTo(e,n+.5),A.stroke()}function P(){if(window.innerWidth===j&&window.innerHeight===M)return;j=window.innerWidth,M=window.innerHeight;let e=Math.min(window.devicePixelRatio||1,2);T.width=Math.floor(j*e),T.height=Math.floor(M*e),A.setTransform(e,0,0,e,0,0),N()}P();function F(){k.classList.remove(`is-open`),O.setAttribute(`aria-expanded`,`false`),O.setAttribute(`aria-label`,`Abrir menú`)}function I(){window.innerWidth<=1080?(k.classList.remove(`is-scrollable`),k.scrollLeft=0):k.classList.toggle(`is-scrollable`,k.scrollWidth>k.clientWidth+1)}var L={home:m,about:t,product:_,tienda:y,apps:r,archivo:i,fotos:d,diet:u,gym:f,contact:l,ayuda:o};function R(e){if(w.querySelectorAll(`.navbar__link`).forEach(t=>{t.classList.toggle(`is-active`,t.dataset.vista===e)}),!k.classList.contains(`is-scrollable`))return;let t=w.querySelector(`.navbar__link.is-active`);if(!t)return;let n=k.getBoundingClientRect(),r=t.getBoundingClientRect();r.left<n.left?k.scrollLeft-=n.left-r.left+8:r.right>n.right&&(k.scrollLeft+=r.right-n.right+8)}function z(e){L[e](E),R(e),F(),w.scrollTo({top:0})}w.addEventListener(`click`,e=>{let t=e.target?.closest(`[data-vista]`);if(!t)return;let n=t.dataset.vista;n&&L[n]&&(e.preventDefault(),z(n))}),O.addEventListener(`click`,()=>{let e=k.classList.toggle(`is-open`);O.setAttribute(`aria-expanded`,String(e)),O.setAttribute(`aria-label`,e?`Cerrar menú`:`Abrir menú`)}),k.addEventListener(`wheel`,e=>{if(!k.classList.contains(`is-scrollable`)||Math.abs(e.deltaY)<=Math.abs(e.deltaX))return;let t=k.scrollWidth-k.clientWidth,n=e.deltaY>0&&k.scrollLeft<t-1,r=e.deltaY<0&&k.scrollLeft>1;(n||r)&&(e.preventDefault(),k.scrollLeft+=e.deltaY)},{passive:!1}),window.addEventListener(`resize`,()=>{P(),I(),window.innerWidth>1080&&F()}),I(),document.fonts&&document.fonts.ready.then(I),z(`home`);