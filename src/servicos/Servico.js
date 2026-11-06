export function pegarMovimentacoes() {
    return JSON.parse(localStorage.getItem("movimentacao")) || []
}

export function adicionarMovimentacoes(movimentacao) {

    const movimentacoesAntigas = pegarMovimentacoes()
    const movimentacaoComId = { ...movimentacao, identificacao: Date.now() }
    const movimentacoesAntigasComNovas = [...movimentacoesAntigas, movimentacaoComId]
    const novasMovimentacoesString = JSON.stringify(movimentacoesAntigasComNovas)

    localStorage.setItem("movimentacao", novasMovimentacoesString)
}

export function removerMovimentacao(movimentacao) {
    const movimentacoesAntigas = pegarMovimentacoes()
    const TodasAsMovimentacoesComUmaDeletada = movimentacoesAntigas.filter(
        (movimentacaoDaVez) => {
            const condicao = (movimentacaoDaVez.identificacao != movimentacao.identificacao)
            return condicao;
        }
    )

    localStorage.setItem("movimentacao", JSON.stringify(TodasAsMovimentacoesComUmaDeletada));
}