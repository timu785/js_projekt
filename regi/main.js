const tartalomElem=document.querySelector(".tartalom")
const mentesElem=document.querySelector(".gomb")
let szam=Math.random()
mentett="üres"
console.log(mentett)
tartalomElem.innerHTML=szam
mentesElem.addEventListener("click",()=>{
mentett=szam
console.log(mentett)
dosument.setLocalstorage("mentett:")
})