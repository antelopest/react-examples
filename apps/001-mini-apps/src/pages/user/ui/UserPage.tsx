import { useEffect, useState } from "react"

interface User {
  username: string;
  age: number;
  nationality: string;
  address: string;
}

export const UserPage = () => {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const userDate: User = {
        username: "Simon",
        age: 32,
        nationality: "Russian",
        address: "Thailand, Phuket, Chalong"
      }

      setUser(userDate);
    }, 1000);

    return () => clearTimeout(timer)
  }, []);

  if (!user) {
    return (
      <>
        <h3>User</h3>
        <p>Loading user...</p>
      </>)
  }

  return (
    <>
      <h3>User</h3>

      <p>Describe:</p>
      <table border={1} cellPadding={6}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Age</th>
            <th>Nationality</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{user?.username}</th>
            <th>{user?.age}</th>
            <th>{user?.nationality}</th>
            <th>{user?.address}</th>
          </tr>
        </tbody>
      </table>
    </>
  )
}