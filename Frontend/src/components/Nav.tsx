/* eslint-disable jsx-a11y/alt-text */
import styles from '../styles/components/Nav.module.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
        <header>
        <title>Nome Colaborador</title>
        <meta name="viewport" content="width=device-width, initial=scale=1.0"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"/>
      </header>
      
        <div className={styles.UserHeader}>
            <span className="material-icons">dehaze</span> 
            <div>
              <i className="material-icons" >notifications_none</i>
              <i className="material-icons">more_horiz</i>
              <p>Nome da pessoa</p>
              <img src="https://media-exp1.licdn.com/dms/image/C4D35AQG5O5w2-M9McA/profile-framedphoto-shrink_400_400/0/1613088973077?e=1615435200&v=beta&t=zGGBHaLiH7AF9UdB46Jx9XNkzipaC3lxLdG8IoJDkvo"/>
            </div>     
        </div>

        <div className={styles.Content}>
          <div className={styles.SideBar}>
            <div className={styles.list}>
              <Link to="/Cards">
                <i className="material-icons">dehaze</i> 
                <p> Listagem de colaboradores</p>
              </Link>
              <div className={styles.BorderBotton}/>
            </div>
            
            <div className={styles.add}>
              <Link to="/Create">
                <i className="material-icons">person_add</i>
                <p>Adicionar um colaborador</p>  
              </Link>
            </div>
          </div>
        </div>
        
    </div>
  )}