import React from 'react';
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
	width: 90%;
	margin: auto;
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
	text-align: center;
	@media (min-width: 768px) {
		margin-left: 300px;
		margin-right: 300px;
	}
	@media (max-width: 768px) {
		flex: 0;
		overflow: hidden;
	}
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
			<SectionContent> 
				Juliette and Matt met when they were just 15 years old. Juliette was told at a young age she was going to meet 
				a Nice Jewish Boy and live happily ever after. So, after many arguments, Juliette found her way to 
				Confirmation at the Temple on a Wednesday evening during the Fall. She was sitting in the front of 
				class when the teacher called on the kid squirming in his seat and he stood up to answer. 
				The tall boy explained the correct answer and Juliette twirled back in her seat and whispered 
				“Who is that?” Her friend just laughed and said, “Oh him? That’s just Matt.” <br/> <br/>
				The hunt for this “Matt” began. Googling, facebooking, and texting every Jewish friend Juliette had. 
				Before she knew of the wonderment of Jewish Geography this was the method. Finally on a Monday 
				afternoon she got a text message from an acquaintance “Matthew Brandman” was all it said. 
				She immediately found and friend requested. She literally sat by the computer and waited for 
				THE LITTLE GREEN LIGHT TO TURN ON. Then finally after two days of waiting (see stalking) it did. 
				Juliette immediately messaged him and after some witty back and forth she left him her number. <br/><br/>
				The two started to text nonstop, even during school hours (which Juliette would later find out 
				Matt got detention for). If any of you have ever met Juliette you know she doesn’t play around. 
				Within two days of texting she had brought up the awkward question - what was he looking for if 
				he was going to be so nice? His response was “I treat all my friends like this.” Juliette quickly 
				called him out on the proposed friend zone and was immediately asked on a date (Ladies take note).
				After about a week, the two planned a date for that Saturday. During this time, Juliette’s family 
				was preparing for her sister Victoria’s Bat Mitzvah. <br/><br/>
				They were at the temple in the Rabbi’s office 
				and Cherie was flipping through Kippahs when she saw a deep purple one. She picked it up because she 
				had just ordered Victoria’s and was starting to regret her choice. Sitting in the room with the Rabbi 
				she saw in a silver inscription, “Kyra Brandman’s Bat Mitzvah.”
				She laughed and said “Oh how funny! Juliette has a date with a boy with the last name Brandman this weekend!”
				The Rabbi smiled, “OH! If only the two kids were older they would be the perfect match!” It was like he had an intuition about the two.
				Juliette and Matt, and the Jewish Yenta Cosmos watching on high alert, met each other at the Bridgewater Mall 
				on a Saturday Afternoon. The two sat down at a corner table and seemingly couldn’t stop sharing their lives. 
				There was instant connection from both attending summer camp and a love for movies. Matt asked to buy Juliette 
				lunch and in a complete panic (because no boy had ever offered to buy her a meal) played coy like she wasn’t fucking starving. 
				They sat down and in one of those weird life aligning moments Juliette asked Matt what his favorite book was. <br/> <br/>
				[Aside] Everyone 
				has a real favorite book and everyone has a favorite book they tell people to seem smart or cool or whatever it is they need to seem. 
				Juliette very rarely shared what her actual favorite book was.
				Matt definitely was delighted by this question he smiled one of those crooked smiles that Juliette would eventually come to love and answered, “Okay, don’t judge but I actually really like these children’s novels by Rick Riordan, the Percy Jackson novels”. It was in this moment I think Juliette knew he was going to be something special. In a high pitched excited voice she exclaimed “Wait no way! Me too!!!” The two in a smiling bliss decided it was time after three hours to grab some ice cream. A quick walk and chat around the mall, with Matt’s arm around Juliette ended with him spilling ice cream all over her sweater.
				Laughing off the spill and removing the sweater the two continued to walk and it was then that Matt was smitten. 15 minutes after hugging goodbye they planed a second date for the following Saturday. It was then in the old Manville Movie Theater in theater number four a stolen first kiss took place. That would spark their forever & always. </SectionContent>
		</StyledSection>
		<StyledSection>
			<SectionTitle> The Proposal </SectionTitle>
			<SectionTitle> So This One Time at Hebrew School...</SectionTitle>
			<SectionContent> LORUM IPSUM DOLOR IMET </SectionContent>
		</StyledSection>
	</Wrapper>

)

export default Home