import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const Title = styled.h1`
	font-family: 'Pompiere', cursive;
	font-size: 30px;
	margin-top: 25px;
`;

const Registry = () => (
	<Wrapper>
		<Title>We are registered at Bloomingdales and Macy's (Click Image to View Registry)</Title>
		
	</Wrapper>
)

export default Registry