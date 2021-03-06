import React from 'react'
import styled from 'styled-components'

const CircleAvatar = styled.img`
	height: 170px;
`

class PictureChange extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstPicture: true
		}
	}

	handleEnter(e) {
		this.setState({
			firstPicture: false
		})
	}

	handleLeave(e) {
		this.setState({
			firstPicture: true
		})
	}


	render() {
		return (
		<div style={{cursor: 'pointer'}} onPointerEnter={(e)=> this.handleEnter(e)} onTouchStart={(e)=> this.handleEnter(e)} onTouchEnd={(e)=> this.handleLeave(e)} onMouseLeave={(e)=> this.handleLeave(e)} >
			{this.state.firstPicture ? 
				<CircleAvatar src={this.props.nPicture} alt="avatar"/> :
				<CircleAvatar src={this.props.fPicture} alt="avatar"/>
			}
		</div>
		)
	}
}

export default PictureChange