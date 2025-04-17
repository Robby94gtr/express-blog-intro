//  importo express

const express = require('express');

// inizializzazione di express nella variabile app

const app = express();

// definizionedel numero di porta

const port = 3000;

// definizione della rotta base

app.get('/', (req, res) => {
    res.send('Hello World');
})

// inserimento del metodo che lascia in ascolto il server

app.listen(port, () => {
    console.log(`server in ascolto`)
})