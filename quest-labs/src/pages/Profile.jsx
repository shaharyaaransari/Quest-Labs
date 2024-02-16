import React from 'react'
  import  "./Profile.css"
import ProfileImage from '../components/ProfileImage'
import ProfileDetailsCard from '../components/ProfileDetailsCard'
export const Profile = () => {
  return (
    <>
      <div className='main-profile-container'>
   <ProfileImage />
    <ProfileDetailsCard/>
       {/* card */}
       <div  className='profile-card'>
        <div className='profile-desc'>
             <div>
                <p>2100</p>
                <p>Points</p>
             </div>
 
             <div>
                <p>#1</p>
                <p>Rank</p>
             </div>
             <div>
                <p>3</p>
                <p>Level</p>
             </div>
        </div>
<div className='profile-plan'>
    <button>Membership</button>
    <button>Badges</button>
    <button>Point History</button>
</div>
</div>
      </div>
 
    
    </>
  )
}
