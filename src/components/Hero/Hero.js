import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bem-vindo ao <br />
          Meu Portfólio Pessoal
        </SectionTitle>
        <SectionText>
          Me chamou Jefferson Marques. Meu objetivo é crescer profissionalmente, ocupar um lugar na Empresa onde possa aplicar meus conhecimentos e aprimorá-los cada vez mais. Estou à disposição para uma possível oportunidade na Empresa, caso meu perfil se adéque.
        </SectionText>
        <Button onClick={props.handleClick}>Saiba mais</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;