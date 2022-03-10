import React from 'react';
import Dialogs from './Dialogs';
import {sendMessage} from '../../Redux/dialogs-reducer';
import {withAuthRedirect} from '../../hoc/withAuthReducer';
import {connect} from 'react-redux';
import {compose} from 'redux';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, {sendMessage})
)(Dialogs);
