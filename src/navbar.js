class menu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <nav class="navbar">
            <div class="navbarm">
              <div class="logo">
                <!--<img src="img/logo.png" alt="logo">-->
                <a href = "https://cing1.github.io/">CING</a>
              </div>
              <div class="pad bx bx-menu">
                <!--<span class="br-1"></span>
                <span class="br-2"></span>
                <span class="br-3"></span> -->
              </div>
            </div>
            <div class="nav nav-menu-visible">
              <ul id="nav" class="navbarli">
                <li><a class="menu" href="https://cing1.github.io/">Inicio</a></li>
                <li><a class="menu" href="https://cing1.github.io/#services">Servicios</a></li>
                <li><a class="menu" href="https://cing1.github.io/#projects">Proyectos</a></li>
                <li><a class="menu" href="https://cing1.github.io/#contact">Contacto</a></li>
                <li><a class="menu" id="mi-blog" href="https://cing1.github.io/blog.html">Mi blog</a></li>
                <li><a class="menu" id ="libros" href="https://cing1.github.io/libros.html">Libros</a></li>
                <li><a class="menu" href="https://cing1.github.io/portfolio/portfolio.html" target="_blank">Portafolio</a></li>
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