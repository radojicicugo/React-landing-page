import React, {useState, useEffect} from 'react';
import { Container, Box, Typography, IconButton, AppBar } from '@material-ui/core';
import './Home.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"
import { display } from '@mui/system';
import About from '../about/About';



const Title = styled.h1`
 font-family: "Times New Roman", Times, serif;
display: flex;
justify-content: center;
margin: 0, auto;
padding: 20px;
color: white;
`
const Wrapper = styled.div`
display: flex;
justify-content: center;

`


function Home(props) {

   const [add, setAdd] = useState("")

    return (
     <Container>
             <Box id="box1">
             </Box>
         <Box id="box">
         <Typography>
             <Title><strong id="h">artificial intelligence</strong></Title>
             <Wrapper onClick={() => setAdd(!add)} >
              {add && <About/>} 
             <IconButton>
               <FontAwesomeIcon className={'font-awesome'} icon={faAngleDoubleDown} />
             </IconButton>
             </Wrapper>
         </Typography> 
         </Box>
     </Container>
    );
}

export default Home;