import React from 'react'
import styled from 'styled-components'
import Bio from './Bio.jsx'

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center
`;

const Title = styled.h1`
	font-family: 'Pompiere', cursive;
	font-size: 36px;
	margin-bottom: 25px;
`;

const SubTitle = styled.p`
	font-size: 20px;
`

const TravelStay = () => (
	<Wrapper>
		<Title> Travel and Hotel Information </Title>
		<i class="fas fa-hotel fa-2x"></i>
		<SubTitle> Hilton Hotel </SubTitle>
	</Wrapper>
)

export default TravelStay