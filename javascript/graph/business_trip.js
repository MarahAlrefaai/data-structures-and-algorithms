const Graph = require('./graph.js');

function business_trip(g, cityNames) {

  let price = 0;

  if (cityNames.length == 2) {
    let visited = g.nodes;
    //  console.log(visited[cityNames[0].value][0])
    let n = g.get_neighbors(cityNames[0].value)
    if (cityNames.includes(n[0].node)) {
      price += visited[cityNames[0].value][0].weight
    }
    return "$" + price;
  }
  else {

    for (let i = 0; i < cityNames.length; i++) {
      let n = g.get_neighbors(cityNames[i].value)
      n.map((ele) => {
        if (cityNames.includes(ele.node) && !(cityNames.slice(0, i + 1).includes(ele.node))) {
          //console.log("yes")
          console.log(price + "+" + ele.weight)
          price += ele.weight
          console.log("= " + price)
        }
      })
    }}

  return "$" + price;
}



module.exports = business_trip;