const { likeDao } = require("../models");


const likeStore = async (id,storeId) => {
let [likeEx] = await likeDao.getLikesByUserIdAndStoreId(id,storeId)
if (likeEx)  {
    await likeDao.deleteLikeToStore(id,storeId)
    return "like deleted"
}
await likeDao.createLikeToStore(id,storeId)
return "like created"
}

module.exports = {likeStore}
