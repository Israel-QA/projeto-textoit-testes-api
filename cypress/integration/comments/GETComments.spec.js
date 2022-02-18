import * as GETComments from '../../support/comments/services/requests/GETComments.request';

describe('Realizar uma requisicao do tipo GET', () => {
    it('Validar status da requisicao e email do comentario', () => {
        GETComments.buscarComentarioPeloNome('alias odio sit').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body[0].email).to.eq('Lew@alysha.tv');
       })
    })
})
