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

const BioColumn = styled.div`
	display: flex;
	flex: 1 0 0;
	flex-flow: column wrap;
	justify-content: flex-start;
	align-items: center;
	border-right: solid 1px black;
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
				<Bio name="Greg Pfadenhaeur" nickname="Po" information="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec egestas eros. Donec porttitor nulla tellus, sit amet tempus tellus maximus a. Curabitur consequat ex eu magna tincidunt tincidunt. "/>
				<Bio name="Ben Andre" nickname="NA" information="hello"/>
			</BioColumn>
			<BioColumn>
				<Title> Bridesmaids </Title>
				<Bio name="Kaite Wirth" nickname="NA" information="NNANANAANANNA"/>
				<Bio name="Amanda Waltman" nickname="NA" information="hello"/>
			</BioColumn>
		</BioWrapper>
	</Wrapper>
)

export default WeddingParty