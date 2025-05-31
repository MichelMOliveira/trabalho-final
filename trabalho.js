import { resolve } from "path";

export function geradorDeTagsDeIdentificacao(nome){
    return nome.toUpperCase()    
}

export function verificarSePodeSerAdotado(idade, porte){
    return idade===1 && porte==='M';
}

export function calcularConsumoDeRacao(nome, idade, peso){
    return peso * 300;
}

export function decidirTipoDeAtividadePorPorte(porte){
    switch (porte.toLowerCase()){
        case 'pequeno':
            return 'brincar dentro de casa';
        default:
            return 'brincar do lado de fora';
    }
}

export async function buscarDadoAsync(){
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve('Pipoca');
        },100);
    })
}