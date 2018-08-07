import React from 'react'
import styled from 'styled-components'
import Bio from './Bio.jsx'

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	flex-flow: column wrap;
	justify-content: center;
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
	text-align: 'center';
`;

const TravelStay = () => (
	<Wrapper>
			<Title> <b>Please visit www.Hamilton.hgi.com or call 609 669-0600 to reserve a room at the Hilton Hotel</b> </Title>
			<StyledP><b>Discounted group rate:</b></StyledP>
			<StyledP>Friday, November 8th through Sunday, November 10th 2019.</StyledP>
			<StyledP>Standard king room $129.00 per night.</StyledP>
			<StyledP>Standard double room (2 queen beds) $139.00 per night.</StyledP>
			<StyledP>King suite $149.00 per night.</StyledP>
			<StyledP>Double suite $159.00 per night.</StyledP>
			<StyledP>All rooms subject to hotel sales tax.</StyledP>
			<StyledP>Room rates are based availability and non-commissionable.</StyledP>
	</Wrapper>
)

export default TravelStay