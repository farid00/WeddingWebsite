import React from 'react'
import styled from 'styled-components'
import Bio from './Bio.jsx'

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	flex-flow: column wrap;
	justify-content: flex-start;
	align-items: center;
`;

const Title = styled.h1`
	font-family: 'Pompiere', cursive;
	font-size: 30px;
	margin-bottom: 25px;
	margin-top: 25px;
`;


const StyledP = styled.p`
	font-size: 30px;
	font-family: 'Pompiere', cursive;
`;

const TravelStay = () => (
	<Wrapper>
			<Title> The Hilton Garden Inn </Title>
			<Title><a href="https://hiltongardeninn.hilton.com/en/gi/groups/personalized/T/TTNHLGI-TBWNOV-20191108/index.jhtml"> Click Here </a> to book your room! </Title>
	</Wrapper>
)

export default TravelStay