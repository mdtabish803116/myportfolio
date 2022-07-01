import Styled from "styled-components";
import {Link} from "react-scroll";
import React from "react";
import { Hamburger } from './Icon.jsx';
import {SideBarData} from "./SideBarData.jsx";


const StyledDiv = Styled.div`
   position : fixed ;
   height : 70px;
   top : 0;
   z-index : 4;
   background-color : rgba(0 , 0 , 0, 0.8);
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   width : 100%;
    display : flex;
    align-items : center;
    justify-content : space-around;
   

   
    &>div:first-child{
         width : 30%;
  
    }

    &>div:nth-child(2){
        width : 50%;
        display : flex;
        font-size : 18px;
        font-weight : 400;
        font-family : sans-serif;

        @media (max-width : 765px) {
            display : none;
        }
  
     }

     &>div:nth-child(2)>div{
         width : 30%;
     }`

const StyledLink = Styled(Link)`
  cursor : pointer;
  padding-bottom : 5px;
   color : #FFFFFF;


  &.active{
    border-bottom : 4px solid #78C7C7;
  }

  &:hover{
    border-bottom : 4px solid white;
  }`

  const HamburgerDiv = Styled.div`
           
     @media (min-width: 768px){
        display : none;
     }
  `

const Navbar = () => {

  const [click , setClick] = React.useState(false);

  const handleClick = () => {
       setClick(!click)
  }
  
  return( 
    <>
  <StyledDiv>
       
               <div>
               <StyledLink to="/">
                     <img src = {"logoT1.png"} alt = "logo" width = "40px"/>
               </StyledLink>
               </div>
               <div>
               <div>
               <StyledLink to="home" spy = {true} smooth = {true} offset = {-200} duration = {500}>Home</StyledLink>
               </div>
              <div>
                <StyledLink to="about" spy = {true} smooth = {true} offset = {-200} duration = {500}>About</StyledLink>
              </div>
               <div>
                  <StyledLink to="skill" spy = {true} smooth = {true} offset = {-100} duration = {500}>Skills</StyledLink>
               </div>
               <div>
               <StyledLink to="project"  spy = {true} smooth = {true} offset = {-200} duration = {500}>Projects</StyledLink>
               </div>
               <div>
               <StyledLink to="contact" spy = {true} smooth = {true} offset = {-40} duration = {1000}>Contact</StyledLink>
               </div>
            </div>

            <HamburgerDiv onClick = {handleClick}>
                 <Hamburger />
            </HamburgerDiv>
            
  </StyledDiv>
      
        <SideBarData handleClick = {handleClick}
           click = {click}/>
    </>
  )
}

export {Navbar};