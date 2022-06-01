const Graph = require('../graph.js');
const business_trip=require('../business_trip.js')
describe('test graph',()=>{
    it(' business trip test',async()=>{
      let g = new Graph();
      let pandora = g.addNode("pandora");
      let Arendelle = g.addNode("Arendelle");
      let New_Monstropolis = g.addNode("New Monstropolis");
      let Naboo = g.addNode("Naboo");
      let Metroville = g.addNode("Metroville");
      let Narnia = g.addNode("Narnia");
      //--------------------------------------
      g.addEdge(pandora, 150, Arendelle);
      g.addEdge(pandora, 82, Metroville);
      g.addEdge(Arendelle, 99, Metroville);
      g.addEdge(Metroville, 37, Narnia);
      g.addEdge(New_Monstropolis, 73, Naboo);
      g.addEdge(Arendelle, 42, New_Monstropolis);
      let arr0 = [Metroville, pandora]
      let arr1 = [Arendelle, New_Monstropolis, Naboo]
      let arr2 = [Naboo, pandora]
       //console.log(business_trip(g, arr0))
      // console.log(business_trip(g, arr1))
      // console.log(business_trip(g, arr2))
      
    expect(business_trip(g, arr0)).toBe("$82");
    expect(business_trip(g, arr1)).toBe("$115");
    expect(business_trip(g, arr2)).toBe("$0");
  
      
  
    })
  })