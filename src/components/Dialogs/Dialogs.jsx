import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { Formik, Form, Field } from 'formik';

const Dialogs = ({dialogsPage, sendMessage}) => {
	let dialogsElements = dialogsPage.dialogs.map((d) => <DialogsItem name={d.name} key={d.id} id={d.id} />)
	let messageElements = dialogsPage.messages.map((m) => <Message message={m.message} key={m.id} id={m.id} />)
	let onNewMessageChange = (e) => {
		sendMessage(e.text);
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messageElements}
				<AddMessageForm onNewMessageChange={onNewMessageChange} /> {/* выносим форму отдельно*/}
			</div>
		</div>
	)
}

const AddMessageForm = (props) => {
	const onSubmit = (values) => {
		props.onNewMessageChange(values);
	}
	return (
		<div>
			<Formik
				initialValues={{ text: 'Your text' }}
				validate={(values) => {
					const errors = {};
					if (!values.text) {
						errors.text = 'Поле обязательно для заполнения';
					} else if (values.text.length > 30) {
						errors.text = 'Не более 30 символов';
					} else if (values.text.length < 3) {
						errors.text = 'Сдишком короткий текст';
					}
					return errors;
				}}
				onSubmit={onSubmit}>
				{({errors}) => (
					<Form>
						<div className={s.formControl}>
							{errors.text}
						</div>
						<Field type="text" name="text" className={(errors.text) ? s.errors : null} />
						<div>
							<button type="submit" >
								Submit
							</button>
						</div>
					</Form>)}
			</Formik>
		</div>
	)
}

export default Dialogs;