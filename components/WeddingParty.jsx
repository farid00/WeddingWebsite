import React from 'react'
import styled from 'styled-components'
import Bio from './Bio.jsx'
import WeddingBios from './WeddingBios.js'

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
	margin-top: 25px;
`;

const BioColumn = styled.div`
	display: flex;
	flex: 1 0 50%;
	flex-flow: column wrap;
	justify-content: flex-start;
	align-items: center;
	border-right: solid 1px black;
	@media (max-width: 768px) {
		border-right: 0px;
	}

`;

const BioWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: flex-start;

`;

const HiddenTitle = styled.h1`
  font-family: 'Pompiere', cursive;
  font-size: 36px;
  margin-bottom: 10px;
  padding-top: 10px;
  margin-left: 5px;
  @media (min-width: 768px) {
    display: None;
  }
`;

const WeddingParty = () => (
	<Wrapper>
		<HiddenTitle> The Wedding Party </HiddenTitle>
		<BioWrapper>
			<BioColumn>
				<Title> Groomsmen </Title>
				{WeddingBios.groomsmen.map((bio, i) =>
					<Bio key={i} {...bio}/>
				)}
			</BioColumn>
			<BioColumn>
				<Title> Bridesmaids </Title>
				{WeddingBios.bridesmaids.map((bio, i) =>
					<Bio key={i} {...bio}/>
				)}
			</BioColumn>
		</BioWrapper>
	</Wrapper>
)

export default WeddingParty