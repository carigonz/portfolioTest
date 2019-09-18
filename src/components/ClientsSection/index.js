import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Clients from "./../Clients";
import "./styles.scss";

function ClientsSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Clients
          items={[
            {
              name: "Github",
              image:
                "https://camo.githubusercontent.com/567bf1473013f8b255ced922ea4909057d292f3d/68747470733a2f2f73332d65752d776573742d312e616d617a6f6e6177732e636f6d2f69682d6d6174657269616c732f75706c6f6164732f75706c6f61645f66666437663639663332393337643236623930383835316630616161616336302e706e67",
              width: "135px"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default ClientsSection;
