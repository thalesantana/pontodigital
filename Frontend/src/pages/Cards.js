import React, { useEffect, useState } from 'react';
import '../styles/Card.css';
import api from '../services/api';
//import {css} from '@emotion/css'

export default function Cards() {
    const [workers, setWorkers] = useState([])
    const[search, setSearch] = useState('')
    const [filteredWorkers,setfilteredWorkers] = useState([])
    
    useEffect(() =>{
        api.get(`workers`).then((response)=>{
            setWorkers(response.data)
    })
        //console.log(datas: response.data)
    }, [])
    useEffect(() => {
        setfilteredWorkers(
            workers.filter(worker =>{
                return worker.name.toLowerCase().includes(search.toLowerCase())})
        )
    }, [search,workers])

        return(
            <div className="CardsContent">
                <div className="Top"> 
                    <p>Listagem de colaboradores</p>
    
                    <div className="Inputs">
                        <div>
                            <select id="order" name="order"  className="InputSearch">
                                <option value="">Odernar por</option>
                                <option value="name">Nome</option>
                            </select>
                        </div>
                        
                        <div className="Search">
                            <i className="material-icons"> search</i>
                            <input onChange={e => setSearch(e.target.value)} type="search" name="search" placeholder="Procurar" className="InputSearch"/>
                        </div>
                    </div>
            </div>
            <div >
                <section className="Cards">
                    {filteredWorkers.map((Card) =>(
                        <a href={`worker/${Card.id}`} key={Card.id}>
                        <div className="Card"  >
                            <img src={`http://localhost:3333/files/${Card.image}`} alt ="Worker_Img"/>
                            <p>{Card.name}</p>
                        </div>
                        </a>
                    ))}
                </section>
            </div>
            </div>
        )  
}

