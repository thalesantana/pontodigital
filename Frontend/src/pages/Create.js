import style from "../styles/Create.module.css";
import React, { Component } from "react";
import api from "../services/api";

export default class Create extends Component {
  state = {
    image: null,
    name: "",
    cpf: "",
    email: "",
    tel: "",
    ocupation: "",
    entry_time: "",
    exit_time: "",
    lunch_entry: "",
    lunch_return: "",
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("image", this.state.image);
    data.append("name", this.state.name);
    data.append("cpf", this.state.cpf);
    data.append("email", this.state.email);
    data.append("tel", this.state.tel);
    data.append("ocupation", this.state.ocupation);
    data.append("entry_time", this.state.entry_time);
    data.append("exit_time", this.state.exit_time);
    data.append("lunch_entry", this.state.lunch_entry);
    data.append("lunch_return", this.state.lunch_return);

    //console.log(this.state)
    const results = await api.post("Post", data);
    const id = results.data.id;
    console.log(id);

    this.props.history.push(`/Workers/${id}`);
  };
  handleImageChange = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  render() {
    return (
      <div>
        <div className={style.Register}>
          <form method="post" onSubmit={this.handleSubmit}>
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
                      <input
                        onChange={this.handleImageChange}
                        type="file"
                        accept="image/*"
                      />
                      <span className="material-icons">camera_alt</span>
                    </div>
                    <div className={style.Name}>
                      <input
                        onChange={this.handleChange}
                        type="text"
                        name="name"
                        placeholder="Nome do colaborador"
                        value={this.state.name}
                      />
                    </div>
                  </div>
                  <p className={style.Title}>Informações </p>
                  <div className={style.WorkerData}>
                    <div>
                      <h3>CPF</h3>
                      <input
                        onChange={this.handleChange}
                        type="number"
                        name="cpf"
                        placeholder="Digite o CPF"
                        value={this.state.number}
                      />
                    </div>
                    <div>
                      <h3>E-mail</h3>
                      <input
                        onChange={this.handleChange}
                        type="email"
                        name="email"
                        placeholder="Digite o Email do colaborador"
                        value={this.state.email}
                      />
                    </div>
                    <div>
                      <h3>Telefone</h3>
                      <input
                        onChange={this.handleChange}
                        type="tel"
                        name="tel"
                        placeholder="(xx) xxxx-xxxx"
                        value={this.state.tel}
                      />
                    </div>
                  </div>

                  <div className={style.WorkerDuty}>
                    <div>
                      <h3>Ocupação</h3>
                      <div className={style.Times}>
                        <input
                          onChange={this.handleChange}
                          type="text"
                          name="ocupation"
                          placeholder="Ocupação do colaborador?"
                          value={this.state.ocupation}
                        />
                      </div>
                    </div>

                    <div>
                      <h3>Horario de expediente</h3>
                      <div className={style.Times}>
                        <input
                          onChange={this.handleChange}
                          type="text"
                          name="entry_time"
                          placeholder="Horario de entrada"
                          value={this.state.entry_time}
                        />
                        <input
                          onChange={this.handleChange}
                          type="text"
                          name="exit_time"
                          placeholder="Horario de saída"
                          value={this.state.exit_time}
                        />
                      </div>
                    </div>
                    <div>
                      <h3>Horário de almoço</h3>
                      <div className={style.Times}>
                        <input
                          onChange={this.handleChange}
                          type="text"
                          name="lunch_entry"
                          placeholder="Horario de entrada"
                          value={this.state.lunch_entry}
                        />
                        <input
                          onChange={this.handleChange}
                          type="text"
                          name="lunch_return"
                          placeholder="Horario de saída"
                          value={this.state.lunch_return}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
