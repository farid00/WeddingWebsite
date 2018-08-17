import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: column;
	width: 100%;
`;

const Title = styled.h1`
	font-family: 'Pompiere', cursive;
	font-size: 30px;
	margin-top: 25px;
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
	justify-content: center;
	align-items: center;
	width: 100%;
`
const Registry = () => (
	<Wrapper>
		<Title>We are registered at Bloomingdales and Macy's (Click Image to View Registry)</Title>
		<WrapperLong>
		<a href="https://www.bloomingdales.com/registry/wedding/guest/?registryId=2387933">
			<StyleWrap src="/public/images/Bloomingdales.svg"/>
		</a>
		<a href="https://www.macys.com/wgl/registry/guest/2388310">
			<StyleWrap src="/public/images/Macys.png"/>
		</a>
		</WrapperLong>
	</Wrapper>
)

export default Registry