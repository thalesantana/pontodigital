/* eslint-disable jsx-a11y/alt-text */
import '../styles/components/Nav.css';
import { Link } from 'react-router-dom'
import {css} from '@emotion/css'
import React,{ useState } from 'react'
export default function  Nav() {
  

    const [display, setDisplay] = useState("block")

    const setStyle = (status) => {
      if(display === "block")
        setDisplay(status)
      else if(display === "none")
        setDisplay("block")
    }

    const SideBar = css`  
    width: 6.5%;
    height: 100%;
    bottom: 0;
    left: 0;
    box-shadow: 4px 4px 3px 2px rgba(217, 217, 217, 0.8);
    position: absolute;
    display:${display};
    text-align: center;`
  
  return (
    <div>
        <header>
        <title>Ponto Digital</title>
        <meta name="viewport" content="width=device-width"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"/>
      </header>
      
        <div className= "UserHeader">
            <span onClick={() => setStyle("none")} className="material-icons">dehaze</span> 
            <div>
              <i className="material-icons" >notifications_none</i>
              <i className="material-icons">more_horiz</i>
              <p>Nome da pessoa</p>
              <img src="https://avatars.githubusercontent.com/u/72896088?s=460&u=dfa321b325c407f8101a92c90dbc7087d2674c34&v=4://media-exp1.licdn.com/dms/image/C4D35AQG5O5w2-M9McA/profile-framedphoto-shrink_400_400/0/1613088973077?e=1615435200&v=beta&t=zGGBHaLiH7AF9UdB46Jx9XNkzipaC3lxLdG8IoJDkvo"/>
            </div>     
        </div>

        <div className="Content">
          <div className={SideBar}>
            <div className="list">
              <Link to="/Workers">
                <i className="material-icons">dehaze</i> 
                <p> Listagem de colaboradores</p>
              </Link>
              <div className="BorderBotton"/>
            </div>
            
            <div className="add">
              <Link to="/Create">
                <i className="material-icons">person_add</i>
                <p>Adicionar um colaborador</p>  
              </Link>
            </div>
          </div>
        </div>
        
    </div>
  )}