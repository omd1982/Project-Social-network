import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login'; //в видео импортируем под другим имннем LoginPage
import { Route, withRouter } from 'react-router-dom'; import { initializeApp } from './Redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/Preloader';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')); // перед импортами не работает
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp()
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<div className='app-wrapper'>
				<HeaderContainer />
				<Navbar />
				<div className='app-wrapper-content'>
					<React.Suspense fallback={<Preloader />}>
						<Route path='/profile/:userId?'
							render={() => <ProfileContainer />
							} />
						<Route path='/dialogs'
							render={() => <DialogsContainer />
							} />
					</React.Suspense>
					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/settings' component={Settings} />
					<Route path='/users'
						render={() => <UsersContainer />} />
					<Route path='/login'
						render={() => <LoginPage />} />
				</div>
				<Footer />
			</div>
		);
	}
}

let mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }))(App);





