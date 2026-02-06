import { useState, useEffect } from 'react'

export default function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(data => setUserData(data));
  }, []);

  const {name, email, picture} = userData?.results?.[0] || {};

  return (
    <>
      {userData && (
        <div className='user-card'>
          <h1>{name.first} {name.last}</h1>
          <p>{email}</p>
          <img src={picture.large} alt="" />
        </div>
      )}
    </>
  );
}