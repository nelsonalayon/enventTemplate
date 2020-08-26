import React from "react";

// import "./App.css";
import { PrincipalButton } from "./components/button/TemplateButton";

import { Conference } from "./components/conference/Conference";
import { Speaker } from "./components/speaker/Speaker";
import { Sponsor } from "./components/sponsor/Sponsor";
import { Navbar } from "./components/navbar/Navbar";
import { SectionSmall } from "./components/sectionInfoSmall/SectionSmall";
import { SectionLarge } from "./components/sectionInfoLarge/SectionLarge";
import { Date } from "./components/date/Date";
import {
  Intro,
  TemplateContainer,
  SuperTitle,
  ContainerFlexHorizontal,
  WrapperPrincipalImage,
  TextDescription
} from "./styles";
import { Chronometer } from "./components/chronometer/Chronometer";
import { GlobalStyle } from "./GlobalStyles";

// datos para el componente countdown

const TIPE_OF_DATE = "Day";
const NUMBER = "14";

// Datos para el componente del speaker

const PHOTO =
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const SPEAKER = "Kent C. Dodds";
const BIO =
  "Etiam elementum convallis augue. Proin aliquet massa nulla, vel facilisis lectus suscipit at. Fusce mollis, nibh in rutrum commodo, urna sem bibendum lacus, eu sollicitudin tellus sapien eget nisi. Curabitur eget ligula id nunc maximus eleifend.";

//Datos para el componente sponsor

const SPONSOR_IMAGE = "https://media.graphcms.com/H5Wj9d61Q76Klnnltrhj";
const SPONSOR_TITLE = "Codebar";
const SPONSOR_URL = "https://www.google.com/";

// Datos para el componente Conference time, conferenceTitle, speaker, conferenceDescription

const TIME = "8:45 am ";
const CONFERENCE_TITLE = "Server Side Rendering";
const SPEAKER_CONFERENCE = "Kent C. Dodds";
const CONNFERENCE_DESCRIPTION =
  "Nullam volutpat aliquam sapien, eget elementum justo dictum non. Nullam a erat massa. Ut dignissim velit sit amet elit dictum eleifend. Duis tempus justo porta tellus consectetur, eget finibus orci suscipit. Mauris feugiat mauris ut tellus posuere, ut convallis tortor euismod.Etiam elementum convallis augue. Proin aliquet massa nulla, vel facilisis lectus suscipit at. Fusce mollis, nibh in rutrum commodo, urna sem bibendum lacus, eu sollicitudin tellus sapien eget nisi. Curabitur eget ligula id nunc maximus eleifend. ";

// datos para el componente sectionSmall y SectionLarge
const SECTION_INFO = "20 DE OCTUBRE DE 2020";

//datos para el componente date

const DATE = "20 de octubre";

function Template() {
  return (
    <>
      <GlobalStyle />

      <TemplateContainer>
        <Navbar />
        <SectionSmall
          sectionName={SECTION_INFO}
          style={{ paddingTop: "50px" }}
        />
        <header >
          <div>
            <Intro>Gran Evento No te lo puedes perder</Intro>
          </div>

          <PrincipalButton />

          <Chronometer typeOfDate={TIPE_OF_DATE} number={NUMBER} />
        </header>

        <SectionSmall sectionName="EL EVENTO" style={{ paddingTop: "50px" }} />

        <div>
          <SuperTitle>EL GRAN EVENTO JAMAS VISTO</SuperTitle>

          <WrapperPrincipalImage>
            <img
              src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt=""
            />
          </WrapperPrincipalImage>
          <TextDescription>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              nibh dolor, vulputate sed eros sit amet, accumsan pulvinar arcu.
              Proin vehicula, nisl non lobortis consectetur, libero eros
              placerat augue, id viverra metus metus eu ante. Duis blandit
              ullamcorper leo, lobortis semper enim pulvinar quis. In feugiat
              tortor lacus, a sodales orci sagittis dictum. Etiam finibus urna
              et pellentesque mattis. Sed interdum, tellus eget sagittis ornare,
              lorem dolor dictum est, eget tempus ante nisl elementum dui.
              Integer vestibulum risus sit amet dapibus faucibus. Quisque ac
              convallis sem.
            </p>
          </TextDescription>
        </div>

        <SectionLarge sectionName="CONFERENCIAS" />

        <Date eventDate={DATE} />
        <ContainerFlexHorizontal>
          {[1, 2, 3, 4].map((event) => {
            return (
              <Conference
                time={TIME}
                conferenceTitle={CONFERENCE_TITLE}
                speaker={SPEAKER_CONFERENCE}
                conferenceDescription={CONNFERENCE_DESCRIPTION}
              />
            );
          })}
        </ContainerFlexHorizontal>

        <SectionLarge sectionName="CONFERENCISTAS" />

        <ContainerFlexHorizontal>
          {[1, 2, 3, 4].map((event) => {
            return (
              <Speaker
                photo={PHOTO}
                speaker={SPEAKER}
                bio={BIO}
                SpeakerTwiter=""
              />
            );
          })}

          <SectionLarge sectionName="SPONSORS" />

          {[1, 2, 3, 4, 5, 6].map((sponsor) => {
            return (
              <Sponsor
                sponsorImage={SPONSOR_IMAGE}
                sponsorTitle={SPONSOR_TITLE}
                sponsorUrl={SPONSOR_URL}
              />
            );
          })}
        </ContainerFlexHorizontal>

        
      </TemplateContainer>
    </>
  );
}

export default Template;
