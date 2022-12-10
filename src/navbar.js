class menubar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar">
      <div class="navbarm">
        <div class="logo">
          <!--<img src="img/logo.png" alt="logo">-->
          <a href = "https://cing1.github.io/">CING</a>
        </div>
        <div class="pad bx bx-menu">
        </div>
      </div>
      <div class="nav nav-menu-visible">
        <ul id="nav" class="navbarli">
          <li><a class="menu active" href="https://cing1.github.io/">Inicio</a></li>
          <li><a class="menu" href="https://cing1.github.io/#services">Servicios</a></li>
          <li><a class="menu" href="https://cing1.github.io/#projects">Proyectos</a></li>
          <li><a class="menu" href="https://cing1.github.io/#contact">Contacto</a></li>
          <li><a class="menu" id="mi-blog" href="https://cing1.github.io/blog">Blog</a></li>
          <li><a class="menu" href="https://cing1.github.io/portfolio/mario_cesgo_soliz" target="_blank">Portfolio</a></li>
          <li>
            <a class='menu' id='recursos' href="#">Recursos</a>
            <ul>
              <li><a id="biblioteca" href="https://cing1.github.io/biblioteca.html">Biblioteca</a></li>
              <li><a href="https://cing1.github.io/plantillas-excel">Plantillas Excel</a></li>
              <li><a id="hp-prime" href="https://cing1.github.io/programas-hp-prime.html">Programas HP-PRIME</a></li>
            </ul>
          </li>
        </ul>
        <div class="search-container">
          <a href="https://www.facebook.com/cing.ingenieria" target="_blank"> <i class="bx bxl-facebook"></i></a> 
          <a href="https://www.twitter.com" target="_blank"><i class="bx bxl-twitter"></i></a>
          <a href="https://www.instagram.com" target="_blank"><i class="bx bxl-instagram"></i></a>
          <a href="https://www.linkedin.com" target="_blank"><i class="bx bxl-linkedin"></i></a>
          <button type="submit" class="dark-mode" onclick="darkMode()"><i class="dark-modei bx bxs-moon"></i></button>
          <div class="search">
             <input type="text" class="searchTerm" placeholder="Buscar">
             <button type="submit" class="searchButton">
               <i class="bx bx-search"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>`;
  }
}

window.customElements.define("nav-bar", menubar);