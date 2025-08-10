const nomes = ["Laer", "Gaucho", "Vitor", "Davi", "Roger", "Joao", "Mateus"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)