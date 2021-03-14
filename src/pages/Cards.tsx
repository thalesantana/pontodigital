import style from '../styles/Card.module.css'
import Nav from '../components/Nav'
import Link from 'next/link';

export default function Cards(){
    return(
        <div >
        <Nav/>
        <div className={style.CardsContent}>
            <div className={style.Top}>
                
                <p>Listagem de colaboradores</p>

                <div className={style.Inputs}>
                    <div>
                        <select id="order" name="order"  className={style.InputSearch}>
                            <option value="">Odernar por</option>
                            <option value="name">Nome</option>
                        </select>
                    </div>
                    
                    <div className={style.Search}>
                        <i className="material-icons"> search</i>
                        <input type="search" name="search" placeholder="Procurar" className={style.InputSearch}/>
                    </div>
                </div>

                

            </div>
            <div className={style.Cards}>
                <Link href="/Details">
                    <a >
                        <div className={style.Card}>
                            <img src="https://media-exp1.licdn.com/dms/image/C4D35AQG5O5w2-M9McA/profile-framedphoto-shrink_400_400/0/1613088973077?e=1615435200&v=beta&t=zGGBHaLiH7AF9UdB46Jx9XNkzipaC3lxLdG8IoJDkvo"/>
                            <p>Nome do Colaborador</p>
                        </div>
                    </a>
                </Link>
                <div className={style.Card}>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D35AQG5O5w2-M9McA/profile-framedphoto-shrink_400_400/0/1613088973077?e=1615435200&v=beta&t=zGGBHaLiH7AF9UdB46Jx9XNkzipaC3lxLdG8IoJDkvo"/>
                    <p>Nome do Colaborador</p>
                </div>
                <div className={style.Card}>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D35AQG5O5w2-M9McA/profile-framedphoto-shrink_400_400/0/1613088973077?e=1615435200&v=beta&t=zGGBHaLiH7AF9UdB46Jx9XNkzipaC3lxLdG8IoJDkvo"/>
                    <p>Nome do Colaborador</p>
                </div>
                <div className={style.Card}>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D35AQG5O5w2-M9McA/profile-framedphoto-shrink_400_400/0/1613088973077?e=1615435200&v=beta&t=zGGBHaLiH7AF9UdB46Jx9XNkzipaC3lxLdG8IoJDkvo"/>
                    <p>Nome do Colaborador</p>
                </div>
                <div className={style.Card}>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D35AQG5O5w2-M9McA/profile-framedphoto-shrink_400_400/0/1613088973077?e=1615435200&v=beta&t=zGGBHaLiH7AF9UdB46Jx9XNkzipaC3lxLdG8IoJDkvo"/>
                    <p>Nome do Colaborador</p>
                </div>
                <div className={style.Card}>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D35AQG5O5w2-M9McA/profile-framedphoto-shrink_400_400/0/1613088973077?e=1615435200&v=beta&t=zGGBHaLiH7AF9UdB46Jx9XNkzipaC3lxLdG8IoJDkvo"/>
                    <p>Nome do Colaborador</p>
                </div>
                <div className={style.Card}>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D35AQG5O5w2-M9McA/profile-framedphoto-shrink_400_400/0/1613088973077?e=1615435200&v=beta&t=zGGBHaLiH7AF9UdB46Jx9XNkzipaC3lxLdG8IoJDkvo"/>
                    <p>Nome do Colaborador</p>
                </div>
                <div className={style.Card}>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D35AQG5O5w2-M9McA/profile-framedphoto-shrink_400_400/0/1613088973077?e=1615435200&v=beta&t=zGGBHaLiH7AF9UdB46Jx9XNkzipaC3lxLdG8IoJDkvo"/>
                    <p>Nome do Colaborador</p>
                </div>
                <div className={style.Card}>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D35AQG5O5w2-M9McA/profile-framedphoto-shrink_400_400/0/1613088973077?e=1615435200&v=beta&t=zGGBHaLiH7AF9UdB46Jx9XNkzipaC3lxLdG8IoJDkvo"/>
                    <p>Nome do Colaborador</p>
                </div>
                <div className={style.Card}>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D35AQG5O5w2-M9McA/profile-framedphoto-shrink_400_400/0/1613088973077?e=1615435200&v=beta&t=zGGBHaLiH7AF9UdB46Jx9XNkzipaC3lxLdG8IoJDkvo"/>
                    <p>Nome do Colaborador</p>
                </div>
            </div>
        </div>
    </div>
    )
}