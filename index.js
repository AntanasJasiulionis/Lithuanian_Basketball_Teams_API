import express from "express";
import teams from "./teams.json" assert {type: "json"};
import localization from "./localization.json" assert {type: "json"};

const app = express();
const teamsData = teams;
const localizationData = localization;
const port = 3000;
//set language default to en - 0
let language = 0;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index.ejs", {content: localizationData[language]});
});
app.get("/language/:name", (req, res) => {
    language = localizationData.findIndex((index) => index.language === req.params.name);
    res.redirect("/");
});

app.get("/team/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const result = teamsData.find((team) => team.id === id);
    if(result){
        res.json(result);
    } else {
        res.status(404).json({error: `Could not find team with id: ${id}`});
    }
});

app.get("/search", (req, res) => {
    let playersData = [];
    let starting = [];
    let bench = [];
    let coach = [];
    //Puts everything inside of all starting arrays into one array 
    teamsData.forEach(team => {
        starting.push(team.starting);
        starting = starting.flat();
    });
    //Pust everything inside of all bench arrays into one array
    teamsData.forEach(team => {
        bench.push(team.bench);
        bench = bench.flat();
    });
    // Puts all coaches into the playersData
    teamsData.forEach(team => {
        coach.push(team.coach);
        coach = coach.flat();
    });
    // Merges starting, bench and coach arrays into single array
    playersData.push(starting);
    playersData.push(bench);
    playersData.push(coach);
    playersData = playersData.flat();

    const position = req.query.position;
    const name = req.query.name;
    const lastname = req.query.lastname;
    //Search by name
    if(name){
        playersData = playersData.filter((person) => person.name === name);
        if(playersData.length === 0) return res.status(404).json({error: `Cannot find by the name: ${name}.`});
    }
    //Search by lastname
    if(lastname){
        playersData = playersData.filter((person) => person.lastname === lastname);
        if(playersData.length === 0) return res.status(404).json({error: `Cannot find by the lastname: ${lastname}.`});
    }
    //Searching by position
    if(position){
        playersData = playersData.filter((person) => person.position === position);
        if(playersData.length === 0) return res.status(404).json({error: `Can't find by position: ${position}.`});
    }
    res.json(playersData);
});

app.get("/all", (req, res) => {
    res.json(teamsData);
});

app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});