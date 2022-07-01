import Styled from "styled-components";
import {Github , Linkedin , Email , Telephone} from "./Icon";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const StyledDiv = Styled.div`
      background : rgba(0 , 0 , 0 , 0.8);
      margin-top : 80px;
      color : white;
      font-size : 18px;
      padding-bottom : 100px;
      


      &>div{
          width : 40%;
          margin : auto;
          margin-left : 40%;
          padding-top : 40px;


          @media (max-width : 600px){
            width : 80%;
            margin : auto;
            margin-left : 10%;
       }

       @media (max-width : 450px){
         width : 98%;
         margin : auto;
         margin-left : 10%;
         font-size : 14px;
    }
      }
        &>div>div{
           display : flex;
           gap : 20px;
           height : 40px;
           align-items : center;
        }`

const StyledP = Styled.p`
  width : 40%;
  margin : auto;
  text-align : center;
  font-size : 30px;
  color : #78C7C7;
  margin-bottom : 50px;
  padding-top: 50px;
  border-bottom : 3px solid #78C7C7;
  padding-bottom : 10px;
  fontWeight : "bold",
  fontFamily : "sans-serif";

  @media (max-width : 600px){
   width : 80%;
   margin : auto;
   font-size : 20px;
  
 
}
`

const StyledA = Styled.a`
   color : white;
   text-decoration : none;
   
   &:hover{
      color : #78C7C7;
   }
`

const StyledIconA = Styled.a`
    &>*:hover{
        color : white;
    }
`

const Contact = () => {
   React.useEffect(() => {
      Aos.init({
          duration : 1000
      })
} , []);
     return( 
   
       <StyledDiv id = "contact">
                 <StyledP>GET IN TOUCH</StyledP>
                  <div>
                       <div data-aos = "fade-down">
                       <StyledIconA href = "#"><Telephone /></StyledIconA>
                              <StyledA href = "#">6200337842</StyledA>
                       </div>   
                       <div data-aos = "fade-down">
                              <StyledIconA href = "#"><Email /></StyledIconA>
                              <StyledA href = "#">mdtabish803116@gmail.com</StyledA>
                       </div>
                       <div data-aos = "fade-down">
                           
                               <StyledIconA href = "https://github.com/mdtabish803116" target = "_blank" title = "Github" rel="noopener noreferrer" ><Github /></StyledIconA>
                               <StyledA href = "https://github.com/mdtabish803116" target = "_blank" title = "Github" rel="noopener noreferrer" >https://github.com/mdtabish803116</StyledA>
                            
                       </div>
                          
                            <div data-aos = "fade-down">
                              <StyledIconA href = "https://www.linkedin.com/in/md-tabish-3099a4213" target = "_blank" title = "Linkedin" rel="noopener noreferrer"  ><Linkedin /></StyledIconA>
                               <StyledA href = "https://www.linkedin.com/in/md-tabish-3099a4213" target = "_blank" title = "Linkedin" rel="noopener noreferrer" >www.linkedin.com/in/md-tabish-3099a4213</StyledA>
                            </div>

                  </div>
        </StyledDiv>

     )
}

export {Contact};