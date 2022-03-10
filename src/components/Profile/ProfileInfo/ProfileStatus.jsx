/*
import React from 'react';

class ProfileStatus extends React.Component {

	state = {
			editMode: false,
			status: this.props.status
		}
		
	activateEditMode = ()=> { // это экспериментальная функция внутри класса, что б не создавать bind  т. е. не "биндить"
	//console.log(this.state.editMode);
		this.setState({
			
			editMode: true
			
		});
	//console.log(this.state.editMode);
		//this.forceUpdate(); - так использовать на крайний случай
		}
	 deactivateEditMode = ()=> { // это экспериментальная функция внутри класса, что б не создавать bind  т. е. не "биндить"
	//console.log(this.state.editMode);
		this.setState({
			
			editMode: false
			
		});
	//console.log(this.state.editMode);
		//this.forceUpdate(); - так использовать на крайний случай
		this.props.updateStatus(this.state.status)
		}
		onStatusChange = (e) => {
				this.setState({
				status: e.currentTarget.value
			});
		}
		componentDidUpdate(prevProps, prevState){ // можете быть уверены, что компонент и все его дочерние компоненты уже перерисовали себя
			if(prevProps.status !== this.props.status){ 
				this.setState({status: this.props.status});
			}
		}
		
	render(){ 
		return (
		<div>
		{!this.state.editMode &&  
			<div>
				<span onClick={this.activateEditMode}>{this.props.status && "-------" }</span>
			</div>
		}				
		{this.state.editMode &&
			<div>
				<input autoFocus= {true} onChange = {this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status} />
			</div>
		}
		</div>  			
		)
	}
}



export default ProfileStatus;
*/