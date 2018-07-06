import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const Title = styled.p`
	font-family: Dancing Script, cursive;
	font-size: 36px;
`;

const Home = () => (
	<Wrapper>
		<Title>The Ashford Esate</Title>
	</Wrapper>
)

export default Home