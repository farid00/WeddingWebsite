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

const SectionWrapper = styled.div`
`


const MainEvent = () => (
	<Wrapper>
		<img src="public/images/icecream.png"/>
		<SP> Thank you so much for joining us today... </SP>
		<ST> Ceremony </ST>
		<img src="public/images/wr.png"/>
		<SP> The ceremony will be taking place in the carriage house at the Ashoford estate at 
		XX:XXPM please try to arrive X early.</SP>
		<ST> Reception </ST>
		<img src="public/images/champagne.png"/>
		<SP> The reception will take place following the ceremony around XX:XXPM, there will be
		champage toast followed by a cocktail hour, followed by 3 course entree in the grand ballroom.
		</SP>
	</Wrapper>
)

export default MainEvent