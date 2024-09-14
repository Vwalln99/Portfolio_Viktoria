import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  max-width: 900px;
  margin: 0 auto;
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  color: #880e4f;
  margin-bottom: 10px;
  border-bottom: 2px solid #880e4f;
  padding-bottom: 5px;
`;

const Section = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const ResumeText = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const BackButton = styled.button`
  background-color: #880e4f;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #aa1e63;
  }
`;

export default function Resume() {
  const navigate = useNavigate(); 

  const handleBackClick = () => {
    navigate('/'); 
  };

  return (
    <ResumeContainer>
      <h1>Lebenslauf</h1>

      <Section>
        <SectionTitle>Praktika</SectionTitle>
        <ResumeText>
          <strong>Knapp GmbH, Graz</strong><br />
          <strong>qoncept, Leoben</strong>
        </ResumeText>
      </Section>

      <Section>
        <SectionTitle>Ausbildungen</SectionTitle>
        <ResumeText>
          <strong>edv Graz – Ausbildung Applikationsentwicklung weiterführend</strong><br />
          Graz | 02/23 – laufend
        </ResumeText>
        <ResumeText>
          <strong>BFI – Applikationsentwicklung KMS1</strong><br />
          Leoben | 11/21 – 06/22<br />
          Abgeschlossen mit KMS1
        </ResumeText>
        <ResumeText>
          <strong>ZAM – Technik Now!</strong><br />
          Bruck/Mur | 04/21 – 07/21<br />
          Abgeschlossen
        </ResumeText>
        <ResumeText>
          <strong>Bit Schulungscenter – Bewerbungsmanagement</strong><br />
          Kapfenberg | 12/20 – 02/21<br />
          Abgeschlossen
        </ResumeText>
      </Section>

      <Section>
        <SectionTitle>Berufserfahrung</SectionTitle>
        <ResumeText>
          <strong>Billa – Lehre Einzelhandelskauffrau</strong><br />
          Liezen | 08/2017 – 09/2020<br />
          Abgeschlossen mit LAP
        </ResumeText>
        <ResumeText>
          • Annehmen von Telefonaten<br />
          • Freundliches und kompetentes Ansprechen von Kunden<br />
          • Professioneller Kundenservice, Beantworten von Fragen und freundliches Abwickeln von Reklamationen
        </ResumeText>
        <ResumeText>
          <strong>Stefflbäck – Lehre Systemgastronomie</strong><br />
          Haus/Ennstal | 09/2016 – 06/2017<br />
          Abgebrochen
        </ResumeText>
        <ResumeText>
          • Professionelle Zusammenarbeit mit anderen Abteilungen<br />
          • Präzises Weitergeben von relevanten Informationen
        </ResumeText>
      </Section>

      <Section>
        <SectionTitle>Schulbildung</SectionTitle>
        <ResumeText>
          <strong>Fachschule für Land- und Ernährungswirtschaft</strong><br />
          Gröbming | 09/2013 – 07/2016<br />
          Abgeschlossen
        </ResumeText>
        <ResumeText>
          • Facharbeiter<br />
          • Office Assistent (WIFI Graz)<br />
          • ECDL
        </ResumeText>
      </Section>

      <Section>
        <SectionTitle>Hard Skills</SectionTitle>
        <ResumeText>
          • HTML<br />
          • CSS<br />
          • JavaScript<br />
          • TypeScript<br />
          • React<br />
          • PHP<br />
          • SQL<br />
          • Figma <br />
        </ResumeText>
      </Section>

      <Section>
        <SectionTitle>Soft Skills</SectionTitle>
        <ResumeText>
          • Freude am Lernen<br />
          • Selbstständiges Lernen<br />
          • Teamfähig<br />
          • Kreativ<br />
          • Genaues Arbeiten
        </ResumeText>
      </Section>

      <BackButton onClick={handleBackClick}>←</BackButton>
    </ResumeContainer>
  );
}
