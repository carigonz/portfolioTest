import React from "react";
import Section from "./../Section";
import { Link } from "./../../util/router.js";
import "./styles.scss";

function Footer(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="FooterComponent__container container">
        <div className="columns">
          <div className="column is-5 is-4-widescreen">
            <Link className="brand" to="/">
              <div className="brand-icon" />
            </Link>

            {props.description && (
              <p className="FooterComponent__description">
                {props.description}
              </p>
            )}

            {props.copyright && (
              <p className="FooterComponent__copywrite">{props.copyright}</p>
            )}
          </div>
          <div className="column is-7 is-6-widescreen is-offset-2-widescreen">
            <div className="columns">
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Contacto</p>
                  <ul className="menu-list">
                    <li>
                      <a href="https://github.com/carigonz">GitHub</a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/carigonz/">
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <span
                        className="link"
                        text="carolinagonzalez794@gmail.com"
                      />
                    </li>
                    <li>
                      <Link to="#">carolinagonzalez794@gmail.com</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Footer;
