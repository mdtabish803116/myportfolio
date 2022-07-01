import React from "react";
import Styled from "styled-components";
import {Github , Linkedin } from "./Icon";
import Aos from "aos";
import "aos/dist/aos.css";

const StyledDiv = Styled.div`
width : 90%;
margin : auto;
display : flex;
justify-content : space-around;
margin-top : 120px;
margin-bottom : 200px;

@media (max-width : 450px) {
    width : 95%;
    display : flex;
    flex-direction : column-reverse;

}

&>div:nth-child(1){
    width : 45%;
    
    @media (max-width : 450px) {
         width : 80%;
         margin : auto;
       
    }
}

&>div:nth-child(2){
    padding-top : 50px;
       width : 40%;
    text-align : center;

    @media (max-width : 450px) {
        width : 80%;
        margin : auto;
   }
}`

const StyledP = Styled.p`
font-size : 50px;
font-family : sans-serif;
font-weight : 800;
line-height : 70px;

@media (max-width : 450px) {
    font-size : 30px;
    line-height : 40px;
}
`
const ResumeA = Styled.a`
       background : #78C7C7;
       padding : 10px 20px;
       text-align : center;
       border-radius : 10px;
       cursor : pointer;
       color : #36013F;
       text-decoration : none;
     

       &:hover{
           color : #36013F;
           border : 2px solid #78C7C7;
           background : #FFFFFF;
           transition : background 0.5s 
       }`

const IconDiv = Styled.div`
      display : flex;
    gap : 30px;
    margin-top : 30px;

    &>a>*{
        color : black;
    }

    &>a>*:hover{
        color : #78C7C7;
    }

`

const Home = () => {
    React.useEffect(() => {
          Aos.init({
              duration : 2000
          })
    } , []);
    
    return(
          <StyledDiv id = "home">
                <div >
                     <StyledP data-aos = "fade-right">
                       Hi 👋,
                       <br></br>
                       I'am <span style = {{ 
                          color : "#78C7C7",
                         
                       }}>Md Tabish</span>
                       <br></br>
                       Full Stack Web Developer
                       </StyledP>
                     <ResumeA data-aos = "fade-down" href = "https://drive.google.com/file/d/1Jal1-HGd3GFvyKxuicBAY5JCCiuyvG_s/view?usp=sharing" target = "_blank" title = "Resume" rel="noopener noreferrer" >RESUME</ResumeA>
                      
                        <IconDiv data-aos = "fade-right">
                    
                               <a href = "https://www.linkedin.com/in/md-tabish-3099a4213" target = "_blank" title = "Linkedin" rel="noopener noreferrer" > <Linkedin className = "linkedin"/></a>
                                <a href = "https://github.com/mdtabish803116" target = "_blank" title = "Github" rel="noopener noreferrer" > <Github /> </a>
                        </IconDiv>
                      
                </div>
                <div>
                       <img alt = "profilePic" src = {"picture.webp"} width = "100%" style = {{
                           borderRadius :"80%" 
                       }}/>
                </div>
          </StyledDiv>
    )
}

export {Home};