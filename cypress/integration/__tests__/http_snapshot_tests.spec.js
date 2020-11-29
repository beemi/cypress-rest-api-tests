describe("POST method tests", function () {

    const chance = require("chance");

    context("POST create resources", function () {

        it('should be able to create resources,200 OK', function () {

            let user_id = chance().integer({min: 1, max: 20000});
            let id;

            cy.api({
                method: "POST",
                url: "/posts",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    title: chance().word(),
                    body: chance().paragraph(),
                    userId: user_id,
                })
            }).its("body").toMatchSnapshot({
                "ignoreExtraFields": false,
                "ignoreExtraArrayItems": false,
                "normalizeJson": true,
            });
        });
    })

});
