import React from 'react'
  import  "./Profile.css"
import ProfileImage from '../components/ProfileImage'
import ProfileDetailsCard from '../components/ProfileDetailsCard'
export const Profile = ({data,pointsData,rankData}) => {
  return (
    <>
      <div className='main-profile-container'>
   <ProfileImage  data={data}/>
    <ProfileDetailsCard data={data}/>
       {/* card */}
       <div  className='profile-card'>
        <div className='profile-desc'>
             <div>
                <p>{pointsData?.data}</p>
                <p>Points</p>
             </div>
 
             <div>
                <p>{`#${rankData?.position}`}</p>
                <p>Rank</p>
             </div>
             <div>
                <p>{pointsData?.tier}</p>
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
