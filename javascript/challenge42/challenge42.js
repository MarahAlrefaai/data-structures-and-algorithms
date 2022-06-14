function reverse1(str){
return ((str.split("")).reverse()).join('');
}
function reverse2(str){
let s=[];
let i =str.length;
while(i>=0){
s.push(str[i]);
  i--;
}
return s.join('');  
}
function  reverse3(str)  {
  return str ? reverse3(str.substr(1)) + str[0] : str;
};

console.log(reverse1("Code Fellows"));
console.log(reverse2("Code Fellows"));
console.log(reverse3("Code Fellows"));