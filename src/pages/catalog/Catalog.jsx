import React, { useEffect } from 'react'
import './catalog.css';
import UseGlobalStore from '../../store/store';

export default function Catalog() {

    const variables = UseGlobalStore((state) => state.variables);
    const allBooks = variables.allNonBooks;
    useEffect( () => {
        const libros =  variables.getBooks("661a6d29775671f29cdf84a1")
        console.log(libros)
    }, []) 



  
    useEffect( () => {
      variables.getUserBooks();
    },[]);

  return (

    <div className="container row">
         <h1 className="text-danger my-title">Libros disponibles</h1>
            <div className="d-flex"> 
            {allBooks?.map((item, index) => {
                return (
                    <div
                    className="card"
                    /* style={{ minWidth: "225px", flex: "0 0 auto" }} */
                    key={index}
                >
                    <img
                        src="https://cdn.wallapop.com/images/10420/gj/ou/__/c10420p1000530357/i4861653056.jpg?pictureSize=W640"
                        className="card-img-top"
                        style={{ width: '16rem' }}
                        alt="..."
                    
                    />
                    <div className="card-body">
                        <h5 className="mb-2 text-lg font-bold">{item.title}</h5>
                        <h6 className="mb-2 text-lg font-bold">{item.state}</h6>
            
                    </div>
                </div>
            )})}
            <button onClick={() => console.log(allBooks)}>Botón</button>
            </div>

    </div>
  )
   
}