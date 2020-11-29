describe("GET method tests", function () {

    const getPostById = (id) => cy.api({method: 'GET', url: `/todos/${id}`});

    context("All Posts api", function () {

        it('should GET post=1 return 200 OK', function () {

            getPostById('1').then((res) => {
                expect(res.status).to.equal(200);
                // Json Object value check
                expect(res.body.userId).not.to.be.null;
                expect(res.body.id).not.to.be.null;
                expect(res.body.title).not.to.be.null;
                expect(res.body.body).not.to.be.null;
            })
        });

        it('should GET post=3 return 200 OK', function () {

            getPostById('3').then((res) => {
                expect(res.status).to.equal(200);
                // Json Object value check
                expect(res.body.userId).not.to.be.null;
                expect(res.body.id).not.to.be.null;
                expect(res.body.title).not.to.be.null;
                expect(res.body.body).not.to.be.null;
            })
        });
    })
});
