import React from 'react';
import Preview from '../components/card/MainComponents/Preview';
import Footer from '../components/card/Footer';

function Landing() {
  return (
    <>
      <div class='index-main'>
        <img class='index-main__image' src='./assets/images/awesome-profile-cards-logo.svg' />
        <h1 class='index-main__title'>Crea tu tarjeta de visita</h1>
        <p class='index-main__content'>Crea mejores contactos profesionales de forma fácil y cómoda</p>
        <div class='index-main__table'>
          <ul class='index-main__list'>
            <li>
              <i class='far fa-object-ungroup'></i>
              <p class='index-main__text-list'>Diseña</p>
            </li>
            <li>
              <i class='far fa-keyboard'></i>
              <p class='index-main__text-list'>Rellena</p>
            </li>
            <li>
              <i class='fas fa-share-alt'></i>
              <p class='index-main__text-list'>Comparte</p>
            </li>
          </ul>
        </div>
        <a href={Preview} class='index-main__button'>
          Comenzar
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
