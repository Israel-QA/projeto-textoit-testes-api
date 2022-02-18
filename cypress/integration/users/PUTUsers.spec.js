import * as PUTUsers from '../../support/users/services/requests/PUTUsers.request';

describe('Realizar uma requisição do tipo PUT', () => {
    it('Validar status da requisicao e alterar o email, lat e lng do usuario com o id 5', () => {
        PUTUsers.alterarUsuarios(5).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.email).to.eq('lucio@annie.ca');
            expect(response.body.address.geo.lat).to.eq('-50.9999');
            expect(response.body.address.geo.lng).to.eq('60.9999');
        })
    })
})