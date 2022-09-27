const { likeDao } = require("../models");


const likeStore = async (id,storeId) => {
let [likeEx] = await likeDao.likeEx(id,storeId)
if (likeEx)  {
    await likeDao.undoLikeStore(id,storeId)
    return "가고싶다 삭제되었습니다"
}
await likeDao.inputLikeStore(id,storeId)
return "가고싶다 등록되었습니다"
}

module.exports = {likeStore}