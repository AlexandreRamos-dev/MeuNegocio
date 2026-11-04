export function pegarMovimentacoes() {
    return JSON.parse(localStorage.getItem("movimentacao")) || []
}

export function adicionarMovimentacoes(movimentacoes) {

    const movimentacoesAntigas = pegarMovimentacoes()
    const movimentacoesAntigasComNovas = [...movimentacoesAntigas, movimentacoes]
    const novasMovimentacoesString = JSON.stringify(movimentacoesAntigasComNovas)

    localStorage.setItem("movimentacao", novasMovimentacoesString)
}