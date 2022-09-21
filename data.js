require('dotenv').config();
const fs = require('fs');
const  database  = require("./src/models/dataSource");

const users = fs.readFileSync(
    "users.csv",
    "utf-8"
);

function csvToNode(csv) {
    const rows = csv.split("\n");
    const header = rows[0].split(",");
    const usersArray = [];
    for(let i =1; i < rows.length; i++) {
        let obj = {};
        let row = rows[i].split(",");
        for(let j=0; j < header.length-1; j++) {
            obj[header[j]] =row[j];
        }
        usersArray.push(obj);
    }

    return usersArray;
}

const user = csvToNode (users);
for (i in user) {
    
      console.log(userId,nickname,password,gender,profileImg,age)
      let pushUser =  async (
        userId,
        nickname,
        password,
        gender,
        profileImg,
        age
      ) => {
     try { 
      const userPut =  await database.query(
          `INSERT INTO users(
                user_id,
                nickname,
                password,
                gender,
                profile_image,
                age
            ) VALUES (?, ?, ?, ?, ?, ?)
            `,
          [
            userId,
            nickname,
            password,
            gender,
            profileImg,
            age
          ]
        )

        console.log("============",userPut);
     }catch(err) {
      const error = new Error(`INVALID_DATA_INPUT`);
      error.statusCode = 500;
      console.log(error)
      throw error;
      
  }
       
        
}
pushUser()
}
// console.log(util.inspect(user, false, null, true));
