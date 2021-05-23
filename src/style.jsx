import { css } from '@emotion/react'
import titillium from './assets/TitilliumWeb-Regular.ttf'

const primaryColor = 'rgba(255, 255, 255)'
const primaryHover = 'rgba(220, 220, 220)'
const secondaryColor = '#0eaf18'
const secondaryHover = '#3ebf46'
const tertiaryColor = '#D9DDDC'
const tertiaryHover = '#D6CFC7'
const titleSize = "25px";
const normalTextSize = "20px";
const smallTextSize = "15px";

export const global = css`
@font-face {
  font-family: 'Titillium';
  src: url(${titillium});
}

@keyframes spin {
  0% {
      transform:rotate(0deg);
  }
  50% {
      transform:rotate(360deg);
  }
  100%{
    transform:rotate(0deg);
  }
}

* {
  font-family: Titillium;
}

a{
  text-decoration: none;
  color: black;
}

.margin-5px{
  margin: 5px;
}

.margin-10px{
  margin:10px;
}

.flex{
  display: flex;
}

button{
  margin: 10px;
  padding: 5px 10px;
  transition: 0.5s all;
  font-size: ${normalTextSize};
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 8px 8px ${tertiaryColor};
  background-color: ${secondaryColor};
  &:hover{
    background-color: ${secondaryHover};
    box-shadow: 4px 4px ${tertiaryColor};
  }
  &:active{
    box-shadow: 2px 2px black;
  }
}

.flex-center{
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-center-column{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flex-center-responsive{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  *{
    margin:10px;
  }

  #trainer-big{
    width: 50%;
  }
  
  @media(min-width:720px){
    flex-direction: row;
    
    #trainer-big{
      width: auto;
      height: 80vh;
    }
  }



}

.flex-evenly{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

input{
  margin: 5px 0;
  font-size: ${normalTextSize};
  border:none;
  border-bottom: 2px solid black;
  text-align: center;
}&:focus{
  outline: none;
}

`

export const navbar = css`
display: flex;
justify-content: space-evenly;
align-items: center;
padding: 5px 0;
background-color: ${secondaryColor};
color: ${primaryColor};
font-size: ${normalTextSize};

@media(min-width:1024px){
  padding: 15px 0;
  font-size: ${titleSize};
}
`
export const page = css`
padding: 20px;
position: relative;
font-size: ${normalTextSize};

b{
  font-size: ${titleSize};
}

svg{
  margin: 0 5px;
}

@media(min-width: 1024px){
  padding: 20px 15vw;
}
`

export const navbarLogo = css`
height: 50px;
cursor: pointer;
margin: 0 20px;
`
export const navbarLink = css`
display:flex;
flex-direction: column;
justify-column: center;
align-items: center;
font-size: ${titleSize};
margin: 0 20px;
cursor: pointer;
color: ${primaryColor};
opacity: 0.7;
transition: 0.2s all;

img{
  height:30px;
}

div{
  font-size: ${normalTextSize};
}


&:hover{
  opacity: 1;
}

@media(min-width:720px){
  
  img{
    height:50px;
  }
  
  div{
    font-size: ${titleSize};
  }
}

`
export const flexContainer = css`
display: flex;
align-item: center;
flex-direction: column;
overflow: auto;
height: 100vh;
width:100%;
margin: 10px 0;


@media(min-width: 1024px){
  height: 70vh;
  flex-direction: row;
  padding: 0;
  justify-content: center;
  flex-wrap: wrap;

  &::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
    border: 2px solid ${tertiaryColor}; 
  }
   
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: ${tertiaryColor};
    border-radius: 10px;
    transition: 0.3s all;
  
    &:hover{
      background: ${secondaryColor};
    }
  }
}
`

export const PokemonFragment = css`
position: relative;
border-radius: 10px;
margin: 20px;
font-size: 1.2em;
display:flex;
box-shadow: 2px 2px 5px 1px ${tertiaryColor};
height: fit-content;
flex-direction: column;
justify-content:center;
align-items: center;

.hover-div{
  display: flex;
  position:absolute;
  border-radius: 10px;
  opacity:0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  background: ${primaryHover};
  transition: all 0.2s ease-in-out;
}

.hover-div img{
  margin: 15px 0 0 0;
  height: 80px;
  width: 80px;
}


b{
  margin: 0;
}

img{
  margin: 15px 0 0 0;
  height: 150px;
  width: 150px;
}
.owned{
  margin: 5px 0;
}


&:hover{
  .hover-div{
    opacity: 0.8;
    border: 2px solid ${secondaryColor};
  }
}

&:active{
  .hover-div{
    background-color: rgb(25, 25, 25);
  }
}

@media(min-width:1024px){
  margin: 20px;
  width: 25%;
}
`
export const detail = css`

display:flex;
flex-direction:column;
justify-content: center;

.pokemon-img{
  filter: drop-shadow(0 0 0.4rem ${secondaryHover});
  height: 80%;
  width: 80%;
}

@media(min-width:1024px){
  flex-direction:row;

  &>div{
    min-width: 25%;
    margin: 0 10px;
  }

  .pokemon-img{
    height: 250px;
    width: 250px;
  }
}

`
export const elementContainer = css`
display: flex;
justify-content: center;
align-items: center;
margin: 10px 0;

div{
  min-width: 100px;
  margin: 0 10px;
  padding: 0 5px;
  border: 2px solid ${secondaryColor};
  border-radius: 5px;
}
`

export const detailContainer = css`
  display: flex;
  padding: 10px 0;
  flex-direction: column;
  background-image: linear-gradient(${secondaryHover} , ${secondaryColor});
  border: 1px solid ${secondaryColor};
  border-radius: 10px;
  margin: 5px 0;
  width:100%;
  flex-grow: 1;

  td{
    text-align:center;
  }

  @media(min-width:1024px){
    margin: 5px 0 0 0;
    flex-grow = 1;
  }
  `

export const moveContainer = css`
  display: flex;
  padding: 10px 0;
  flex-direction: column;
  background-image: linear-gradient(${tertiaryColor}, ${tertiaryHover});
  border: 1px solid ${tertiaryColor};
  border-radius: 10px;
  margin: 5px 0;

  .moveListContainer{
    display: flex;
    flex-wrap: wrap;
    font-size: ${smallTextSize}
  }

  .moveListContainer li{
    margin:0 5px;
    text-align: left;
    width:45%;
  }
  
  @media(min-width:1024px){

    margin: 5px 20px;

    .moveListContainer li{
      width: 23%;
    }
  }
  `

export const catchButtonPhone = css`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin: 10px 10px 0 0;
    position:absolute;
    right: 0;
    top: 0;

    img{
      cursor: pointer;
      width:50px;
      height:50px;
    }

    @media(min-width:1024px){
      display:none;
    }
`
export const catchButtonDesktop = css`
  display:none;
  background-image: linear-gradient(40deg, rgb(155, 0, 0), rgb(255, 0, 0));
  border-radius: 10px;
  max-width: 100%;
  width: 100%;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.2s all;
  box-shadow: 2px 2px rgb(100, 100, 100);

  &>*{
    margin: 5px 10px;
  }

  img{
    width:50px;
    height:50px;
    margin-right: -20%;
    z-index: 2;
    transition: 0.5s all;
  }

  b{
    opacity: 0;
    margin-left: 0;
    transition: 0.5s all;
  }

  &:hover{
    img{
      margin-right: 10px;
      animation: spin 5s infinite;
    }
    
    b{
      margin-left: -5px; 
      opacity: 1;
    }

    box-shadow: 3px 3px rgb(100, 100, 100);
  }

  &:active{
    box-shadow: 1px 1px rgb(10, 10, 10)
  }

  @media(min-width:1024px){
    display: flex;
    justify-content: center;
    align-items: center; 
  }
`

export const alternateImgContainer = css`
margin: 10px 0;
padding: 5px;

&> .flex{
  flex-direction: column;
}

.flex > div{
  margin: 10px 0;
}

img{
  border-radius: 10px;
  box-shadow: 2px 2px 6px 2px ${tertiaryColor};
  width: 100%;
}

@media(min-width: 1024px){
  
  &> .flex{
    margin: 10px 0;
    flex-direction: row;
    justify-content: center;
  }

  .flex> div{
    margin: 0 10px;
  }

  img{
    width: 300px;
    height: 300px;
  }
}
`

export const loadingPokeball = css`
height: 25px;
width: 25px;
animation: spin 2s infinite;
`
export const alert = css`
display: flex;
align-items: center;
justify-content: space-between;
padding: 15px 0;
margin: 10px;
border-radius: 5px;

*{
  margin: 0 20px;
}

svg{
  cursor: pointer;
}

`

export const pokemonNameField= css`
width: 100%;
margin: 10px 0;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;

input{
  margin: 5px 0;
  font-size: ${normalTextSize};
  border:none;
  border-bottom: 2px solid black;
  text-align: center;
}

input:focus{
  outline: none;
}

.input-right:focus{
  border-bottom: 2px solid ${secondaryColor};
}

.input-wrong:focus{
  border-bottom: 2px solid rgba(255, 0, 0);
}

svg{
  border: 3px solid black;
  border-radius: 50%;
}

.button{
  display:flex;
  align-items: center;
  justify-content: center;
  font-size: ${normalTextSize};
  margin-top: 5px;
  margin-bottom: 10px;
  width: fit-content;
  background-color: transparent;
  padding: 5px 25px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-image: linear-gradient(rgb(200,200,200), rgb(250, 250, 250));
  transition: all 0.2s;
  box-shadow: 2px 2px rgb(150, 150, 150);

  cursor:pointer;
  &:hover{
    box-shadow: 4px 4px rgb(100, 100, 100);
  }
  &:active{
    box-shadow: 2px 2px rgb(20, 20, 20);
  }

  &:
}

`