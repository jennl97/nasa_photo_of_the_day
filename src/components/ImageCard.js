import React, {useState, useEffect} from "react";
import styled from 'styled-components';

//styled component 
let Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: blue;
  color: white;
  font-size: 24px;
  

`;

function ImageCard(props){
    console.log('title',props.data2)

    let [show, setShow] = useState(false)

    const display = () => setShow(true)

    return(
        <div>
            <Button onClick={display}>Click Here</Button>
            {show && <> <div className="titleDiv"><h1>{props.data2.title}</h1></div>
            <img className="img" src={props.data2.url}></img><p className="explanationP">{props.data2.explanation}</p></>}
        </div>
    )
}

export default ImageCard;