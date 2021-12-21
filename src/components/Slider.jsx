import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import styled from "styled-components";
import {sliderItems} from '../data'
import { mobile } from "../responsive";

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
${mobile({ display: "none" })}
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
cursor: pointer;
opacity: 0.5;
z-index: 2;
`
const Wraper = styled.div`
height: 100%;
display: flex;
transform: translate(${(props) => props.slideIndex * -100}vw);
transition: all 1.5s ease;
`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
`

const ImgContainer = styled.div`
height: 100%;
flex: 1;
`
const Image = styled.img`
height: 80%;
`
const Title = styled.h1`
font-size: 70px;
`

const Desc = styled.p`
margin: 50px 0;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`

const Button = styled.button`
background-color: #0cffdfc4;
border: none;
border-radius: 9px;
color: white;
padding: 10px;
font-size: 20px;
cursor: pointer;
`

const InfoContainer = styled.div`
flex: 1;
position: relative;
left: -390px;
padding: 50px;
`


const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handelClick = (direction)=>{
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }; 

    return (
        <Container>
            <Arrow direction="left" onClick={() => handelClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wraper slideIndex = {slideIndex}>
                {sliderItems.map((item)=> (
                <Slide bg = {item.bg} key = {item.id}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}IN SUDAN</Desc>
                        <Button>SHOP NOW </Button>
                    </InfoContainer>
                </Slide>
                ) )}
               
            </Wraper>
            <Arrow direction="right" onClick={() => handelClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}



export default Slider
