import React, { Component } from 'react';
import '../styles/Card.css';
import api from '../services/api';


class Cards extends Component{
    state = {
        datas: [],
    };
            
    async componentDidMount(){
        const response =  await api.get('Workers');
        
        this.setState({ datas: response.data}) 
        //console.log(datas: response.data)
    }

    render(){
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
                            <input type="search" name="search" placeholder="Procurar" className="InputSearch"/>
                        </div>
                    </div>
            </div>
            <div >
                <section className="Cards">
                    {this.state.datas.map(Card => (
                        <a href={`Workers/${Card.id}`} key={Card.id}>
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
   
}

export default Cards;