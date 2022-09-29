const database = require("./dataSource");

const createStore = async (
  name,
  description,
  address,
  tel,
  open_time,
  closed_time,
  id,
  image,
  category_id
) => {
  // 추후에 transaction을 사용하는 파일이 많아지면,
  // class로 모듈화하면 좋을 것 같습니다. 
  const queryRunner = dataSource.createQueryRunner()

  await queryRunner.connect()

  await queryRunner.startTransaction()

  try {
    const store = await database.query(
      `INSERT INTO stores(
            name, 
            description,
            address,
           ) VALUES (?, ? ,?, ?, ?, ?, ?, ?, ?);
          `,
      [
        name,
        description,
        address,
       ]
    );
    
    // bulk insert 방법으로 refactoring
    for (let offDayId of offDayIds) {
      const offDays = await database.query(`
        INSERT INTO off_days(
          day_id,
          store_id
        ) VALUES (?,?)
      `,[offDayId, storeId]);
    }

    await queryRunner.commitTransaction()

  } catch (err) {

    await queryRunner.rollbackTransaction()

  }

  return store.insertId
};


const bulkInsertOffdays = async (storeId) => {
  const offDays = [
    {store_id : storeId, day_id: 1},
    {store_id : storeId, day_id: 3},
  ]

};


const initOffday = async (store_id) => {
  await database.query(
    `DELETE FROM off_days
      WHERE store_id=?
    `,
    [store_id]
  );
};


const updateStore = async (
  name,
  description,
  address,
  tel,
  open_time,
  closed_time,
  image,
  category_id,
  id,
  store_id
) => {

  await database.query(
    `UPDATE stores
      SET name=?, 
      description=?, 
      address=?, 
      tel=?, 
      open_time=?, 
      closed_time=?, 
      image=?, 
      category_id=?,
      admin_user_id=?
      WHERE id = ?
      `,
    [
      name,
      description,
      address,
      tel,
      open_time,
      closed_time,
      image,
      category_id,
      id,
      store_id,
    ]
  );
};


const checkStore = async (store_id) => {
  let checkStore = await database.query(
    `select * from stores where stores.id=?`,
    [store_id]
  );
  return checkStore;
};


module.exports = {
  createStore,
  makeOffday,
  initOffday,
  updateStore,
  checkStore,
};
