import React, { useState } from 'react'
  import  "./Profile.css"
import ProfileImage from '../components/ProfileImage'
import ProfileDetailsCard from '../components/ProfileDetailsCard'
import Badge from '../components/Badge'
import History from '../components/History'
export const Profile = ({data,pointsData,rankData, badge,pointsHistory}) => {
     const [show,setShow] = useState('badge')
  return (
    <>
      <div className='main-profile-container'>
   <ProfileImage  data={data}/>
    <ProfileDetailsCard data={data}/>
     
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
    <button onClick={()=>setShow("badge")}   className={show === 'badge' ? 'active' : ''}>Badges</button>
    <button  onClick={()=>setShow("history")}  className={show === 'history' ? 'active' : ''}>Point History</button>
</div>
  {show ==="badge" && <Badge badge={badge}/>}
  {show ==="history" && <History  pointsHistory={pointsHistory}/>}
  
</div>
      </div>
 
    
    </>
  )
}
