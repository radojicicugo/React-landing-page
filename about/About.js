
import React from 'react';
import styled from 'styled-components';
import { Box, Container, Typography, IconButton, AppBar } from '@material-ui/core'


const WrapperBox = styled.div`
  display: flex;
  padding: 8px;
  background-image: url("https://media.istockphoto.com/photos/deep-learning-artificial-intelligence-background-picture-id1310293181?s=2048x2048");
  width: 70%;
  height:100%;
  `
const Title = styled.h1`
 font-size: 41px;
 text-align: center;
 color: white;
 
`

function About(props) {


    return (
        <Container>
          <WrapperBox className={'wrapperBox1'}>
            <Typography>
                <Title>New Product's :)</Title>
            </Typography>
          </WrapperBox>
        </Container>
    );
}

export default About;