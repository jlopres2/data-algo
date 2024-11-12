import React from 'react'

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {

  // fetch allows us to make API requests to the backend.
  // this returns a promise so we have to wait for it.
  // Promise is an object that represents the eventual completion (or failure) 
  // of an asynchronous operation, and its resulting value.
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <tr key = {user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
          </tr>)}
        </tbody>
      </table>
    </>
  )
}

export default UsersPage