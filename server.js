import express from 'express';
import { engine } from 'express-handlebars';


const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');


const students =[ 
    {
        id: 1,
        name: "Shahd",
    },
    {
        id: 2,
        name: "Adel",
    },
    {
        id: 3,
        name: "Hamza",
    },
    {
        id: 4,
        name: "Rayan",
    },
    {
        id: 5,
        name: "Shahudaa",
    },
];


app.get("/students", (req, res) => {
res.render("students" , { students });
});
app.listen(3000);