import style from '../styles/components/Create.module.css'

export function Create(){
    return(
        <div className={style.Register}>
            <form action="/section" method="post">
                <div className={style.Top}>
                    <p>Adicionar Colaborador</p>
                    <div>
                        <button>Cancelar</button>
                        <button type="submit">Salvar</button>
                    </div>
                </div>

                <div className={style.CreateCard}>

                    <div className={style.Create}>
                        <div>
                            <div className={style.Header}>
                                <div className={style.img}>
                                    <input type="file" name="photos" accept="image/*"/>
                                    <span className="material-icons" >
                                        camera_alt
                                    </span>
                                    
                                </div>
                                <div className={style.Name}>
                                    <input type="text" placeholder="Nome do colaborador"/>
                                </div>
                            </div>
                            <p className={style.Title}>Informações </p>
                            <div className={style.WorkerData}>
                                <div>
                                    <h3>CPF</h3>
                                    <input type="number" placeholder="Digite o CPF"/>
                                </div>
                                <div>
                                    <h3>E-mail</h3>
                                    <input type="email" placeholder="Digite o Email do colaborador"/>
                                </div>
                                <div>
                                    <h3>Telefone</h3>
                                    <input type="tel" placeholder="(xx) xxxx-xxxx"/>
                                </div>
                            </div> 

                            <div className={style.WorkerDuty}>
                                <div>
                                    <h3>Ocupação</h3>
                                    <div className={style.Times}>
                                        <input type="text" placeholder="Ocupação do colaborador?"/>
                                    </div>
                                </div>
                                
                                <div>
                                    <h3>Horario de expediente</h3>
                                    <div className={style.Times}>
                                        <input type="text"  placeholder="Horario de entrada"/>
                                        <input type="text"  placeholder="Horario de saída"/>
                                    </div>
                                </div>
                                <div>
                                    <h3>Horário de almoço</h3>
                                    <div className={style.Times}>
                                        <input type="text" placeholder="Horario de entrada"/>
                                        <input type="text" placeholder="Horario de saída"/>
                                    </div>    
                                </div>
                            </div>  
                        </div>
                    </div>   
                </div>
            </form>
        </div>
)}