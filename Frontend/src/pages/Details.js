/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import style from '../styles/Details.module.css'
import api from '../services/api';
import { useParams } from "react-router-dom";

 export default function Worker(){
    const { id } = useParams();

    const [workers, setWorkers] = useState([])

    useEffect(() => {
        api.get(`/Workers/${id}`).then((response)=>{
            setWorkers([response.data])
        })
        
    }, [id])
         
    console.log(workers)
 
    return(
        <div >
            <div className={style.Profile}>
                <div className={style.Top}>
                    <p>Detalhes do Colaborador</p>
                    <div>
                        <button>Inativar colaborador</button>
                        <button>Editar colaborador</button>
                    </div>
                </div>

                <div className={style.WorkerContent}>
                    {workers.map(worker =>(
                        <div className={style.WorkerCard}>
                            
                                <div className={style.Header}>
                                    
                                    <div className={style.img}>
                                        <img src={`http://localhost:3333/files/${worker.image}`} alt="Profile Img"/>
                                    </div>
                                    <div className={style.Name}>
                                        <p>{worker.name}</p>
                                        <span>Cadastrado em {worker.createdAt}</span>
                                    </div>
                                </div>
                                <h3 className={style.Title}>Informação pessoal</h3>
                                <div className={style.WorkerData}>
                                    <div>
                                        <h3>CPF</h3>
                                        <p>{worker.cpf}</p>
                                    </div>
                                    <div>
                                        <h3>Telefone</h3>
                                        <p>{worker.tel}</p>
                                    </div>
                                    <div>
                                        <h3>Email</h3>
                                        <p>{worker.email}</p>
                                    </div>
                                </div> 
                                <div className={style.WorkerDuty}>
                                    <div>
                                        <h3>Ocupação</h3>
                                        <p>{worker.ocupation}</p>
                                    </div>
                                    <div>
                                        <h3>Horario de expediente</h3>
                                        <p>{worker.entry_time} ás {worker.exit_time}</p>
                                    </div>
                                    <div>
                                        <h3>Horário de almoço</h3>
                                        <p>{worker.lunch_time} ás {worker.lunch_return}</p>
                                    </div>
                                </div>
                            
                        </div>
                    ))}
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
    )

}

