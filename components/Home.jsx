import React from 'react';
import styled from 'styled-components';
import { Parallax, ParallaxLayer } from 'react-spring';
const Wrapper = styled.div`
	display: flex;
	flex-flow: column;
	width: 100%;
	transform-style: preserve-3d;
`;

const Title = styled.p`
	font-family: Dancing Script, cursive;
	font-size: 36px;
`;

const HomePicture = styled.img`
    display: flex;
    width: 50vw;
    @media (max-width: 450px) {
    	width: 100vw
    }
`;

const HomePicture2 = styled.img`
    display: flex;
    width: 50vw;
    @media (max-width: 450px) {	
    	display:none
    }
`;

const OurNames = styled.div`
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
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	font-size: 46px;
	font-family: 'Pompiere', cursive;
`;

const SectionTitle = styled.p`
	font-size: 36px;
	text-align: center;
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

const Home = () => (
<div className="parwrap">
	<div className="parsection">
			<div className ="parallax2 bg1">
				<HomePicture src="/public/images/home1.jpg"/>
				<HomePicture2 src="/public/images/home2.jpg"/>
			</div>
	</div>
	<div className="parsection static">
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
	</div>
	
	<div className="parsection bg1">
		<div className="parallax2">
			<HomePicture src="/public/images/home5.png"/>
			<HomePicture2 src="/public/images/home6.jpg"/>
		</div>
	</div>

<div className="parsection static2">
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
	</div>
	<div className="parsection bg1">
		<div className="parallax2">
			<HomePicture src="/public/images/home3.jpeg"/>
			<HomePicture2 src="/public/images/home4.jpeg"/>
		</div>
	</div>
	<div className="parsection static3">
		<StyledSection>
			<SectionTitle> The Proposal </SectionTitle>
			<SectionContent>
			Matt knew Juliette was the one by the time they were 16 years old. Sitting in his basement talking about their dreams laying on a blue punching bag, Juliette asked him if he saw more of a future than next week. Matt smiled and knew he did, and since that day Matt has always known that Juliette would be his wife.<br/><br/>
 Flash Forward to 2018 and Matt and Juliette are living together in New York City. Finally at a time where the two could get married, Matt realized he wanted to propose to Juliette; but he knew it would be no easy task.  The first thing he knew to do was ask for her Father’s permission. <br/><br/>
Matt and Mr. Trautman met at a steakhouse in Hoboken.  This would have been a simple enjoyable task, if Juliette was a simple woman, alas we know that is not the case. Barraged with questions and an inquisitiveness that knows no boundaries Matt had to come up with a cover story. Matt told Juliette that he had a big Cyber happy hour she couldn’t attend, and was met with a classic Juliette “who, what, when, where, why questionnaire”.  After a few made up answers and dodged questions he was able to get out the door and meet Mr. Trautman. <br/><br/>
At dinner, before the meal arrived, Matt asked for, and graciously received, Mr. Trautman’s blessing to marry his daughter.  Filled with elation, Matt returned home to Juliette and prepared for the even harder job of discreetly shopping for a ring under Juliette’s nose.<br/><br/>
For those of you who do not know, Juliette is the opposite of subtle. Juliette was sending Instagram ring post tags and messaged screenshots on a daily basis since the two moved in together. After the 400th ring post Juliette had showed him, he had a pretty definitive idea of what ring she wanted.  <br/><br/>
In the beginning of February, Juliette and Matt went with the Brandman’s to see Rain Grandma in Florida. The proposal was on many people’s minds. Juliette’s friends thought it would be on this last minute trip, Cherie thought it could be any moment of any day and would ask 12 times a day, and Rain Grandma wanted to know too.<br/><br/>
That night at dinner, she asked Juliette, “So where is the ring, I don’t want any accidents, it’s been long enough.”   <br/><br/>
Juliette responded, “That is a good question, do you have an answer Matt?” and Matt laughed and hugged his grandma and told her he would tell her more later on. On the last day of that vacation, Matt pulled Rain Grandma aside to tell her how important Juliette was to him and that he was planning to propose very soon.  While the two were on their way back from Florida Juliette showed Matt the Ring Concierge account on Instagram. After looking through some posts on his own phone later that night Matt decided this person was going to design Juliette’s ring.<br/><br/>
He was able to escape work early and meet with the woman behind the Instagram feed for a consultation.  After consulting friends (See: Amanda) and family he settled on a Radiant cut diamond set on a platinum ring with two accompanying baguette diamonds.  However, it needed to be assembled offsite so it would have to be shipped to his house in New Jersey the following week.  In the meantime Matt started to work on various proposal ideas and pitch them to his closest confidants.<br/><br/>
Matt knew the week of Passover Juliette was getting ancy. She was dressing nicer for work and she would come home asking if they were going to dinner every night only to find Matt in his Pajamas. Matt’s plans started to come together on March 28 (Happy Birthday Amanda). That day the ring arrived at 6 Wolf Hill.  He knew that both families would be home for Passover, and Matt knew Juliette was planning to leave the City on that Thursday in the early afternoon. Though he had not planned to propose that day and had no formal plans to, the universe clearly disagreed and offered an opportunity he could not pass up.  First he told his boss at the time what was going on and got an enthusiastic greenlight to take off of work so he could meet his Mom in Secaucus and get the ring.  He told Amanda his plan to propose that week and had arranged for her to come surprise Juliette that Friday. Then he called up a photographer to capture the moment and pinged Juliette at work to meet him outside the PwC office for a date (not an uncommon request given that they both work at the same company).<br/> <br/>
Just when everything seemed to be going well and he was about to meet Juliette in the lobby, the photographer called and canceled, with only about an hours’ notice.  In a slight (see: major) panic, Matt called the one person who always knows what to in a crisis, his Dad’s longtime assistant, Dianna. And in an act of unbelievable selflessness she agreed to be the photographer.  <br/><br/>
With the crisis averted Matt met Juliette in the lobby right after getting off the phone with Dianna, and requested she put in her headphones and close her eyes while he got a cab to their date location.  While this no doubt caught her by surprise she agreed and played along.  He directed the cab to take them to the Museum of Natural History. It was closed, but that didn’t matter to either of them. They had been on many dates there especially when they first started dating. Upon arrival Matt had her take off her headphones and open her eyes.  He walked her up the steps and told her how the Museum has always been there with them through every up and down in their relationship, and much like the Museum is a fixture in their lives, he wanted to make sure she would be one in his.  He got down on one knee and asked for her hand in marriage, there was a brief shocked pause as tears started to stream down her face, and after what seemed to be an eternity for him (but was most likely less than a few seconds) she said yes and kissed him!<br/><br/>
Dianna captured beautiful in the moment photos and the two kept it a secret all through dinner. They called their parents in a cab to Del Friscos where they shared VIPs and mashed potatoes as they called all their friends and family.
			</SectionContent>
		</StyledSection>
	</div>



</div>



)

export default Home