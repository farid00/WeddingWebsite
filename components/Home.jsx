import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center
	width: 100%;
`;

const Title = styled.p`
	font-family: Dancing Script, cursive;
	font-size: 36px;
`;

const HomePicture = styled.img`
	width: 100%;
	@media (min-width: 768px) {
    	height: auto;  	
    }
    @media (max-width: 768px) {
    	height: auto;  	
    }
`;

const OurNames = styled.div`
	margin-top: 25px;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	font-size: 46px;
	font-family: 'Pompiere', cursive;
`;

const AnnounceWrapper = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	font-family: 'Pompiere', cursive;
	@media (min-width: 768px) {
		margin-left: 200px;
		margin-right: 200px;
	}
`;

const HashTag = styled.p`
	margin-top: 25px;
	font-size: 20px;
`

const DateTag = styled.p`
	font-size: 36px;
`

const AshfordTag = styled.p`
	font-size: 20px;
`

const StyledSection = styled.div`
	margin-top: 25px;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	font-size: 46px;
	font-family: 'Pompiere', cursive;
`;

const SectionTitle = styled.p`
	font-size: 36px;
`

const SectionContent = styled.p`
	font-size: 20px;
`

const IcecreamImage = styled.img`
	position: absolute;
	right: 60px;

`

const MZ = styled.img`
	position: absolute;
	left: 60px;
	width: 200px;
	height: auto;
`
const Home = () => (
	<Wrapper>
		<HomePicture src="public/images/HomePicture.jpg"/>
		<OurNames>
			<p> Juliette Trautman</p>
			<p> and </p>
			<p> Matt Brandman</p>
		</OurNames>
		<AnnounceWrapper>
			<HashTag> #MandJWeddingDay2019 </HashTag>
			<DateTag> November 9, 2019 </DateTag>
			<AshfordTag> The Ashford Estate </AshfordTag>
		</AnnounceWrapper>
		<StyledSection>
			<SectionTitle> How We Met </SectionTitle>
			<SectionTitle> So This One Time at Hebrew School...</SectionTitle>
			<SectionContent> LORUM IPSUM DOLOR IMET </SectionContent>
		</StyledSection>
		<StyledSection>
			<SectionTitle> The Proposal </SectionTitle>
			<SectionTitle> So This One Time at Hebrew School...</SectionTitle>
			<SectionContent> LORUM IPSUM DOLOR IMET </SectionContent>
		</StyledSection>
	</Wrapper>

)

export default Home