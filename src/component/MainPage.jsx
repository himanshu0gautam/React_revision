import React from 'react'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/page2')
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="mainContainer">
          <div className="form" style={{ display: 'flex', flexDirection: 'column' }}>
            <label> Name :
              <input type="text" placeholder='Enter your name' />
            </label>
            <label> Email :
              <input type="text" placeholder='Enter your email' />
            </label>
            <label> Age :
              <input type="text" placeholder='Enter your age' />
            </label>
            <button type='Submit'>Submit</button>
          </div>
        </div>

      </form>
    </>
  )
}

export default MainPage