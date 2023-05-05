

app.get('/', (req, res) => {
    const number = Math.floor(Math.random() * 7);
    res.send(phrases[number]+" - Container Id: "+os.hostname())
})

app.get('/', (req, res) => {
    const number = Math.floor(Math.random() * 7);
    res.send(phrases[number]+" - Container Id: "+os.hostname())
})