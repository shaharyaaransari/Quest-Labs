import React from 'react'
  import home from "../assets/home-svgrepo-com.svg"
  import bag from "../assets/bag-heart-svgrepo-com.svg"
  import search from "../assets/search-svgrepo-com.svg"
  import user from "../assets/user-svgrepo-com.svg"
function Footer() {
  return (
    <>
    <div className='footer'>
<div className='footer-item'>
<div>
    <img src={home} alt="" />
</div>
<div>
    <img src={search} alt="" />
</div>
<div>
    <img src={bag} alt="" />
</div>
<div>
    <img src={user} alt="" />
</div>
</div>
    </div>
    </>
  )
}

export default Footer