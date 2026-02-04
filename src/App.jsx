import { useState, useEffect } from 'react'

export default function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(data => setUserData(data));
  }, []);

  return (
    <>
      {userData && (
        <div className='user-card'>
          <h1>{userData.results[0].name.first} {userData.results[0].name.last}</h1>
          <p>{userData.results[0].email}</p>
          <img src={userData.results[0].picture.large} alt="" />
        </div>
      )}
    </>
  );
}