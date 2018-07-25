import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	font-family: 'Pompiere', cursive;
	display: flex;
	width: 100%;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: flex-start;
	margin-top: 25px;
	margin-bottom: 80px;
	width: 350;
	@media (max-width: 900px) {
		margin-bottom: 20px;
		&:not(:first-child) {
			margin-top: 0px;
		}
    	&:not(:last-child) {
    		border-bottom: 1px solid black;
    		padding-bottom: 40px;
    	}
  	}
`;

const QuestionWrapper = styled.div`
	flex: 1;
	font-size: 30px;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	text-align: center;
	align-self: center;
`;

const AnswerWrapper = styled.div`
	flex: 1;
	font-size: 30px;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	text-align: center;
	border-left: 1px solid black;
`;


const Title = styled.h1`
	font-family: 'Pompiere', cursive;
	font-size: 36px;
`;

const QInformation = styled.p`
	width: 450px;
	font-size: 30px;
	text-align: center;
	margin: auto;
`;

const AInformation = styled.p`
	width: 450px;
	font-size: 20px;
	text-align: center;
	margin: auto;
`;


const FAQItem = ({question, answer}) => (
	<Wrapper>
			<QuestionWrapper>
				<Title> Question </Title>
				<QInformation>{question}</QInformation>
			</QuestionWrapper>
			<AnswerWrapper>
				<Title> Answer </Title>
				<AInformation>{answer}</AInformation>
			</AnswerWrapper>
	</Wrapper>
)

export default FAQItem