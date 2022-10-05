const { insertSearch, InsertingSearch, GetAccByUserAndSearch } = require('../Models/SearchModel');
const { failResponce, successResponce } = require('../Utilities/dbHelper');


async function GetAccIndex(req, res) {
  const { user_id } = req;
  const FoundRegisters = await GetAccByUserAndSearch(user_id);
  console.log('FoundRegisters===', FoundRegisters);
  console.log("user_id===", user_id);
  return FoundRegisters === false
    ? failResponce(res)
    : successResponce(res, FoundRegisters);
}

async function SendInsertSerach(req, res) {
  const { user_id } = req;
  const NewRegistersData = req.body;
  const FoundRegisters = await insertSearch(NewRegistersData);
  console.log('NewRegistersData===', NewRegistersData);
  console.log('FoundRegisters==', FoundRegisters);
  console.log("user_id===", user_id);
  const serverResponse = await InsertingSearch(FoundRegisters.insertId, user_id);
  console.log('serverResponse===', serverResponse);
  return FoundRegisters === false
    ? failResponce(res)
    : successResponce(res, FoundRegisters);
}


module.exports = {
    GetAccIndex,
    SendInsertSerach,
  };