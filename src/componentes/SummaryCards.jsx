import { ArrowCircleDown, ArrowCircleUp } from "@mui/icons-material";
import "../style/App.css";

function SummaryCards({ movimentacoes }) {
  const entradas = movimentacoes
    .filter((item) => item.tipo === "entrada")
    .reduce((soma, item) => soma + item.valor, 0);

  const saidas = movimentacoes
    .filter((item) => item.tipo === "saida")
    .reduce((soma, item) => soma + item.valor, 0);

  const saldo = entradas - saidas;

  const cards = [
    { id: "entradas", titulo: "Entradas", valor: entradas },
    { id: "saidas", titulo: "Saídas", valor: saidas },
    { id: "saldo", titulo: "Saldo", valor: saldo },
  ];

  return (
    <section className="conteudo-cartao">
      {cards.map((card) => (
        <div key={card.id} className="card-box">
          <span>{card.titulo}</span>
          <p>R$ {card.valor.toFixed(2)}</p>
        </div>
      ))}
    </section>
  );
}

export default SummaryCards;
