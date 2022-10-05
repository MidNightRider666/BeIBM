const mysql = require('mysql2/promise');
const { dbConfig } = require('../dbConfig');

const tableName = 'accounts';
const tablename2 = `searchhistory`;
const tablename3 = 'users';


async function GetAccByUserAndSearch(userId) {
    try {
      const conn = await mysql.createConnection(dbConfig);
      const sql = `
        SELECT searchhistory.ID, searchhistory.Search
          FROM ((${tableName} 
            INNER JOIN ${tablename2} ON accounts.search_id = searchhistory.ID) 
            INNER JOIN ${tablename3} ON accounts.user_id = users.id)
            WHERE 
            user_id = ?;`;
      const [Acc] = await conn.query(sql, [userId]);
      await conn.close();
      return Acc;
    } catch (error) {
      console.log('error===', error)
      return false;
    }
  }


  async function insertSearch(NewRegistersData) {
    try {
      const { search} = NewRegistersData;
      const conn = await mysql.createConnection(dbConfig);
      const sql = `
      INSERT INTO ${tablename2} (search) VALUES (?)
      `;
      const [InsertRegisters] = await conn.execute(sql, [
        search,
      ]);
      await conn.close();
      return InsertRegisters;
    } catch (error) {
      console.log('error===', error)
      return false;
    }
  }

  async function InsertingSearch(search_id, user_id) {
    try {
      const conn = await mysql.createConnection(dbConfig);
      const sql = `
        INSERT INTO ${tableName} (search_id, user_id) 
        VALUES(?, ?)
      `;
      const [InsertRegisters] = await conn.execute(sql, [search_id, user_id]);
      await conn.close();
      return InsertRegisters;
    } catch (error) {
      console.log('error===', error)
      return false;
    }
  }
  


  module.exports = {
    InsertingSearch,
    insertSearch,
    GetAccByUserAndSearch
  };
  
