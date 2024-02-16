
import '../pages/Profile.css'

function ProfileImage({data}) {
  
  return (
    <>
      <div className='profile-image'>
        <div className='profile'>
        <img src={data?.data?.imageUrl}alt="profile" />
        </div>

     </div>
    </>
  )
}

export default ProfileImage