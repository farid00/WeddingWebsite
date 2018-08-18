import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	flex-flow: column;
	justify-content: center;
	align-items: center;

`;

const Title = styled.h1`
	font-family: 'Pompiere', cursive;
	font-size: 30px;
	margin-top: 25px;
	margin-left: 25px;
	margin-right: 25px;
	text-align: center;
`;

const SubTitle = styled.h1`
	font-family: 'Pompiere', cursive;
	font-size: 30px;
	margin-left: 25px;
	margin-right: 25px;
	text-align: center;
`;

const StyleWrap = styled.img`
	width: 300px;
	margin: 10px;
	&:hover {
    	opacity: 0.5;
  	}	
`
const WrapperLong = styled.div`
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	width: 100%;
`
const Registry = () => (
	<Wrapper>
		<Title>We are registered at Bloomingdales and Macy's </Title>
		<SubTitle>(Click Image to View Registry)</SubTitle>
		<WrapperLong>
			<a href="https://www.bloomingdales.com/registry/wedding/guest/?registryId=2387933">
				<StyleWrap src="/public/images/bloomingdales.svg"/>
			</a>
			<a href="https://www.macys.com/wgl/registry/guest/2388310">
				<StyleWrap src="/public/images/Macys.png"/>
			</a>
		</WrapperLong>
	</Wrapper>
)

export default Registry