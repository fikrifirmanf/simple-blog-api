const Database = require('better-sqlite3')
const db = new Database("blogs.db",{verbose: console.log})

function query(sql){
    return db.prepare(sql)
}
function run(sql, params) {
    return db.prepare(sql).run(params);
  }
module.exports = {
    query,
    run
}