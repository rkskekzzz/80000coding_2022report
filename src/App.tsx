import './App.css';
import { TabWidget, BarGraphWidget, SliderWidget, Card, CountUpWidget, Section } from './components';
import { Container, useTheme, Typography } from '@mui/material';
import { Weekday, Tags } from './data';
import { Themes } from './theme/theme';
import styled from '@emotion/styled';
import { Analytics } from '@vercel/analytics/react';
import PostHrefWidget from './components/widget/PostHrefWidget';

function App() {
  return (
    <>
      <Box
        titleBox={
          <TitleBox>
            <Typography
              className='grad'
              display='inline'
              align='center'
              fontWeight={700}
              fontSize='8rem'
              color='#00dc64'
              fontFamily='Anton'
              lineHeight='130px'
            >
              2022
            </Typography>
            <Typography
              className='grad'
              display='inline'
              align='center'
              fontWeight={700}
              fontSize='3rem'
              color='#00dc64'
              fontFamily='Anton'
            >
              with 42SEOUL
            </Typography>
            <Typography className='grad' display='inline' align='center' fontWeight={700} fontSize='2rem' color='#00dc64' fontFamily='Gugi'>
              팔만코딩경 리포트
            </Typography>
            <Typography display='inline' align='center' fontWeight={700} fontSize='0.9rem' color='#4f99d6' fontFamily='Nanum Gothic'>
              결산 기간 : 2022.01.01 ~ 2022.12.20
            </Typography>
          </TitleBox>
        }
        contentBox={
          <ContentBox>
            <SliderWidget>
              <Section title='2022년 조회수가 가장 높은 요일은?' subtitle='2022 팔만코딩경 리포트'>
                <BarGraphWidget items={Weekday} direction='bottom-to-top' maxBarHeight={500} selectedKey='월' />
                <Typography display='inline' align='center' fontWeight={700} fontSize='1.1rem'>
                  우리는{' '}
                  <Typography display='inline' color='#00dc64' fontWeight={700} fontSize='1.1rem'>
                    월요일
                  </Typography>
                  에 주로 만났어요
                </Typography>
              </Section>
              <Section title='올해 팔만코딩경을 방문한 유저수는?' subtitle='2022 팔만코딩경 리포트'>
                <CountUpWidget from={65000} to={70000}></CountUpWidget>
                <Typography display='inline' align='center' fontWeight={700} fontSize='1.1rem'>
                  매주
                  <Typography display='inline' color='#00dc64' fontWeight={800} fontSize='1.1rem' fontFamily='Nanum Gothic'>
                    2,358
                  </Typography>
                  명의 개발자가 방문했어요
                </Typography>
              </Section>
              <Section title='올해 가장 많이 사용된 태그는?' subtitle='2022 팔만코딩경 리포트'>
                <BarGraphWidget items={Tags} direction='left-to-right' maxBarHeight={90} sort='desc' selectedKey='C' />
                <Typography display='inline' align='center' fontWeight={700} fontSize='1.1rem'>
                  <Typography display='inline' color='#00dc64' fontWeight={800} fontSize='1.1rem' fontFamily='Nanum Gothic'>
                    86
                  </Typography>
                  개의 게시글에서 사용되었어요
                </Typography>
              </Section>
            </SliderWidget>
            <SliderWidget>
              <Section
                title='가장 많은 조회수를 기록한 포스팅은?'
                subtitle='2022년에 사랑받은 포스팅'
                image='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566899596/noticon/slhw4nu8hybreryigopq.png'
              >
                <Typography display='inline' align='center' fontWeight={700} fontSize='1.1rem'>
                  깃허브 프로필 꾸미기
                </Typography>
                <Typography display='inline' align='center' fontWeight={700} fontSize='1.1rem'>
                  <Typography display='inline' color='#00dc64' fontWeight={800} fontSize='1.1rem' fontFamily='Nanum Gothic'>
                    14,952
                  </Typography>
                  명에게 사랑받았어요
                </Typography>
              </Section>
              <Section title='가장 많은 좋아요를 받은 게시글은?' subtitle='2022년에 사랑받은 포스팅'>
                <CountUpWidget from={0} to={9}></CountUpWidget>
                <Typography display='inline' align='center' fontWeight={700} fontSize='1.1rem'>
                  <Typography color='#00dc64' fontWeight={800} fontSize='1.1rem' fontFamily='Nanum Gothic'>
                    Makefile, make 기초,
                  </Typography>
                  <Typography color='#00dc64' fontWeight={800} fontSize='1.1rem' fontFamily='Nanum Gothic'>
                    Vector Space 벡터공간
                  </Typography>
                  가장 많은 좋아요를 받았어요
                </Typography>
              </Section>
              <Section
                title='가장 많은 댓글이 달린 게시글은?'
                subtitle='2022년에 사랑받은 포스팅'
                image='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/325/ninja_1f977.png'
              >
                <Typography display='inline' align='center' fontWeight={700} fontSize='1.1rem'>
                  닌자 코드
                </Typography>
                <Typography display='inline' align='center' fontWeight={700} fontSize='1.1rem'>
                  <Typography display='inline' color='#00dc64' fontWeight={800} fontSize='1.1rem' fontFamily='Nanum Gothic'>
                    6
                  </Typography>
                  개의 댓글이 달렸어요
                </Typography>
              </Section>
            </SliderWidget>
            <SliderWidget>
              <Section
                title='2022년 가장 많은 글을 작성한 카뎃은?'
                subtitle='팔만코딩경 컨트리뷰터 리포트'
                image='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/woman-raising-hand_1f64b-200d-2640-fe0f.png'
              >
                <Typography display='inline' align='center' fontWeight={800} fontSize='1.3rem' fontFamily='Nanum Gothic'>
                  jmaing
                </Typography>
                <Typography display='inline' align='center' fontWeight={700} fontSize='1.1rem'>
                  올해{' '}
                  <Typography display='inline' color='#00dc64' fontWeight={800} fontSize='1.1rem' fontFamily='Nanum Gothic'>
                    29
                  </Typography>
                  개의 글을 작성했어요
                </Typography>
              </Section>
              <Section
                title='한달안에 가장 많은 글을 작성한 카뎃은?'
                subtitle='팔만코딩경 컨트리뷰터 리포트'
                image='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/325/alien-monster_1f47e.png'
              >
                <Typography display='inline' align='center' fontWeight={800} fontSize='1.3rem' fontFamily='Nanum Gothic'>
                  jongpark
                </Typography>
                <Typography display='inline' align='center' fontWeight={700} fontSize='1.1rem'>
                  6월에만{' '}
                  <Typography display='inline' color='#00dc64' fontWeight={800} fontSize='1.1rem' fontFamily='Nanum Gothic'>
                    10
                  </Typography>
                  개의 글을 작성했어요
                </Typography>
              </Section>
              <Section
                title='2022년 첫 글을 작성한 카뎃은?'
                subtitle='팔만코딩경 컨트리뷰터 리포트'
                image='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/325/national-park_1f3de-fe0f.png'
              >
                <Typography display='inline' align='center' fontWeight={800} fontSize='1.3rem' fontFamily='Nanum Gothic'>
                  mypark
                </Typography>
                <Typography display='inline' align='center' fontWeight={700} fontSize='1.1rem'>
                  <Typography display='inline' color='#00dc64' fontWeight={800} fontSize='1.1rem' fontFamily='Nanum Gothic'>
                    1월 2일
                  </Typography>
                  에 첫 글이 올라왔어요
                </Typography>
              </Section>
            </SliderWidget>
          </ContentBox>
        }
        footerBox={
          <FooterBox>
            <Typography display='inline' color='#00dc64' fontWeight={800} fontSize='1.5rem' fontFamily='Nanum Gothic'>
              팔만코딩경
            </Typography>
            <Typography
              display='inline'
              align='center'
              fontWeight={700}
              fontSize='1.5rem'
              color='#fdfdfd'
              fontFamily='Nanum Gothic'
              margin='0 0 20px 0'
            >
              추천 게시글 보러가기
            </Typography>
            <PostHrefWidget
              url='https://80000coding.oopy.io/865f4b2a-5198-49e8-a173-0f893a4fed45'
              icon='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567062204/noticon/ttan57gjenhvcrfq10yo.png'
              text='깃허브 프로필 꾸미기'
              contributor='suhshin'
            />
            <PostHrefWidget
              url='https://80000coding.oopy.io/6172b586-8056-4cb1-8c4f-2179009aef3f'
              icon='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/325/ewe_1f411.png'
              text='Makefile, make 기초'
              contributor='jmaing'
            />
            <PostHrefWidget
              url='https://80000coding.oopy.io/4a76a7bd-a828-49cb-b290-a0a196eb4591'
              icon='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/325/ninja_1f977.png'
              text='닌자코드'
              contributor='sangtale'
            />
            <PostHrefWidget
              url='https://80000coding.oopy.io/50a53b79-eb40-4a31-be99-9cbcca93a4da'
              icon='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/325/new-moon_1f311.png'
              text='42 과제 정리용 노션 탬플릿'
              contributor='jijeong'
            />
            <PostHrefWidget
              url='https://80000coding.oopy.io/2287b35b-a164-4ade-8d80-15559f00fbe8'
              icon='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/325/memo_1f4dd.png'
              text='man'
              contributor='minjungk'
            />
            <PostHrefWidget
              url='https://80000coding.oopy.io/d5d36b7d-b605-4d1f-b2d9-ad0ddd8f1ff9'
              icon='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629987802/noticon/qxvhd6gnagplyp6crw33.png'
              text='VSCode 파일 확장자로 정렬하기
'
              contributor='dha'
            />
            <Typography
              display='inline'
              align='center'
              fontWeight={700}
              fontSize='0.8rem'
              color='#7b7b7b'
              fontFamily='Nanum Gothic'
              padding='40px 0'
            >
              @2022 팔만코딩경
            </Typography>
          </FooterBox>
        }
      />
      <Analytics />
    </>
  );
}

export default App;

interface TitleBoxProps {
  themes?: Themes;
  children?: React.ReactNode;
}

const TitleBox = ({ themes, children }: TitleBoxProps) => {
  const theme = useTheme();
  return (
    <TitleContainer bg={theme.titleBox[themes ?? 'default'].bg} fg={theme.titleBox[themes ?? 'default'].fg}>
      {children}
    </TitleContainer>
  );
};

interface ContentBoxProps {
  themes?: Themes;
  children?: React.ReactNode;
}

const ContentBox = ({ themes, children }: ContentBoxProps) => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '375px',
        height: '100%',
        gap: '60px',
        background: theme.contentBox[themes ?? 'default'].bg,
        color: theme.contentBox[themes ?? 'default'].fg,
        padding: '20px 10px !important',
      }}
    >
      {children}
    </Container>
  );
};

interface FooterBoxProps {
  themes?: Themes;
  children?: React.ReactNode;
}

const FooterBox = ({ themes, children }: FooterBoxProps) => {
  const theme = useTheme();
  return (
    <FooterContainer bg={theme.titleBox[themes ?? 'default'].bg} fg={theme.titleBox[themes ?? 'default'].fg}>
      {children}
    </FooterContainer>
  );
};

interface BoxProps {
  theme?: Themes;
  titleBox: React.ReactNode;
  contentBox: React.ReactNode;
  footerBox: React.ReactNode;
}

const Box = ({ titleBox, contentBox, footerBox }: BoxProps) => {
  const theme = useTheme();
  return (
    <Container
      className='App'
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: '0',
        margin: '0',
        maxWidth: '100% !important',
        background: theme.box.default.bg,
      }}
    >
      <div style={{ maxWidth: '600px' }}>
        {titleBox}
        {contentBox}
        {footerBox}
      </div>
    </Container>
  );
};

const TitleContainer = styled.div<{ bg?: string; fg?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 375px;
  margin: auto;
  margin-top: 50px;

  color: ${(props) => props.fg ?? 'black'};

  &&::before {
    position: absolute;
    width: 100%;
    content: '';
    height: 400px;
    background: url('https://ssl.pstatic.net/static/m/comic/im/bg_pc.png') no-repeat top, linear-gradient(0deg, #170a62, #000) no-repeat top;
    background-size: 1280px 490px, 100% 100%;
  }

  & > * {
    z-index: 100;
  }
  .grad {
    background: linear-gradient(to right, #00dc64, #52cce3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const FooterContainer = styled.div<{ bg?: string; fg?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 375px;
  height: auto;
  margin: auto;
  margin-top: 50px;
  padding-top: 50px;

  color: ${(props) => props.fg ?? 'black'};

  &&::before {
    position: absolute;
    width: 100%;
    content: '';
    height: 740px;
    bottom: 0;
    background: #000143;
    background-size: 1280px 490px, 100% 100%;
  }

  & > * {
    z-index: 100;
  }
`;
