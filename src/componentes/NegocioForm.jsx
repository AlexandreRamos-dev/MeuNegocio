import { useState } from "react";
import "../style/NegocioForm.css";

const estadoInicial = {
    data: "",
    descricao: "",
    valor: "",
    categoria: "",
    tipo: "entrada",
}

function NegocioForm({aoAdicionar}) {
    const [movimentacao, setMovimentacao] = useState(estadoInicial);

    function atualizarCampo(evento) {
        const { name, value } = evento.target;
        setMovimentacao({ ...movimentacao, [name]: value })
    }

    function enviar(evento) {
        evento.preventDefault();

        aoAdicionar({
            ...movimentacao, 
            valor: Number(movimentacao.valor),
            identificacao: crypto.randomUUID(),
        });
        setMovimentacao(estadoInicial);
    }

    return (
        <form  className="negocio-form" onSubmit={enviar}>
            <div className="grupo-input">
                <label>
                    Data
                    <input type="date" name="data" value={movimentacao.data} onChange={atualizarCampo} />
                </label>

                <label>
                    Descrição
                    <input type="text"  name="descricao" value={movimentacao.descricao} onChange={atualizarCampo} />
                </label>
            </div>

            <div className="grupo-input">
                <label>
                    valor
                    <input type="number" name="valor" value={movimentacao.valor} onChange={atualizarCampo} />
                </label>

                <label>
                    Categoria
                    <select name="categoria" value={movimentacao.categoria} onChange={atualizarCampo}>
                        <option value="">Selecione...</option>
                        <option value="compras"> Compras </option>
                        <option value="alimentacao"> alimentação </option>
                        <option value="transporte"> Transporte </option>
                        <option value="educacao"> Educação </option>
                        <option value="saude"> Saude </option>
                        <option value="lazer"> Lazer </option>
                        <option value="outros"> Outros </option>
                    </select>
                </label>
            </div>

            <div className="grupo-tipo">
                <p>Tipo</p>
                <label>
                    <input 
                    type="radio"
                     name="tipo"
                    value="entrada"
                    checked={movimentacao.tipo === "entrada"}
                    onChange={atualizarCampo}
                    />
                    Entrada
                </label>

                <label>
                    <input 
                    type="radio"
                     name="tipo"
                    value="saida"
                    checked={movimentacao.tipo === "saida"}
                    onChange={atualizarCampo}
                    />
                    Despesa
                </label>
            </div>

            <button type="submit"> Adicionar </button>
        </form>
    )
}

export default NegocioForm; 