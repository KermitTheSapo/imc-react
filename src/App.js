import React, {Component} from "react";
import * as S from "./components/style.js"

export default class Imc extends Component {
  state = {
    peso: "",
    altura: "",
    resultado: ""
  }

  handleChangePeso = (e) => {
    this.setState({
      peso: e.target.value
    })
  }

  handleChangeAltura = (e) => {
    this.setState({
      altura: e.target.value
    })
  }

  resultado = () => {
    this.setState({
      resultado: this.state.peso / (this.state.altura ** 2)
    })
  }

  render(){
    return(
      <S.Div>
        <S.globalStyle/>
        <h1>IMC</h1>
        <S.Form action="">
          <S.Altura>
            <label htmlFor="" name="altura">Digite sua altura:</label>
            <input type="number" name="altura" value={this.state.altura} onChange={this.handleChangeAltura} placeholder="altura"/>
          </S.Altura>
          <S.Peso>
            <label htmlFor="" name="peso">Digite seu peso:</label>
            <input type="number" name="peso" value={this.state.peso} onChange={this.handleChangePeso} placeholder="peso"/>
          </S.Peso>
        </S.Form>
        
        <button onClick={this.resultado}>Calcular</button>
        <p>{this.state.resultado}</p>
      </S.Div>
    )
  }
}