import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaInstagram,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                        introdata.animated.fourth,
                        introdata.animated.fifth,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      Portföyüm
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      İletişim
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      <div className="footer">
        <div className="footer-social">
          <ul>
            {socialprofils.twitter && (
              <li>
                <a href={socialprofils.twitter}>
                  <FaTwitter />
                </a>
              </li>
            )}
            {socialprofils.instagram && (
              <li>
                <a href={socialprofils.instagram}>
                  <FaInstagram />
                </a>
              </li>
            )}
            {socialprofils.github && (
              <li>
                <a href={socialprofils.github}>
                  <FaGithub />
                </a>
              </li>
            )}
            {socialprofils.facebook && (
              <li>
                <a href={socialprofils.facebook}>
                  <FaFacebookF />
                </a>
              </li>
            )}
            {socialprofils.linkedin && (
              <li>
                <a href={socialprofils.linkedin}>
                  <FaLinkedin />
                </a>
              </li>
            )}
            {socialprofils.youtube && (
              <li>
                <a href={socialprofils.youtube}>
                  <FaYoutube />
                </a>
              </li>
            )}
            {socialprofils.twitch && (
              <li>
                <a href={socialprofils.twitch}>
                  <FaTwitch />
                </a>
              </li>
            )}
          </ul>
        </div>
        <ul>
          <Link to="/Home">
            <li>Ana Sayfa</li>
          </Link>
        </ul>
        <ul>
          <Link to="/About">
            <li>Hakkında</li>
          </Link>
        </ul>
        <Link to="/Contact">
          <ul>
            <li>İletişim</li>
          </ul>
        </Link>
        <ul>
          <Link to="/Portfolio">
          <li>Projeler</li>
          </Link>
        </ul>
        <div className="copyright">
      © 2023 Ahmet Barut Tüm Hakları Saklıdır
      </div>
      </div>
     
    </HelmetProvider>
  );
};
