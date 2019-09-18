import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Faq from "./../Faq";
import "./styles.scss";

function FaqSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Faq
          items={[
            {
              question: "Experiencia profesional",
              answer: `En estos momentos me encuentro buscando mi primer trabajo en Tecnología. Tengo experiencia desarrollando proyectos como el desarrollo de una aplicación web ecommerce y un gestor de listas de precios, ambos utilizando principalmente backend con PHP, Laravel y Javascript. También, varios proyectos en Javascript vainilla, como el backend de un 'fake Kindle', o un juego del tipo 'memotest'. Skills: Metodologías Ágiles (Scrum), MySQL, MVC, OOP jQuery, Javascript, PHP, Laravel, React, GIT- GITHUB, ES6+, Pair Programming, clean code.`
            },
            {
              question: "Formación académica",
              answer: `Estudiante de Ingeniería en Sonido, en 2019 comenzó mi capacitación en Desarrollo web. Ganadora de la beca 'Mujeres en tecnología', esta misma me permitió capacitarme en desarrollo web fullstack. Siempre curiosa, investigando me topé con Javascript y un programa de mentorias que me ofreció aprender este lenguaje, desde cero, sin ningún framework. Hoy por hoy, aún terminando en este último curso, me encuentro capacitándome de forma autodidacta en React buscándo mi primer experiencia laboral en Tecnología.`
            },
            {
              question: "Sobre mi",
              answer:
                "Buscando una profesión que me permita continuar con mis estudios, encontré una gran pasión. Metódica y siempre curiosa, hoy me encuentro iniciando mi carrera como desarrolladora web, busco una empresa dinámica que me permita explorar y ampliar mis conocimientos."
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FaqSection;
