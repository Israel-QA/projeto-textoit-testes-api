/// <reference types="cypress"/>

function addUsers() {
    return cy.request({
        method: 'POST',
        url: 'users',
        failOnStatusCode: false,
        body: {
            "id": 11,
            "name": "Nathan Tomás Drumond",
            "username": "nathan.drumond",
            "email": "nathan.drumond@teste.com",
            "address": {
                "street": "Rua Seis",
                "suite": "Suite 203",
                "city": "Jaboatão dos Guararapes",
                "zipcode": "54330-425",
                "geo": {
                    "lat": "-25.2386",
                    "lng": "33.2232"
                }
            },
            "phone": "(63) 99118-2697",
            "website": "nata.drumond",
            "company": {
                "name": "Nathan LLC",
                "catchPhrase": "User-centric fault-tolerant solution",
                "bs": "revolutionize end-to-end systems"
            }
        }
    })
}

export { addUsers };