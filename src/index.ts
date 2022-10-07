import * as restify from 'restify';

const server = restify.createServer();
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());
server.listen(80, () => {
    console.log(`\n${ server.name } listening to ${ server.url }`);
});

server.post('/api/calls', async (req, res) => {
    console.log(JSON.stringify(req.body, undefined, 4))
    res.send(200);
})
