import React from 'react'
import '../Style/Profile.css'
const userData = {name:"Himanshu", img: "https://i.pinimg.com/736x/a9/75/93/a975934bb378afc4ca8c133df451f56e.jpg"}

const ProfilePage = () => {
    return (
        <>
            <div className="mainContainer">
                <div className="name">
                    <h4>{userData.name}</h4>
                </div>
                <div className="profileImg">
                    <img src={userData.img} alt="" />
                </div>
            </div>
        </>
    )
}

export default ProfilePage