let actor= document.getElementById('actor')
let food= document.getElementById('food')
let animal= document.getElementById('animal')
let adjective= document.getElementById('adjective')
let result=document.getElementById('result')

function press(){
if(actor.value=='' ||food.value=='' ||animal.value=='' ||adjective.value==''){
    alert("you need to complete these sentences")
return
}
let stories=[
    `${actor.value}, was a very strange man some people said he loved to eat ${food.value} there was a rumor that people saw him riding on a ${animal.value}, he must be realy ${adjective.value}`,
`many years ago there was a man named ${actor.value}, he kidnapped people and maked them eat ${food.value}, the only thing he was scared of is ${animal.value}s, many people says that he was very ${adjective.value}`,
`${actor.value} realy hated pigs, nobody knows why but when he saw pigs he would cry. when he was young he loved to eat only ${food.value}, the animal he love the most is ${animal.value}. now he a very ${adjective.value} person. `,
`${actor.value} was a very lonley human, nobody loved him he didnt have friends and he's secrely adopted. he didnt comit sucide because he had a pet, a ${animal.value}. but he was fat so he ate his own pet. he ate too many ${food.value}. and now hes ${adjective.value}  `,
]
result.innerHTML= stories[randomInteger(0,stories.length-1)]
}
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
