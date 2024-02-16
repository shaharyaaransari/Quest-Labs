import React from 'react'
import '../pages/Profile.css'
function ProfileDetailsCard({data}) {
  return (
    <>
     <div className='profile-details'>
      <h2>{data?.data?.name}</h2>
     </div>
     {/* card */}
   
    </>
  )
}

export default ProfileDetailsCard