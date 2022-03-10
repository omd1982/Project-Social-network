import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/face.jpg';
import { NavLink } from 'react-router-dom';

const User = ({user, followingInProgress, unfollow, follow}) => {
	debugger

	return (
		<div>
			<span>
				<div>
					<NavLink to={'/profile'}>
						<img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
					</NavLink>
				</div>
				<div>
					{user.followed ?
						<button disabled={followingInProgress.some(id => id == user.id)} onClick={() => { unfollow(user.id) }}
						>UnFollow</button>
						: <button disabled={followingInProgress.some(id => id == user.id)} onClick={() => { follow(user.id) }}
						>Follow</button>
					}
				</div>
			</span>
			<span>
				<span>
					<div>Name</div>
					{user.name ? <div>{user.name}</div> : <div>User</div>}
					<div>My status - {user.status ? user.status : 'No status'}</div>
					<div>ID-{user.id}</div>
				</span>
				<span>
					<div>{"user.locationObject.citu"}</div>
					<div>{"user.locationObject.contru"}</div>
				</span>
			</span>
			<span>
			</span>
		</div>
	)
}

export default User;
