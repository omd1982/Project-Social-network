import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Formik, Form, Field } from 'formik';

const MyPosts = React.memo((props) => {
	let postsElements = [...props.posts].reverse().map((p) => <Post message={p.message} key={p.id} LikesCount={p.LikesCount} />);

	let onNewPostChange = (e) => {
		props.addPost(e.text);
	}

	return (
		<div className={s.postsBlosk}>
			<h3>My posts</h3>
			<div>
				<AddPostForm onNewPostChange={onNewPostChange} /> {/* выносим форму отдельно*/}
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
})
const AddPostForm = (props) => {
	const onSubmit = (values) => {
		props.onNewPostChange(values);
	}
	return (
		<div>
			<Formik
				initialValues={{ text: 'Add new post' }}
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
				{({ errors, touched }) => (
					<Form>
						<div className={s.formControl}>
							{errors.text}
						</div>
						<Field type="text" name="text" className={(errors.text) ? s.errors : null} />
						<div>
							<button type="submit" >
								Add post
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	)
}
export default MyPosts;