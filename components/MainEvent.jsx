import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	font-family: 'Pompiere', cursive;
	font-size: 26px
`;
const ST = styled.p`
	font-size: 36px;
	text-align: center;
	max-width: 450px;
	margin: auto;
	font-weight: bold;
`;

const SP = styled.p`
	text-align: center;
	max-width: 450px;
	margin: auto;
`

const StyleWrap = styled.img`
	width: 300px;
	margin: 10px;
 }	
 `


const MainEvent = () => (
	<Wrapper>
		<StyleWrap src="public/images/prom.jpeg"/>
		<SP> Thank you so much for joining us today... </SP>
		<ST> Ceremony </ST>
		<img src="public/images/wr.png"/>
		<SP>November 9th, 2019</SP>
		<SP>The Ashford Estate</SP>
		<SP>Details to follow</SP>
	</Wrapper>
)

export default MainEvent