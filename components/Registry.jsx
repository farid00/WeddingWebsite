import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const Title = styled.h1`
	font-family: 'Pompiere', cursive;
	font-size: 36px;
`;

const Registry = () => (
	<Wrapper>
		<Title>Registry Details</Title>
	</Wrapper>
)

export default Registry