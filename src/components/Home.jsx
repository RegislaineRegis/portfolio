import React from 'react';
import '../styles/Home.css';
import foto from '../imagens/regislaine.jpg';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Home() {
 return (
    <div><Header />
      <div className="main">
          <div className="main-card">
            <img src={foto} 
            alt="regislaine" width="250" height="250" className="main-foto" />
            <h1 className="title-main">Regislaine Fidelis Regis</h1>
            <h6 className="title-text-main">Campinas -SP</h6></div>
          <div className="main-paragrafo main-card">
            <p> Tenho 38 anos, sou casada, adoro um bom café, tenho uma filha chamada Amora 
              buldogue inglês sou apaixonada por ela e por qualquer doguinho que encontro por aí.
            </p>
            <p> Estou estudando para me tornar uma desenvolvedora de software full-Stack, 
              adoro trabalhar em equipe e compartilhar conhecimentos. Estou realizando
              uma transição de carreira, pois trabalhei por anos na área da aviação.</p>
          </div></div><Footer />
    </div>        
    );
}