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
              2023
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
              결산 기간 : 2023.01.01 ~ 2023.12.30
            </Typography>
          </TitleBox>
        }
        contentBox={
          <ContentBox>
            <SliderWidget>
              <Section title='2023년 조회수가 가장 높은 요일은?' subtitle='2023 팔만코딩경 리포트'>
                <BarGraphWidget items={Weekday} direction='bottom-to-top' maxBarHeight={2800} selectedKey='화' />
                <Typography display='inline' align='center' fontWeight={700} fontSize='1.1rem'>
                  우리는{' '}
                  <Typography display='inline' color='#00dc64' fontWeight={700} fontSize='1.1rem'>
                    화요일
                  </Typography>
                  에 주로 만났어요
                </Typography>
              </Section>
              <Section title='올해 팔만코딩경을 방문한 유저수는?' subtitle='2023 팔만코딩경 리포트'>
                <CountUpWidget from={270000} to={272303}></CountUpWidget>
                <Typography display='inline' align='center' fontWeight={700} fontSize='1.1rem'>
                  매주
                  <Typography display='inline' color='#00dc64' fontWeight={800} fontSize='1.1rem' fontFamily='Nanum Gothic'>
                    9,703
                  </Typography>
                  명의 개발자가 방문했어요
                </Typography>
              </Section>
              <Section title='올해 가장 많이 사용된 태그는?' subtitle='2023 팔만코딩경 리포트'>
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
                title='가장 많은 조회수를 기록한 게시글은?'
                subtitle='2023년에 사랑받은 포스팅'
                image='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640252674/noticon/dopqkq9e3wr0tawpfer1.png'
              >
                <Typography display='inline' align='center' fontWeight={700} fontSize='1.1rem'>
                  m1, m2 Mac 에서 VMware를 통해 Ubuntu 설치
                </Typography>
                <Typography display='inline' align='center' fontWeight={700} fontSize='1.1rem'>
                  <Typography display='inline' color='#00dc64' fontWeight={800} fontSize='1.1rem' fontFamily='Nanum Gothic'>
                    4,994
                  </Typography>
                  명에게 사랑받았어요
                </Typography>
              </Section>
              <Section title='가장 제목이 긴 게시글은?' subtitle='2023년에 사랑받은 포스팅'>
                <CountUpWidget from={50} to={86}></CountUpWidget>
                <Typography display='inline' align='center' fontWeight={700} fontSize='1.1rem'>
                  <Typography color='#00dc64' fontWeight={800} fontSize='1.1rem' fontFamily='Nanum Gothic'>
                    Android 기술 면접 확인하세요.
                  </Typography>
                  <Typography color='#00dc64' fontWeight={800} fontSize='1.1rem' fontFamily='Nanum Gothic'>
                    livedata, rxjava, context, ...
                  </Typography>
                  제목이 86글자로 가장 길어요
                </Typography>
              </Section>
              <Section
                title='가장 많은 댓글이 달린 게시글은?'
                subtitle='2023년에 사랑받은 포스팅'
                image='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567061412/noticon/lzcrj8bbwgu55lddwiz6.png'
              >
                <Typography display='inline' align='center' fontWeight={700} fontSize='1.1rem'>
                  DB구현에서 왜 Memory Mapped File을 안쓸까
                </Typography>
                <Typography display='inline' align='center' fontWeight={700} fontSize='1.1rem'>
                  <Typography display='inline' color='#00dc64' fontWeight={800} fontSize='1.1rem' fontFamily='Nanum Gothic'>
                    4
                  </Typography>
                  개의 댓글이 달렸어요
                </Typography>
              </Section>
            </SliderWidget>
            <SliderWidget>
              <Section
                title='2023년 가장 많은 글을 작성한 카뎃은?'
                subtitle='팔만코딩경 컨트리뷰터 리포트'
                image='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa3142117-ced3-4af6-b0e6-89572dc4d87e%2Fthinking_ccabi_3.jpg?table=block&id=6faeb271-e7a9-4b86-bd67-b79093eaee72&spaceId=cae37dae-7359-4f13-a5be-ae07fb235a1b&width=60&userId=524f5aad-2f50-43a7-9a63-8155e4f78bbf&cache=v2'
              >
                <Typography display='inline' align='center' fontWeight={800} fontSize='1.3rem' fontFamily='Nanum Gothic'>
                  sanan
                </Typography>
                <Typography display='inline' align='center' fontWeight={700} fontSize='1.1rem'>
                  올해{' '}
                  <Typography display='inline' color='#00dc64' fontWeight={800} fontSize='1.1rem' fontFamily='Nanum Gothic'>
                    22
                  </Typography>
                  개의 글을 작성했어요
                </Typography>
              </Section>
              <Section
                title='이날의 게시글에 가장 많이 올라간 카뎃은?'
                subtitle='팔만코딩경 컨트리뷰터 리포트'
                image='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1580888106/noticon/owcvyw4dggdylen2ql5w.gif'
              >
                <Typography display='inline' align='center' fontWeight={800} fontSize='1.3rem' fontFamily='Nanum Gothic'>
                  hyunjunk & sanan
                </Typography>
                <Typography display='inline' align='center' fontWeight={700} fontSize='1.1rem'>
                  이날의 게시글에 총{' '}
                  <Typography display='inline' color='#00dc64' fontWeight={800} fontSize='1.1rem' fontFamily='Nanum Gothic'>
                    14
                  </Typography>
                  개의 글이 선정되었어요
                </Typography>
              </Section>
              <Section
                title='2023년 첫 글을 작성한 카뎃은?'
                subtitle='팔만코딩경 컨트리뷰터 리포트'
                image='https://emojigraph.org/media/apple/bear_1f43b.png'
              >
                <Typography display='inline' align='center' fontWeight={800} fontSize='1.3rem' fontFamily='Nanum Gothic'>
                  sunhkim
                </Typography>
                <Typography display='inline' align='center' fontWeight={700} fontSize='1.1rem'>
                  <Typography display='inline' color='#00dc64' fontWeight={800} fontSize='1.1rem' fontFamily='Nanum Gothic'>
                    1월 3일
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
              url='https://80000coding.oopy.io/6020ebc8-6a2c-468e-9440-a5686272a925'
              icon='https://emojigraph.org/media/apple/boomerang_1fa83.png'
              text='m1, m2 Mac 에서 VMware를 통해 Ubuntu 설치'
              contributor='isunwoo'
            />
            <PostHrefWidget
              url='https://80000coding.oopy.io/f6cc395b-b783-4e8f-9a11-7a7172a15bc6'
              icon='https://emojigraph.org/media/apple/carrot_1f955.png'
              text='DB구현에서 왜 Memory Mapped File을 안쓸까'
              contributor='hyunjunk'
            />
            <PostHrefWidget
              url='https://80000coding.oopy.io/ea28527e-3592-49d1-a3fa-91af87374b4e'
              icon='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566919057/noticon/j8sgrekdjixmpgdd7l9b.png'
              text='Android 기술 면접 확인하세요. livedata, rxjava, context, postvalue, setvalue, minsdk, targetsdk'
              contributor='seunpark'
            />
            <PostHrefWidget
              url='https://80000coding.oopy.io/5081432a-b569-4f87-8bbc-8db44a2ab596'
              icon='https://emojigraph.org/media/apple/chess-pawn_265f-fe0f.png'
              text='참조변수와 포인터는 같은 것일까'
              contributor='shikim'
            />
            <PostHrefWidget
              url='https://80000coding.oopy.io/4b0d99e3-d5e8-4d6e-a484-9edfb3275974'
              icon='https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fcae37dae-7359-4f13-a5be-ae07fb235a1b%2F0e4bb680-230b-4690-b20f-1634c6963589%2Fsmall42.png?table=block&id=4b0d99e3-d5e8-4d6e-a484-9edfb3275974&spaceId=cae37dae-7359-4f13-a5be-ae07fb235a1b&width=250&userId=524f5aad-2f50-43a7-9a63-8155e4f78bbf&cache=v2'
              text='슬기로운 42생활을 위한 팁'
              contributor='cheseo'
            />
            <PostHrefWidget
              url='https://80000coding.oopy.io/926ddbd8-6b33-4c34-8fcb-b8645ec95018'
              icon='https://emojigraph.org/media/apple/sparkles_2728.png'
              text='42 Common Core 암호문 해독 입문'
              contributor='haeem'
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
              @2023 팔만코딩경
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
