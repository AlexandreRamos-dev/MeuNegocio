import { ArrowCircleDown, ArrowCircleUp,} from "@mui/icons-material";
import "../style/App.css";

function SummaryCards() {
    const cardNome = ["Entradas", "Saídas", "Saldo"];
    
    return (
        <section className="conteudo-cartao">
            {cardNome.map((nome) => {
                return (
                    <div className="card-box">
                        <span>{nome}</span>
                        <span><ArrowCircleDown /></span>
                    </div>
                );
            })}
        </section>
    )
}

export default SummaryCards;