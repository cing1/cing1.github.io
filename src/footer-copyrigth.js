class footerCopyrigth extends HTMLElement{
    connectedCallback(){
        this.innerHTML = ` 
        <h2> © Copyright: <span>CING</span> all rights reserved</h2>
        <h3>Powered by: Mario Cesgo Solis</h3>
        `;
    }
}

window.customElements.define("footer-copyrigth", footerCopyrigth);