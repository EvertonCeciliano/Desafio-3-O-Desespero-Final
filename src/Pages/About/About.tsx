
import { CaretRight, GithubLogo, LinkedinLogo, Code, BracketsCurly } from '@phosphor-icons/react';
import * as S from './styles';

export function About() {
  return (
    <S.Container>
      <S.PathContainer>
        <p>Home</p>
        <CaretRight size={16} weight="bold" />
        <p>About</p>
      </S.PathContainer>

      <S.AboutCard>
        <S.ProfileSection>
          <S.ProfileImage 
            src="https://avatars.githubusercontent.com/u/101340199?v=4" 
            alt="Everton Ceciliano" 
          />
          <S.ProfileInfo>
            <S.Title>Everton Ceciliano</S.Title>
            <S.Description>
              Hi! I'm a passionate developer who loves creating innovative solutions and amazing digital experiences.
              Focused on web development, I'm always looking for new technologies to learn and improve my skills.
            </S.Description>
            <S.SocialLinks>
              <a href="https://github.com/EvertonCeciliano" target="_blank" rel="noopener noreferrer">
                <GithubLogo size={24} weight="bold" />
              </a>
              <a href="https://www.linkedin.com/in/everton-ceciliano" target="_blank" rel="noopener noreferrer">
                <LinkedinLogo size={24} weight="bold" />
              </a>
            </S.SocialLinks>
          </S.ProfileInfo>
        </S.ProfileSection>

        <S.Subtitle>Skills</S.Subtitle>
        <S.SkillsGrid>
          <S.SkillCard>
            <Code size={24} weight="bold" />
            <span>Frontend Development</span>
          </S.SkillCard>
          <S.SkillCard>
            <BracketsCurly size={24} weight="bold" />
            <span>React & TypeScript</span>
          </S.SkillCard>

          <S.SkillCard>
            <Code size={24} weight="bold" />
            <span>Web Development</span>
          </S.SkillCard>
        </S.SkillsGrid>
      </S.AboutCard>

      <S.AboutCard>
        <S.Subtitle>About this Project</S.Subtitle>
        <S.Description>
          This project is an e-commerce developed with React, TypeScript, and Styled Components.
          I implemented features such as cart, checkout, and state management with Redux.
          The focus was on creating a modern and intuitive user experience, with attention to design and performance details.
        </S.Description>
      </S.AboutCard>
    </S.Container>
  );
}
