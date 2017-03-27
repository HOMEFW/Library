'use strict'

module.exports = function(app){
    console.log('Webhook running');
    app.post('/webhook', function(req, res){
        console.log('Activate webhook!!!');
        console.log(req.body);
        res.status(200).send();
    });
};