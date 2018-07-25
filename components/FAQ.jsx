import React from 'react';
import styled from 'styled-components';
import FAQItem from './FAQItem.jsx'

const Wrapper = styled.div`
	font-family: 'Pompiere', cursive;
	display: flex;
	width: 100%;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
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


const FAQ = () => (
	<Wrapper>
		<HiddenTitle> FAQ </HiddenTitle>
		<FAQItem question="Are kids invited?" answer="We love all of the kids in our lives!  
		But due to limited space and a GIANT family, 
		if your invitation did not specifically say family or your child's name, 
		we'd prefer you leave them home for the festivities."/>
		<FAQItem question="Can I bring a date?" answer="I wish we could say the more the merrier!, 
		but due to limited space and a GIANT family we will not be including plus 1's for everyone to this wedding.  
		If your invitation specifies a plus 1 please feel free to bring your date" />
		<FAQItem question="I have a food allergy, can I make a special request" answer="If you do have a food allergy, 
		please reach out to Matthew as soon as possible to let 
		him know so he can work with the Ashford Estate to try to accommodate
		your request." />
	</Wrapper>
)

export default FAQ