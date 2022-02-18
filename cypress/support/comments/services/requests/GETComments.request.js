/// <reference types="cypress" />

function buscarComentarioPeloNome(nomeComentario){
    return cy.request({
        method: 'GET',
        url: 'comments/?name=' + nomeComentario,
        failOnStatusCode: false
    })
}

export {buscarComentarioPeloNome};