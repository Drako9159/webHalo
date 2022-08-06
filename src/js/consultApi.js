import fetch from "node-fetch";

async function comeMade(name) {
  const url = `https://api.nationalize.io/?name=${name}`;
  await fetch(url)
    .then((res) => {
      if (res.status != "200") {
        let none = "404 no se encontró";
        throw new Error(none);
      } else {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);
    });
}
console.log(comeMade("sofia"));

/*async function comeMade(){
    const response = await fetch("https://api.nationalize.io/?name=antonio");
    
    if(!response.Ok){
        let none = "404 no se encontró";
        throw new Error(none);
    }
    const name = response.json();
    return name;
}
function showName(n){
    console.log(n)
}
comeMade().then(showName);
*/
