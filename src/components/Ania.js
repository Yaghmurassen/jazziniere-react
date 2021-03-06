import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  Fragment,
} from "react";
import { Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// ANIMATIONS

import gsap from "gsap";
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { CSSRulePlugin, CSSPlugin } from "gsap/all";
import Headroom from "headroom.js";
import { Collapse } from "react-burgers";

// ROUTES

import Contact from "../components/Contact";
import Solutions from "../components/Solutions";
import Opportunities from "../components/Opportunities";

// IMAGES

import aniaBio from "./../images/ania/ania-bio.jpg";
import elearning from "./../images/ania/e-learning.png";
import gmail from "./../images/ania/gmail.png";
import gmailMobile from "./../images/ania/gmail-mobile.png";
import instaMobile from "./../images/ania/instagram-mobile.png";
import linkedinMobile from "./../images/ania/linkedin-mobile.png";
import youtubeMobile from "./../images/ania/youtube-mobile.png";
import facebookMobile from "./../images/ania/facebook-mobile.png";
import facebook from "./../images/ania/facebook.png";
import insta from "./../images/ania/insta.png";
import linkedin from "./../images/ania/linkedin.png";
import youtube from "./../images/ania/youtube.png";
import logoJazz from "./../images/jazziniere-logo.png";
import map from "./../images/ania/map.png";
import price from "./../images/ania/price.png";
import phone from "./../images/ania/phone.png";
import musicalite from "./../images/ania/musicalite.jpg";
import placement from "./../images/ania/placement-de-la-voix.jpg";
import sons from "./../images/ania/sons.jpg";
import usa from "./../images/ania/usa.jpg";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
gsap.registerPlugin(CSSPlugin, CSSRulePlugin);
// import "imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min";

function Ania() {
  let w = window.innerWidth;
  let burger = useRef(null);
  let overlay = useRef(null);
  let navDiv = useRef(null);
  let navOg = useRef(null);
  let logo = useRef(null);
  let header = useRef(null);
  let li = useRef(null);

  const [isActive, setIsActive] = useState(false);
  const [scrollPosition, setscrollPosition] = useState(0);

  // const toggleNavScroll = useCallback(() => {
  //   console.log("window ::::::::::", window);
  //   // Hide Header on on scroll down
  //   let didScroll;
  //   let lastScrollTop = 0;
  //   // let header = document.getElementsByClassName("header");
  //   let delta = 5;
  //   let navbarHeight = window.outerHeight;

  //   // const hasScrolled = (e) => {
  //     // let header = document.getElementsByClassName("header");

  //     let st = document.body.scrollTop || document.documentElement.scrollTop;
  //     console.log(
  //       "HESSSS :::   ",
  //       document.body.clientHeight,
  //       st,
  //       didScroll,
  //       navbarHeight,
  //       header
  //     );
  //     // Make sure they scroll more than delta
  //     if (Math.abs(lastScrollTop - st) <= delta) return;

  //     // If they scrolled down and are past the navbar, add class .nav-up.
  //     //  is necessary so you never see what is "behind" the navbar.
  //     if (st > lastScrollTop && st > navbarHeight) {
  //       // Scroll Down
  //       header.classList.remove("nav-down");
  //       header.classList.add("nav-up");
  //     } else {
  //       // Scroll Up
  //       if (st + window.height < document.body.clientHeight) {
  //         header.classList.remove("nav-up");
  //         header.classList.add("nav-down");
  //       }
  //     }
  //     lastScrollTop = st;
  //   };
  // }, []);

  // setInterval(function () {
  // if (didScroll) {
  //   hasScrolled();
  //   didScroll = false;
  // }
  // }, 250);

  const toggleNav = () => {
    setIsActive(!isActive);
    if (!isActive) {
      console.log("document.body     ", document.body);
      document.body.classList.add("overflow");
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow");
      document.body.classList.remove("overflow-hidden");
    }
  };

  const onScroll = () => {
    let btn = document.getElementsByClassName("btn-top");
    let bodySize = document.body.scrollHeight;

    if (window.scrollY > 300) {
      btn[0].classList.add("show");
    } else {
      btn[0].classList.remove("show");
    }

    if (bodySize - window.scrollY > 900) {
      document.getElementsByClassName("social-link")[0].classList.add("show");
    } else {
      document
        .getElementsByClassName("social-link")[0]
        .classList.remove("show");
    }
  };

  const scrollTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  };

  const toggleBurger = () => {
    if (w < 992) {
      burger.classList.remove("hide");
    } else {
      burger.classList.add("hide");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", onScroll, false);
    // window.addEventListener("scroll", toggleNavScroll, false);
    // window.addEventListener("scroll", function (event) {
    //   didScroll = true;
    // });
    let toggleHeader = new Headroom(header);
    toggleHeader.init();

    // toggleNavScroll();
    toggleBurger();

    return function cleanup() {
      window.removeEventListener("scroll", onScroll, false);
      // window.removeEventListener("scroll", toggleNavScroll, false);
      // window.removeEventListener("scroll", function (event) {
      //   didScroll = true;
      // });
    };
  }, []);

  return (
    <Fragment>
      <header
        className={isActive ? "translate-header headroom" : "headroom"}
        ref={(el) => (header = el)}
      >
        <nav
          className={
            isActive ? "nav-og nav-down translate-nav" : "nav-og nav-down"
          }
          ref={(el) => (navOg = el)}
        >
          <div
            className={isActive ? "logo translate-logo" : "logo"}
            ref={(el) => (logo = el)}
          >
            <Link to="/">
              <img src={logoJazz} alt="logo" />
            </Link>
            <h3>La Jazzinière</h3>
          </div>
          <div style={{ display: "grid" }}>
            <ul className="ul-og">
              <li>
                <a href="#pourquoi">Pourquoi ?</a>
              </li>
              <li>
                <a href="#methode">Ma méthode</a>
              </li>
              <li>
                <a href="#acting">Acting in English</a>
              </li>
              <li>
                <a href="#biographie">Prise de parole en public</a>
              </li>
              <li>
                <a href="#biographie">Bio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div
            className={isActive ? "nav-div show" : "nav-div"}
            ref={(el) => (navDiv = el)}
          >
            <ul className="nav-home" onClick={() => toggleNav()}>
              <li className="li-home" ref={(el) => (li = el)}>
                <img src={logoJazz} alt="logo" />
              </li>
              <li className="li-home">
                <a href="#pourquoi">Pourquoi ?</a>
              </li>
              <li className="li-home">
                <a href="#methode">Ma méthode</a>
              </li>
              <li className="li-home">
                <a href="#acting">Acting in English</a>
              </li>
              <li className="li-home">
                <a href="#biographie">Prise de parole en public</a>
              </li>
              <li className="li-home">
                <a href="#biographie">Bio</a>
              </li>
              <li className="li-home">
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div className="about">
              <p>Coaching en Réduction d’Accent</p>
              <p>
                Apprentissage de l’accent américain et britannique avec Ania
                Gauer
              </p>
            </div>
            <div className="social">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookMobile} alt="facebook" />
              </a>
              <a
                href="https://www.instagram.com/the_american_accent_coach/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instaMobile} alt="instagram" />
              </a>
              <a
                href="mailto:aniagauer@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gmailMobile} alt="gmail" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtubeMobile} alt="youtube" />
              </a>
              <a
                href="https://www.linkedin.com/in/ania-gauer-30ba45a0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinMobile} alt="linkedin" />
              </a>
            </div>
          </div>
          <div
            ref={(el) => (burger = el)}
            className={isActive ? "burger clicked" : "burger"}
            onClick={() => toggleNav()}
          >
            <span />
          </div>
          <div
            ref={(el) => (overlay = el)}
            onClick={() => toggleNav()}
            className={isActive ? "overlay show" : "overlay"}
          />
        </nav>
      </header>

      <main className="main-ania">
        <section>
          <article id="presentation">
            {/* <Collapse/> */}
            <img src={elearning} alt="e-learning" />
            <div>
              <h1>Coaching en Réduction d’Accent</h1>
              <h3>
                Apprentissage de l’accent américain et britannique avec Ania
                Gauer
              </h3>
            </div>
          </article>
        </section>

        <section>
          <article id="pourquoi">
            <div>
              <h2>Pourquoi la réduction d’accent ?</h2>
              <p>
                Pour tous ceux qui voyagent ou travaillent à l’international,
                <b>
                  maîtriser l’anglais n’est plus une option mais une nécessité.
                </b>
                Si connaître la grammaire anglaise est évidemment essentiel,
                parler la langue de manière
                <b>fluide, claire et sans accent</b> est encore plus important
                pour s’exprimer avec justesse et assurance.
              </p>
              <p>
                La langue anglaise possède beaucoup de mots aux sonorités
                semblables, pour lesquels la moindre voyelle ou syllabe mal
                prononcée peut vous faire passer à côté de votre message et vous
                coûter un fameux <b>« Sorry, what did you say ? »</b> de la part
                de votre interlocuteur anglophone.
              </p>
              <p>
                Le coaching en réduction d’accent vous permet d’améliorer votre
                <b>
                  prononciation en anglais, effacer progressivement votre accent
                  français et maîtriser la prononciation américaine
                </b>
                (ou un autre accent anglophone de votre choix) pour rester
                maître de vos messages en toutes circonstances.
              </p>
              <p>
                La réduction d’accent est destinée à tout le monde. Elle peut
                être un véritable atout pour les
                <b> chanteurs et acteurs francophones</b> se destinant à une
                carrière anglophone ou les dirigeants d’entreprise, cadres et
                universitaires évoluant à l’international. Un bon accent vous
                donnera plus de légitimité auprès de vos partenaires et
                <b> renforcera l’impact de vos messages et votre charisme</b>
                auprès de votre public.
              </p>
            </div>
          </article>
        </section>

        <section>
          <article className="avis">
            <div>
              <img
                src={"https://img.icons8.com/bubbles/100/000000/quote-left.png"}
                alt="avis"
              />
              <p>
                Le coaching en réduction d’accent vous permet d’améliorer votre
                <b>
                  prononciation en anglais, effacer progressivement votre accent
                  français et maîtriser la prononciation américaine.
                </b>
              </p>
            </div>
            <div>
              <img
                src={"https://img.icons8.com/bubbles/100/000000/quote-left.png"}
                alt="avis"
              />
              <p>
                Le coaching en réduction d’accent vous permet d’améliorer votre
                <b>
                  prononciation en anglais, effacer progressivement votre accent
                  français et maîtriser la prononciation américaine.
                </b>
              </p>
            </div>
            <div>
              <img
                src={"https://img.icons8.com/bubbles/100/000000/quote-left.png"}
                alt="avis"
              />
              <p>
                Le coaching en réduction d’accent vous permet d’améliorer votre
                <b>
                  prononciation en anglais, effacer progressivement votre accent
                  français et maîtriser la prononciation américaine.
                </b>
              </p>
            </div>
          </article>
        </section>

        <section>
          <article id="methode">
            <div>
              <h2>Ma méthode</h2>
              <p>
                Après avoir étudié différentes pratiques auprès de coachs
                new-yorkais renommés, tels que <b>Coehli Kalhoun</b> (coach de
                Satires Ronan, Bella Heathcote), <b>Charley Layton</b>
                (Dialect Coach à l’Atlantic Theater School) et
                <b>Alithea Philips</b> (Dialect Coach au Stella Adler Studio of
                Acting), j’ai développé une méthode spécialement conçue pour les
                étudiants francophones.
              </p>
              <p>
                Transformer sa prononciation et exprimer les sonorités les plus
                justes dans une langue étrangère implique de comprendre d’abord
                <b>
                  les mécanismes de placement de la voix et la musicalité de sa
                  langue maternelle.
                </b>
                Chaque langue à ses particularités ; il est nécessaire de bien
                les appréhender et de les déconstruire pour
                <b>pouvoir passer d’un accent à un autre…</b> Méfiez-vous des
                coachs « native » qui parlent français avec un fort accent
                américain !
              </p>
              <p>
                <b>Ma méthode n’utilise ni la phonétique ni la répétition</b>,
                celles-ci ne pouvant aboutir qu’à un « à peu-près » sans
                parvenir à un accent convaincant.
              </p>
              <p>Ma méthode s’articule autour de 4 exercices :</p>
              <ul>
                <li>
                  <img src={placement} alt="placement" />
                  <div>
                    <h3>Le placement :</h3>
                    <p>
                      Positionnement de la langue, utilisation de la voix,
                      ouverture de la bouche, résonance etc. (comment utiliser
                      son instrument vocal différemment pour lui donner un son «
                      made in USA »)
                    </p>
                  </div>
                </li>
                <li>
                  <img src={sons} alt="sons" />
                  <div>
                    <h3>Les sons :</h3>
                    <p>
                      Travail détaillé sur tous les différents types de voyelles
                      et de consonnes propres à l’accent américain (longueur et
                      couleur des sons, positionnement de la langue etc.)
                    </p>
                  </div>
                </li>
                <li>
                  <img src={musicalite} alt="musicalité" />
                  <div>
                    <h3>La musicalité :</h3>
                    <p>
                      Travail sur l’accentuation des syllabes et des mots au
                      sein d’une phrase pour conférer ce ton « over the top » et
                      une fluidité de parole à l’Américaine.
                    </p>
                  </div>
                </li>
                <li>
                  <img src={usa} alt="american way of being" />
                  <div>
                    <h3>L’apprentissage de « l’American Way of Being » :</h3>
                    <p>
                      Petites notes sur la culture américaine car il faut « être
                      Américain » dans sa tête pour parler comme un Américain.
                    </p>
                  </div>
                </li>
              </ul>
              <br></br>
              <div className="map">
                <img src={map} alt="location" />
                <h3>Lieu des cours :</h3>
              </div>
              <p className="infos">
                Les cours se déroulent dans mon
                <b>
                  bureau du 19ème arrondissement de Paris ou à l’endroit de
                  votre choix (bureau, studio d’enregistrement, plateau TV ou
                  cinéma, domicile)
                </b>
                *prévoir un supplément pour le déplacement
              </p>
              <div />
              <div className="price">
                <img src={price} alt="prix" />
                <h3>Tarifs :</h3>
              </div>
              <p className="infos">
                Coaching individuel :
                <b>
                  40€/heure (+10€ pour un déplacement à maximum 30 minutes de
                  mon bureau)
                </b>
              </p>
            </div>
          </article>
        </section>
        <section>
          <article id="biographie">
            <div>
              <h2>Biographie</h2>
              <p>
                Née d’un père franco-allemand et d’une mère polonaise, j’ai
                baigné dans trois langues dès mon plus jeune âge. A
                l’adolescence, je me suis prise de passion pour le cinéma et la
                langue anglaises et suis parti vivre aux Etats-Unis pour faire
                des études d’art dramatique. Je suis entrée au Stella Adler
                Studio of Acting de New York en 2010 et y ai étudié le « Method
                Acting », méthode de jeu d’acteur basée sur les principes de
                Stanislavsky et de l’Actor Studio. Pour accéder à des rôles de «
                native », j’ai suivi des cours de réduction d’accent intensifs
                auprès de coachs reconnus. Titulaire de la carte de membre de la
                Screen Actors Guild, je me suis installée à Paris en 2014, où je
                travaille comme coach en réduction d’accent et professeure
                d’anglais en parallèle de mes activités de réalisation dans le
                cinéma.
              </p>
            </div>
            <div>
              <img src={aniaBio} alt="ania-bio" />
              <div></div>
            </div>
          </article>
        </section>
        <section>
          <article id="acting">
            <div>
              <h2>Acting in English</h2>
              <p>
                Ce cours est destiné aux
                <b>
                  comédiens et comédiennes se destinant à une carrière
                  internationale
                </b>
                (recherche d’agent artistique à l’étranger, castings pour des
                personnages anglophones etc.) et souhaitant
                <b>
                  ajouter un monologue ou une scène à leur bande démo dans un
                  anglais parfait et sans accent.
                </b>
              </p>
              <ul>
                <li>
                  Nous choisirons ou écrirons ensemble un texte qui mettra en
                  valeur votre profil et votre capacité de jeu.
                </li>
                <li>
                  Nous apprendrons le texte avec l’accent de votre choix
                  (américain standard, britannique, accent cockney etc.)
                </li>
                <li>
                  Nous travaillerons votre jeu en utilisant les méthodes
                  d’acting américaines (objectifs, obstacles, actions)
                </li>
                <li>
                  Nous filmerons votre scène ou monologue dans des conditions
                  professionnelles en équipe réduite.
                </li>
              </ul>
            </div>
          </article>
        </section>
      </main>

      <div id="social-link" className="social-link">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook"
        >
          <img src={facebook} alt="facebook" />
        </a>
        <a
          href="mailto:aniagauer@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="gmail"
        >
          <img src={gmail} alt="gmail" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          <img src={insta} alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="youtube"
        >
          <img src={youtube} alt="youtube" />
        </a>
      </div>

      <section id="contact">
        <article className="touch">
          <iframe
            src="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdjmysqaETz8r5Tzz1VmeJ3RilMebAH1QsQsiWnLRqwI8MA8g/formResponse"
            frameBorder="0"
            width="620"
            height="800"
            marginHeight="100"
            scrolling="no"
            marginWidth="50"
            className="contact"
            title="booking-form"
          ></iframe>
        </article>

        <footer>
          <article>
            <div className="footer-grid">
              <div className="footer-info">
                <p>
                  <img src={phone} alt="téléphone" className="phone" />:
                  0659931178
                </p>
                <p>© La Jazzinière 2020</p>
              </div>
              <div className="footer-logo">
                <img src={logoJazz} alt="logo" />
              </div>
              <div id="social-link-footer">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} alt="facebook" />
                </a>
                <a
                  href="mailto:aniagauer@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gmail} alt="gmail" />
                </a>
                <a
                  href="https://www.instagram.com/the_american_accent_coach/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={insta} alt="instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ania-gauer-30ba45a0/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={linkedin} alt="linkedin" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youtube} alt="youtube" />
                </a>
              </div>
            </div>
          </article>
        </footer>
      </section>

      <button className="btn-top" onClick={(e) => scrollTop(e)}>
        <svg
          aria-hidden="true"
          focusable="false"
          width="20px"
          data-prefix="fas"
          data-icon="chevron-up"
          className="svg-inline--fa fa-chevron-up fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
          ></path>
        </svg>
      </button>
    </Fragment>
  );
}

export default Ania;
