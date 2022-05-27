
function leftJoin(table1, table2) {

  let result = [];
  let tableTeys = (table1.keys());
  let tableTeys2 = (table2.keys());
  //-------------------------------------------
  for (let i = 0; i < tableTeys.length; i++) {
    if (tableTeys2.includes(tableTeys[i])) {
      result.push([tableTeys[i], table1.get(tableTeys[i]), table2.get(tableTeys[i])])
    }
    else {
      result.push([tableTeys[i], table1.get(tableTeys[i]), null])
    }
  }
  return result;
}

module.exports = leftJoin;