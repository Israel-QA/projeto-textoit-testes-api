/// <reference types="cypress"/>

function alterarUsuarios(idUsuario) {
    return cy.request({
        method: 'PUT',
        url: `users/${idUsuario}`,
        failOnStatusCode: false,
        body: {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "lucio@annie.ca",
            "address": {
              "street": "Skiles Walks",
              "suite": "Suite 351",
              "city": "Roscoeview",
              "zipcode": "33263",
              "geo": {
                "lat": "-50.9999",
                "lng": "60.9999"
              }
            },
            "phone": "(254)954-1289",
            "website": "demarco.info",
            "company": {
              "name": "Keebler LLC",
              "catchPhrase": "User-centric fault-tolerant solution",
              "bs": "revolutionize end-to-end systems"
            }
          }
    })
}

export { alterarUsuarios };