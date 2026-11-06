import { ArrowCircleUp, ArrowCircleDown, Delete } from "@mui/icons-material";
import "../style/NegocioList.css";

function NegocioList({ movimentacoes, aoRemover }) {
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
          {movimentacoesFiltradas.map((movimentacaoDaVez) => {
            return (
              <tr key={movimentacaoDaVez.identificacao}>
                <td> {movimentacaoDaVez.data} </td>
                <td> {movimentacaoDaVez.descricao} </td>
                <td> {movimentacaoDaVez.categoria} </td>
                <td> {movimentacaoDaVez.valor} </td>
                <td className="acoes">
                  <div>
                    {movimentacaoDaVez.tipo == "entrada" ? (
                      <ArrowCircleUp
                        style={{ color: "#278b4b" }}
                      ></ArrowCircleUp>
                    ) : (
                      <ArrowCircleDown
                        style={{ color: "#d36358" }}
                      ></ArrowCircleDown>
                    )}
                  </div>

                  <button 
                  className="btn-excluir"
                  onClick={
                    () => {
                        aoRemover(movimentacaoDaVez);
                    }
                  }>
                    <Delete></Delete>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default NegocioList;
