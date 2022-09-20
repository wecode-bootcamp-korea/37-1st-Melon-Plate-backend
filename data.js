const fs = require('fs');
const util = require('util');

const users = fs.readFileSync(
    "users.csv",
    "utf-8"
);

const stores = fs.readFileSync(
    "stores.csv",
    "utf-8"
);

function csvToNode(csv) {
    const rows = csv.split("\n");
    const header = rows[0].split(",");
    const storeArray = [];
    for(let i =1; i < rows.length; i++) {
        let obj = {};
        let row = rows[i].split(",");
        for(let j=0; j < header.length-1; j++) {
            obj[header[j]] =row[j];
        }
        storeArray.push(obj);
    }
    console.log(storeArray);
    return storeArray;
}

const store = csvToNode(stores);
const user = csvToNode(users);

// user.map(use => {
//     const storeArray = [];
    
//     for (let i = 0; i < store.length; i++) {
//         if (store[i].id === use.id) {
//             storeArray.push(store[i]);
//         }
//     }
//     use.post = storeArray;
// })

// console.log(util.inspect(user, false, null, true));
console.log(store);
console.log(user);