import Header from "./componentes/Header";
import Rodape from "./componentes/Rodape";
import SummaryCards from "./componentes/SummaryCards";
import NegocioForm from "./componentes/NegocioForm";
import NegocioList from "./componentes/NegocioList";
import * as servico from "./servicos/Servico";
import "./style/App.css";
import { useState } from "react";

function App() {
  const [movimentacoes, setMovimentacoes] = useState(() =>
    servico.pegarMovimentacoes(),
  );

  function adicionar(nova) {
    servico.adicionarMovimentacoes(nova);
    setMovimentacoes(servico.pegarMovimentacoes());
  }

  function remover(movimentacao) {
    servico.removerMovimentacao(movimentacao);
    setMovimentacoes(servico.pegarMovimentacoes());
  }
  return (
    <div>
      <Header />
      <SummaryCards movimentacoes={movimentacoes} />
      <NegocioForm aoAdicionar={adicionar} />
      <NegocioList movimentacoes={movimentacoes} aoRemover={remover} />
      <Rodape />
    </div>
  );
}

export default App;
