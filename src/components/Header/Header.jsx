import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return (<header className={s.header}>
		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkHyFQGKCePK9Kg16XYpbBbx8HnuzoAYg7Xg&usqp=CAU" />
		<div className={s.loginBlock}>
			{props.isAuth ?
				<div>{props.login} - <button onClick={props.logout}>LOG OUT</button> </div> : <NavLink to={'/login'}>Login</NavLink>}
		</div>
	</header>
	)
}

export default Header;