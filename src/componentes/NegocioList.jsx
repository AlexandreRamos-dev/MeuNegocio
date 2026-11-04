import { useEffect, useState } from "react"
import * as servico from "../servicos/Servico"
import "../style/NegocioList.css"

function NegocioList({movimentacoes}) {

    const movimentacoesFiltradas = movimentacoes;

    return (
        <div className="container-da-tabela">
            <table className="lista-de-movimentacoes">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Descrição</th>
                        <th>Categoria</th>
                        <th>Valor</th>
                        <th>Tipo/Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movimentacoesFiltradas.map((movimentacaoDaVez) => {
                            return (
                                <tr>
                                    <td> {movimentacaoDaVez.data} </td>
                                    <td> {movimentacaoDaVez.descricao} </td>
                                    <td> {movimentacaoDaVez.categoria} </td>
                                    <td> {movimentacaoDaVez.valor} </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default NegocioList;