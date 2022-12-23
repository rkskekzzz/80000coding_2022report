import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

interface PostHrefWidgetProps {
  url: string;
  icon: string;
  text: string;
  contributor: string;
}

const PostHrefWidget = ({ url, icon, text, contributor }: PostHrefWidgetProps) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };
  return (
    <Container onClick={handleClick}>
      <img className='icon' src={icon} alt='icon' />
      <div className='text-box'>
        <Typography display='inline' align='center' fontWeight={700} fontSize='1.1rem'>
          {text}
        </Typography>
        <Typography display='inline' align='center' fontWeight={700} fontSize='0.6rem' color='#ababab'>
          @{contributor}
        </Typography>
      </div>
    </Container>
  );
};

export default PostHrefWidget;

const Container = styled.div`
  width: 345px;
  margin: 10px 100px;
  padding: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 20px;

  border-radius: 15px;
  border: 1px solid #b9c6ff;

  cursor: pointer;

  .icon {
    width: 30px;
    height: 30px;
  }

  &&:hover {
    background: #170a62;
  }

  .text-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
