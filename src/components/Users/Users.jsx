import React from 'react';
import Paginator from './../Paginator/Paginator';
import User from './User';

const Users = (props) => {
	return (
		<div>
			<Paginator 
				currentPage={props.currentPage} 
				onPageChenged={props.onPageChenged} 
				totalItemsCount={props.totalItemsCount} 
				pageSize={props.pageSize} />
		<div>
		{
			props.users.map((u) => <User
				key={u.id}
				user={u}
				followingInProgress={props.followingInProgress}
				unfollow={props.unfollow}
				follow={props.follow}/>
			)
		}
		</div>
	</div>
	)
}

export default Users;