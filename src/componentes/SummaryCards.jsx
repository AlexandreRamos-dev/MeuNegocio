import { ArrowCircleDown, ArrowCircleUp } from "@mui/icons-material";
import "../style/App.css";

function SummaryCards(movimentacoes) {
  const cardNome = ["Entradas", "Saídas", "Saldo"];

  return (
    <section className="conteudo-cartao">
      {cardNome.map((nome) => {
        return (
          <div className="card-box">
            <span>{nome}</span>
          </div>
        );
      })}
    </section>
  );
}

export default SummaryCards;
