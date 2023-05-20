import React, { useEffect, useState } from 'react';
import Table from './Table';

const Main = () => {

    const [result, setResult] = useState([]);
    const [pages, setPages] = useState(0);
    const [filters, setFilters] = useState('');

    const handleClick = (event) =>{
        setPages(event.target.value)
    }

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?_start=${pages}&_limit=10`)
        .then((response) => response.json())
        .then((data)=>{
            setResult(data)
        })
    },[pages])

    return (
        <>
            <div className='top-main-container'>
                <div className='top-main-body'>
                    <div className='main-container-top'>
                      <button>Users Data</button>
                      <input onChange={(e)=>setFilters(e.target.value)} type='text' placeholder='Search Title...' />
                    </div>
                    <Table data={result} search={filters}/>
                    <section className='pagination'>
                      <button value={0} onClick={(e)=>handleClick(e)}>1</button>
                      <button value={10} onClick={(e)=>handleClick(e)}>2</button>
                      <button value={20} onClick={(e)=>handleClick(e)}>3</button>
                      <button value={30} onClick={(e)=>handleClick(e)}>4</button>
                      <button value={40} onClick={(e)=>handleClick(e)}>5</button>
                      <button value={50} onClick={(e)=>handleClick(e)}>6</button>
                      <button value={60} onClick={(e)=>handleClick(e)}>7</button>
                      <button value={70} onClick={(e)=>handleClick(e)}>8</button>
                      <button value={80} onClick={(e)=>handleClick(e)}>9</button>
                      <button value={90} onClick={(e)=>handleClick(e)}>10</button>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Main;