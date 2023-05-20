import React from 'react';
import { Link } from 'react-router-dom';

const Table = (props) => {
    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>#Id</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.filter((ele)=>{
                            return props.search.toLowerCase() === '' 
                            ? ele 
                            : ele.title.toLowerCase().includes(props.search)                    
                        }).map((ele, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
                                    <td>{ele.body}</td>
                                    <td>
                                      <Link to={`/comments/${ele.userId}`}>
                                        <button>See Comment</button>
                                      </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;