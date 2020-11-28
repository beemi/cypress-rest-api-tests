describe("GET method tests", function () {

    context("All Posts api", function () {

        it('should GET  all posts return 200 OK', function () {

            cy.api({
                method: "GET",
                url: "/posts"
            }).then((res) => {
                expect(res.status).to.equal(200);
                // Array length []
                expect(res.body).to.be.an('array');
                expect(res.body).to.have.length.greaterThan(10);
                expect(res.body[0].userId).not.to.be.null;
                expect(res.body[0].id).not.to.be.null;
                expect(res.body[0].title).not.to.be.null;
                expect(res.body[0].body).not.to.be.null;
            })
        });

        it('should GET  single post return 200 OK', function () {

            cy.api({
                method: "GET",
                url: "/posts/1"
            }).then((res) => {
                expect(res.status).to.equal(200);
                // Json Object value check
                expect(res.body.userId).not.to.be.null;
                expect(res.body.id).not.to.be.null;
                expect(res.body.title).not.to.be.null;
                expect(res.body.body).not.to.be.null;
            })
        });

        it('should GET  all post comments return 200 OK', function () {

            cy.api({
                method: "GET",
                url: "/posts/1/comments"
            }).then((res) => {
                expect(res.status).to.equal(200);
                // Array length []
                expect(res.body).to.be.an('array');
                expect(res.body).to.have.length.greaterThan(1);
                expect(res.body[0].postId).not.to.be.null;
                expect(res.body[0].id).not.to.be.null;
                expect(res.body[0].name).not.to.be.null;
                expect(res.body[0].email).not.to.be.null;
                expect(res.body[0].body).not.to.be.null;
            })
        });
    })
});
