const path = require('path');
const {readFile, writeFile} = require('fs').promises;

async function main(){
    let pokemon = {
        name: "Pikachu",
        type: "Electric",
    };
    let dbs = [];
    dbs.push(pokemon);
    console.log(dbs)

    const buffer = await readFile(path.join(__dirname, "pokemon.txt"));
    const db = JSON.parse(buffer);
    console.log(db)
    db.push(pokemon);

    const stringToSave = JSON.stringify(db);
    await writeFile()
}

main();