const HashTable = require('./Hashtable.js')

function leftJoin(table1, table2) {

  let result = [];
  let tableKeys = (table1.keys());
  let tableKeys2 = (table2.keys());
  for (let i = 0; i < tableKeys.length; i++) {
    if (tableKeys2.includes(tableKeys[i])) {
      result.push([tableKeys[i], table1.get(tableKeys[i]), table2.get(tableKeys[i])])
    }
    else {
      result.push([tableKeys[i], table1.get(tableKeys[i]), null])
    }
  }
  return result;
}


module.exports = leftJoin;