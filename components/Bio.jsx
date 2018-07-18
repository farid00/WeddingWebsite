import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	flex-flow: column wrap;
	justify-content: flex-start;
	align-items: center;
	padding-top: 20px;
	padding-bottom: 20px;
	
`;

const Name = styled.p`
	font-family: Dancing Script, cursive;
	font-size: 36px;
`;

const Nickname = styled.p`
	font-family: Dancing Script, cursive;
	font-size: 20px;
`;

const Information = styled.p`
	margin: auto;
	max-width: 350px;
	text-align: center;
`;

const CircleAvatar = styled.img`
	border-radius: 50%;
`

const Bio = ({name, nickname, information, picture}) => (
	<Wrapper>
		<CircleAvatar src={picture} alt="avatar"/>
		<Name> {name} </Name>
		<Nickname> {nickname} </Nickname>
		<Information> {information}</Information>
	</Wrapper>
)

export default Bio