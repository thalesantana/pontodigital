import style from '../styles/Details.module.css'
import Nav from '../components/Nav'

export default function Details(){
    return(
        <div >
            <Nav/>
            <div className={style.Profile}>
                <div className={style.Top}>
                    <p>Detalhes do Colaborador</p>
                    <div>
                        <button>Inativar colaborador</button>
                        <button>Editar colaborador</button>
                    </div>
                </div>

                <div className={style.WorkerContent}>

                    <div className={style.WorkerCard}>

                        
                            <div className={style.Header}>
                                <div className={style.img}>
                                    <img src="https://media-exp1.licdn.com/dms/image/C4D35AQG5O5w2-M9McA/profile-framedphoto-shrink_400_400/0/1613088973077?e=1615435200&v=beta&t=zGGBHaLiH7AF9UdB46Jx9XNkzipaC3lxLdG8IoJDkvo"/>
                                </div>
                                <div className={style.Name}>
                                    <p>Nome do Colaborador</p>
                                    <span>Cadastrado em 28/12/2020</span>
                                </div>
                            </div>
                            <h3 className={style.Title}>Informação pessoal</h3>
                            <div className={style.WorkerData}>
                                <div>
                                    <h3>CPF</h3>
                                    <p>455.111.555-33</p>
                                </div>
                                <div>
                                    <h3>Telefone</h3>
                                    <p>19 99190-0101</p>
                                </div>
                                <div>
                                    <h3>Email</h3>
                                    <p>email@colaborador.com.br</p>
                                </div>
                            </div> 
                            <div className={style.WorkerDuty}>
                                <div>
                                    <h3>Ocupação</h3>
                                    <p>Desenvolvedor Jr</p>
                                </div>
                                <div>
                                    <h3>Horario de expediente</h3>
                                    <p>08:00 ás 17:30</p>
                                </div>
                                <div>
                                    <h3>Horário de almoço</h3>
                                    <p>12:00 ás 13:00</p>
                                </div>
                            </div>
                        
                        
                    </div>
                    
                    <div className={style.TimeSheet}>
                        <div className={style.TimeTitle}><p>Histórico de entrada e saída</p></div>
                        <div className={style.GridSheet}>

                            <div className={style.Day}>
                                <div className={style.Date}>
                                    <p>25</p>
                                    <span>Dezembro</span> 
                                </div>
                                <div className={style.DayDetails}>
                                    <div className={style.DayTimes}>
                                        <div><h4>Expediente</h4></div>
                                        <div>
                                            <p>Entrou</p>
                                            <span>08:30</span>
                                        </div>
                                        <div>
                                            <p>Saiu</p>
                                            <span>17:50</span>
                                        </div>    
                                    </div>

                                    <div className={style.DayTimes}>
                                        <div><h4>Almoço</h4></div>
                                        <div>
                                            <p>Entrou</p>
                                            <span>12:00</span>
                                        </div>
                                        <div>
                                            <p>Saiu</p>
                                            <span>13:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={style.Day}>
                                <div className={style.Date}>
                                    <p>25</p>
                                    <span>Dezembro</span> 
                                </div>
                                <div className={style.DayDetails}>
                                    <div className={style.DayTimes}>
                                        <div><h4>Expediente</h4></div>
                                        <div>
                                            <p>Entrou</p>
                                            <span>08:30</span>
                                        </div>
                                        <div>
                                            <p>Saiu</p>
                                            <span>17:50</span>
                                        </div>    
                                    </div>

                                    <div className={style.DayTimes}>
                                        <div><h4>Almoço</h4></div>
                                        <div>
                                            <p>Entrou</p>
                                            <span>12:00</span>
                                        </div>
                                        <div>
                                            <p>Saiu</p>
                                            <span>13:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={style.Day}>
                                <div className={style.Date}>
                                    <p>25</p>
                                    <span>Dezembro</span> 
                                </div>
                                <div className={style.DayDetails}>
                                    <div className={style.DayTimes}>
                                        <div><h4>Expediente</h4></div>
                                        <div>
                                            <p>Entrou</p>
                                            <span>08:30</span>
                                        </div>
                                        <div>
                                            <p>Saiu</p>
                                            <span>17:50</span>
                                        </div>    
                                    </div>

                                    <div className={style.DayTimes}>
                                        <div><h4>Almoço</h4></div>
                                        <div>
                                            <p>Entrou</p>
                                            <span>12:00</span>
                                        </div>
                                        <div>
                                            <p>Saiu</p>
                                            <span>13:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={style.Day}>
                                <div className={style.Date}>
                                    <p>25</p>
                                    <span>Dezembro</span> 
                                </div>
                                <div className={style.DayDetails}>
                                    <div className={style.DayTimes}>
                                        <div><h4>Expediente</h4></div>
                                        <div>
                                            <p>Entrou</p>
                                            <span>08:30</span>
                                        </div>
                                        <div>
                                            <p>Saiu</p>
                                            <span>17:50</span>
                                        </div>    
                                    </div>

                                    <div className={style.DayTimes}>
                                        <div><h4>Almoço</h4></div>
                                        <div>
                                            <p>Entrou</p>
                                            <span>12:00</span>
                                        </div>
                                        <div>
                                            <p>Saiu</p>
                                            <span>13:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div className={style.Day}>
                                <div className={style.Date}>
                                    <p>25</p>
                                    <span>Dezembro</span> 
                                </div>
                                <div className={style.DayDetails}>
                                    <div className={style.DayTimes}>
                                        <div><h4>Expediente</h4></div>
                                        <div>
                                            <p>Entrou</p>
                                            <span>08:30</span>
                                        </div>
                                        <div>
                                            <p>Saiu</p>
                                            <span>17:50</span>
                                        </div>    
                                    </div>

                                    <div className={style.DayTimes}>
                                        <div><h4>Almoço</h4></div>
                                        <div>
                                            <p>Entrou</p>
                                            <span>12:00</span>
                                        </div>
                                        <div>
                                            <p>Saiu</p>
                                            <span>13:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={style.Day}>
                                <div className={style.Date}>
                                    <p>25</p>
                                    <span>Dezembro</span> 
                                </div>
                                <div className={style.DayDetails}>
                                    <div className={style.DayTimes}>
                                        <div><h4>Expediente</h4></div>
                                        <div>
                                            <p>Entrou</p>
                                            <span>08:30</span>
                                        </div>
                                        <div>
                                            <p>Saiu</p>
                                            <span>17:50</span>
                                        </div>    
                                    </div>

                                    <div className={style.DayTimes}>
                                        <div><h4>Almoço</h4></div>
                                        <div>
                                            <p>Entrou</p>
                                            <span>12:00</span>
                                        </div>
                                        <div>
                                            <p>Saiu</p>
                                            <span>13:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )}