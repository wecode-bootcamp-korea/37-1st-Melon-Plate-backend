require('dotenv').config();
const fs = require('fs');
const {database}  = require("./src/models/dataSource");


const start = async () => {
    await database
      .initialize()
      .then(() => {
        console.log("Data Source has been initialized!");
      })
      .catch((err) => {
        console.error(`Error during Data Source initialization, ${err}`);
      });
  
    app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  };
  
  start()

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
      
           let pushUser =  async (   
      ) => {
     try { 
        let {userId,nickname,password,gender,profileImg,age} =user[i]; 
         await database.query(
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
      const error = new Error(err,"==================캐치된에러");
      error.statusCode = 500;
      console.log(error)
      throw error;
      
  }
   
        
}
pushUser ();
}
// console.log(util.inspect(user, false, null, true));
