import React, {useState, useEffect} from 'react'
import style from '../styles/Create.module.css'
import api from '../services/api'
import { useParams } from "react-router-dom";

export default function Edit (){
    const { id } = useParams();
    
    const [workers, setWorkers] = useState([])

    useEffect(() => {
        api.get(`/worker/edit/${id}`).then((response)=>{
                setWorkers([response.data])
                //console.log([response.data])
        })
        
    }, [id])

    console.log(workers[0])
        return(
            <div>
                <div className={style.Register}>
                    <form  method="PUT">
                        <div className={style.Top}>
                            <p>Adicionar Colaborador</p>
                            <div>
                                <button>Cancelar</button>
                                <button type="submit">Salvar</button>
                            </div>
                        </div>
    
                        <div className={style.CreateCard}>
                        
                            <div className={style.Create} >
                         {workers.map((worker) =>(
                                <div key={worker.id}>
                                    <div className={style.Header}>
                                        <div className={style.img}>
                                            <input 
                                                type="file"
                                                accept="image/*"
                                                
                                            />
                                            <span className="material-icons" >
                                                camera_alt
                                            </span>
                                            
                                        </div>
                                        <div className={style.Name}>
                                        
                                            <input 
                                                type="text" 
                                                name="name" 
                                                placeholder="Nome do colaborador"
                                                value={worker.name}
                                            /> 
                                        </div>
                                    </div>
                                    <p className={style.Title}>Informações </p>
                                    <div className={style.WorkerData}>
                                        <div>
                                            <h3>CPF</h3>
                                            <input 
                                            
                                            type="number" 
                                            name="cpf" 
                                            placeholder="Digite o CPF"
                                            value={worker.cpf}
                                            defaltvalue={worker.cpf}
                                            
                                        />
                                        </div>
                                        <div>
                                            <h3>E-mail</h3>
                                            <input 
                                                
                                                type="email" 
                                                name="email" 
                                                placeholder="Digite o Email do colaborador"
                                                defaltvalue={worker.email}
                                            />
                                        </div>
                                        <div>
                                            <h3>Telefone</h3>
                                            <input 
                                                
                                                type="tel" 
                                                name="tel" 
                                                placeholder="(xx) xxxx-xxxx"
                                                defaltvalue={worker.tel}
                                            />
                                        </div>
                                    </div> 
    
                                    <div className={style.WorkerDuty}>
                                        <div>
                                            <h3>Ocupação</h3>
                                            <div className={style.Times}>
                                                <input 
                                                    
                                                    type="text" 
                                                    name="ocupation"
                                                    placeholder="Ocupação do colaborador?"
                                                    defaltvalue={worker.ocupation}
                                                />
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <h3>Horario de expediente</h3>
                                            <div className={style.Times}>
                                                <input 
                                                    
                                                    type="text" 
                                                    name="entry_time" 
                                                    placeholder="Horario de entrada"
                                                    defaltvalue={worker.entry_time}
                                                />
                                                <input 
                                                    
                                                    type="text"  
                                                    name="exit_time" 
                                                    placeholder="Horario de saída"
                                                    defaltvalue={worker.lunch_time}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h3>Horário de almoço</h3>
                                            <div className={style.Times}>
                                                <input 
                                                    
                                                    type="text" 
                                                    name="lunch_entry" 
                                                    placeholder="Horario de entrada"
                                                    defaltvalue={worker.lunch_entry}
                                                />
                                                <input 
                                                    
                                                    type="text" 
                                                    name="lunch_return" 
                                                    placeholder="Horario de saída"
                                                    defaltvalue={worker.lunch_return}
                                                />
                                            </div>    
                                        </div>
                                    </div>  
                                </div>
                                ))}
                            </div>   
                            
                        </div>
                    </form>
                </div>
            </div>
        )
    
}