import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from './../../Preloader'; 
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus }) => {
	
	 if(!profile){
	 return <Preloader /> 
 }
  return (
	<div> 
	
		<div> 
			<img src='https://uguide.ru/pic3/wix-konstruktor-saytov.jpg' />
		</div>

		<div className={s.descriptionBlosk}> 
			<img src = {profile.photos.large} /> 
		<div>
			<ProfileStatusWithHooks status = {status} updateStatus = {updateStatus}/>
		</div>
		</div>
	</div>
	)	
}

export default ProfileInfo;