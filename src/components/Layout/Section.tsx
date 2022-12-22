import React from 'react';
import styled from '@emotion/styled';
import { Themes, SectionTheme } from '../../theme/theme';
import { useTheme } from '@mui/material';

interface SectionProps {
  themes?: Themes;
  title?: string;
  image?: string;
  subtitle?: string;
  children?: React.ReactNode;
}
const Section = ({ themes, title, image, subtitle, children }: SectionProps) => {
  const theme = useTheme();
  return (
    <Container sectionTheme={theme.section[themes ?? 'default']}>
      <div>
        {subtitle && <h5 className='contentbox-subtitle'>{subtitle}</h5>}
        {title && <h4 className='contentbox-title'>{title}</h4>}
      </div>
      {image && <img className='contentbox-image center' src={image} alt='section' />}
      {children}
    </Container>
  );
};

export default Section;

const Container = styled.div<{ sectionTheme?: SectionTheme }>`
  width: 100%;
  height: 460px;

  padding: 30px 50px 50px 50px;

  border-radius: 25px;

  backdrop-filter: blur(10px);
  background: ${(props) => props.sectionTheme?.bg ?? 'white'};

  display: flex;
  flex-direction: column;
  gap: 25px;

  // 단어별 줄바꿈
  word-break: keep-all;

  & > {
    color: ${(props) => props.sectionTheme?.fgBody ?? 'black'};
  }

  .contentbox-title {
    width: 100%;
    margin: 0;

    font-size: 1.7rem;
    font-weight: 700;

    color: ${(props) => props.sectionTheme?.fgTitle ?? 'black'};
    text-align: center;
  }
  .contentbox-subtitle {
    width: 100%;
    margin: 0;

    font-size: 1rem;
    font-weight: 500;

    color: ${(props) => props.sectionTheme?.fgSubtitle ?? 'black'};
    text-align: center;
  }
  .contentbox-image {
    margin: auto;
    width: auto;
    height: 120px;
  }
  .center {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
