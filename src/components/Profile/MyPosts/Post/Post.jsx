import React from 'react';
import s from './Post.module.css';
const Post = (props) => {

	return (
		<div className={`${s.item} ${s.img}`}>
			<img src="https://i.pinimg.com/originals/be/69/d5/be69d5aae6dd81d400a2cc834f23e9d6.jpg" />
			{props.message}
			<div>
				<span>like - {props.LikesCount} </span>
			</div>
		</div>
	)
}

export default Post;




