import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Comment = () => {

    const { id } = useParams()
    const [items, setItems] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((response) => response.json())
            .then((data) => {
                setItems(data)
            })
    }, [id])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data)
            })
    },[id])

    console.log(users)

    return (
        <section>
            <div className='top-users-sections'>
              <section className='users-sections'>
                <p>Name: {users.name}</p>
                <p>Email: {users.email}</p>
                <p>Website: {users.website}</p>
              </section>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((ele) => {
                            return (
                                <tr key={ele.postId}>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.body}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <nav className='back-button'>
              <Link to='/'>
                <button>Back</button>
              </Link>
            </nav>
        </section>
    )
}

export default Comment;