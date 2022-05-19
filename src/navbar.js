class menu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <nav class="navbar">
            <div class="navbarm">
              <div class="logo">
                <!--<img src="img/logo.png" alt=""> -->
                <h1> CING</h1>
              </div>
              <div class="pad">
                <span class="br-1"></span>
                <span class="br-2"></span>
                <span class="br-3"></span>
              </div>
            </div>
            <div class="nav nav-menu-visible">
              <ul id="nav" class="navbarli">
                <li><a class="menu active" href="https://cing1.github.io/">Inicio</a></li>
                <li><a class="menu" href="#services">Servicios</a></li>
                <li><a class="menu" href="#projects">Proyectos</a></li>
                <li><a class="menu" href="https://cing1.github.io/blog.html">Mi blog</a></li>
                <li><a class="menu" href="https://cing1.github.io/libros.html">Libros</a></li>
                <li><a class="menu" href="https://cing1.github.io/portfolio/portfolio.html" target="_blank">Portafolio</a></li>
                <li><a class="menu" href="#contact">Contacto</a></li>
                <li><a class="menu" href="https://cing1.github.io/#footer-info">Acerca de</a></li>
              </ul>
              
              <div class="search-container">
                <a href="https://www.facebook.com/cing.ingenieria" target="_blank"> <i class="bx bxl-facebook"></i></a>
                <a href="https://www.twitter.com" target="_blank"><i class="bx bxl-twitter"></i></a>
                <a href="https://www.instagram.com" target="_blank"><i class="bx bxl-instagram"></i></a>
                <a href="https://www.linkedin.com" target="_blank"><i class="bx bxl-linkedin"></i></a>
                <div class="search">
                   <input type="text" class="searchTerm" placeholder="Buscar">
                   <button type="submit" class="searchButton">
                     <i class="bx bx-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        `;
  }
}

window.customElements.define("nav-bar", menu);