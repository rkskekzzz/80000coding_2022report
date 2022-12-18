import styled from '@emotion/styled';
import './App.css';
import { TabWidget, BarGraph, SliderWidget, Card, Section } from './components';
import { Container } from '@mui/material';

import { Weekday } from './data';

function App() {
  return (
    <Box
      titleBox={
        <TitleBox fg='white' bg='none'>
          <div>asdfasdf asdf asdf</div>
        </TitleBox>
      }
      contentBox={
        <ContentBox fg='white' bg='none'>
          <Section index={1}>
            <TabWidget
              items={[
                {
                  title: 'Tab 1',
                  content: <div>Card 1</div>,
                },
                {
                  title: 'Tab 2',
                  content: <div>Card 2</div>,
                },
              ]}
            />
          </Section>
          <Section index={2}>
            <BarGraph items={Weekday} direction='bottom-to-top' maxBarHeight={500} />
          </Section>
          <Section index={2}>
            <BarGraph items={Weekday} direction='left-to-right' maxBarHeight={500} />
          </Section>
          <Section index={3}>
            <SliderWidget>
              <Card title='Card 1'>
                <p>Card 1</p>
              </Card>
              <Card title='Card 2'>
                <p>Card 2</p>
              </Card>
            </SliderWidget>
          </Section>
        </ContentBox>
      }
      footerBox={
        <ContentBox>
          <Section>hi</Section>
        </ContentBox>
      }
    />
  );
}

export default App;

interface TitleBoxProps {
  fg?: string;
  bg?: string;
  children?: React.ReactNode;
}

const TitleBox = ({ fg, bg, children }: TitleBoxProps) => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '30vh',
        bgcolor: bg,
        color: fg,
      }}
    >
      {children}
    </Container>
  );
};

interface ContentBoxProps {
  fg?: string;
  bg?: string;
  children?: React.ReactNode;
}

const ContentBox = ({ fg, bg, children }: ContentBoxProps) => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        gap: '25px',
        bgcolor: bg,
        color: fg,
      }}
    >
      {children}
    </Container>
  );
};

interface BoxProps {
  titleBox: React.ReactNode;
  contentBox: React.ReactNode;
  footerBox: React.ReactNode;
}

const Box = ({ titleBox, contentBox, footerBox }: BoxProps) => {
  return (
    <Container
      className='App'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        maxWidth: '600px !important',
      }}
    >
      {titleBox}
      {contentBox}
      {footerBox}
    </Container>
  );
};
