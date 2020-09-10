import React, { useState } from "react";
import styled from 'styled-components';

//styled component 
let Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 100%;
  background: #15418c;
  color: white;
  font-size: 17px;
  font-weight: 600;
  font-family: "Titillium Web", "Arial", sans-serif;
  border: none;

  

`;

function ImageCard(props){
    console.log('title',props.data2)

    let [show, setShow] = useState(false)

    const display = () => setShow(true)

    return(
        <div>
            <Button onClick={display} className="apod_btn">GET PICTURE</Button>
            {show && <> <div className="titleDiv"><img className="img" src={props.data2.url} alt="NASA Astronomy"></img><h1 className="title_h1">{props.data2.title}</h1></div>
            <p className="explanationP">{props.data2.explanation}</p></>}
        </div>
    )
}

export default ImageCard;