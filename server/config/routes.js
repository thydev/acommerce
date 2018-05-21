const path = require('path');

module.exports = (app) => {
    const baseUrl = '/api/';
    app.get(baseUrl, (req, res) => {
        // players.retrieveAll(req, res);
    })

    app.get(baseUrl + ':id', (req, res) => {
        // players.retrieveById(req, res);
    });

    app.post(baseUrl, (req, res) => {
        // players.create(req, res);
    });

    app.put(baseUrl + ':id', (req, res) => {
        // players.updateById(req, res);
    });

    app.delete(baseUrl + ':id', (req, res)=> {
        // players.removeById(req, res);
    });

    // app.post(baseUrl + 'quotes/:id', (req, res) => {
    //     players.createQuote(req, res);
    // });

    // app.post(baseUrl + 'quotes/vote/:id', (req, res) => {
    //     players.voteQuote(req, res);
    // });

    // app.delete(baseUrl + 'quotes/:id/:quote_id', (req, res) => {
    //     players.deleteQuote(req, res);
    // });
    // this route will be triggered if any of the routes above did not match
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
    });
}