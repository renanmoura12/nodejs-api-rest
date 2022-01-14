module.exports = app => {

    app.get ('/atendimentos',(req, res) => res.send("GET ok"))


    app.post('/atendimentos',(req, res) => {
        console.log(req.body)
        res.send('POST ok')
    })

    
}
