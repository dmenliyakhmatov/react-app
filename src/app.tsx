import { useState } from 'react';
import './global.css';

type UserCardProps = {
  name: string
  birthdate: string
  position: string
  lastOnline: string
};



export const UserCard = ({ birthdate, name, position, lastOnline }: UserCardProps) => {
  return (
    <div >

      <div >
        <h2>{name}</h2>
        <p>
          <strong>Birth date:</strong> {birthdate}
        </p>
        <p>
          <strong>Position:</strong> {position}
        </p>
        <p>
          <strong>Last online:</strong> {lastOnline}
        </p>
      </div>
    </div>
  );
};




export const App = () => {
  const [userData, setUserData] = useState([
    {
      name: 'John Doe',
      birthdate: '1990-01-01',
      position: 'Developer',
      lastOnline: '2023-01-01T12:30:00',
    },
    {
      name: 'Jane Smith',
      birthdate: '1985-05-15',
      position: 'Designer',
      lastOnline: '2023-01-02T09:45:00',
    },
  ]);

  const updateUserData = () => {
    const updatedData = userData.map(user => ({
      ...user,
      lastOnline: new Date().toISOString(),
    }));
    setUserData(updatedData);
  };

  return (
    <div style={{ padding: "24px" }}>


      {userData.map((user, index) => (
        <UserCard key={index} {...user} />
      ))}
      <button onClick={updateUserData}>Update Data</button>

    </div>
  );
};
