import * as POSTUsers from '../../support/users/services/requests/POSTUsers.request';

describe('Realizar uma requisição do tipo POST', () => {
    it('Validar status da requisicao e id do usuario', () => {
        POSTUsers.addUsers().should((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.id).to.eq(11);
        })
    })
})