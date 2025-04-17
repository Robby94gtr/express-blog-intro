//  importo express

const express = require('express');

// inizializzazione di express nella variabile app

const app = express();

// definizionedel numero di porta

const port = 3000;

// impostazione dello strumento per recuperare gli asset statici
app.use(express.static('public'));

// definizione della rotta base

app.get('/', (req, res) => {
    res.send('Server del mio blog');
})

app.get('/menudeidolci', (req, res) => {
    const menuDeiDolci = [
        {
            title: "Ciambellone",
            content: "Ciambellone",
            image: "<img src=./imgs/ciambellone.jpeg>",
            tags: ["tag1", "tag2", "tag3"]
        },{
            title: "Cracker Barbabietola",
            content: "Cracker",
            image: "<img src=./imgs/cracker_barbabietola.jpeg>",
            tags: ["tag1", "tag2", "tag3"]
        },{
            title: "Pane fritto dolce",
            content: "Pane fritto dolce",
            image: "<img src=./imgs/pane_fritto_dolce.jpeg>",
            tags: ["tag1", "tag2", "tag3"]
        },{
            title: "Pasta Barbabietola",
            content: "Pasta Barbabietola",
            image: "<img src=./imgs/pasta_barbabietola.jpeg>",
            tags: ["tag1", "tag2", "tag3"]
        },{
            title: "Torta Paesana",
            content: "Torta Paesana",
            image: "<img src=./imgs/torta_paesana.jpeg>",
            tags: ["tag1", "tag2", "tag3"]
        },
    ]

    res.json(menuDeiDolci)
})

// inserimento del metodo che lascia in ascolto il server

app.listen(port, () => {
    console.log(`server in ascolto`)
})