// Your code here
const characterBar = document.getElementById('character-bar')
const detailedInfo = document.getElementById('detailed-info')
const name = document.getElementById('name')
const image = document.getElementById('image')
const voteCount = document.getElementById('vote-count')
const votesForm = document.getElementById('votes-form')
const votesPH = document.getElementById('votes')
const resetBtn = document.getElementById('reset-btn')
/*
const newCharacter = document.getElementById('character-form')
newCharacter.addEventListener('submit', (e) => {
    e.preventDefault();
    let span2 = document.createElement('span')
    span2.innerText = newCharacter.name.value
    characterBar.append(span2)
})
*/
resetBtn.addEventListener('click', () => {
    voteCount.innerText = 0
})

votesForm.addEventListener('submit', (e) => {
    e.preventDefault()
    voteCount.innerText = parseInt(votesForm.votes.value) + parseInt(voteCount.innerText)
    
})

const request = async () => {
    let req = await fetch(`http://localhost:3000/characters`)
    let res = await req.json()
    console.log(res)
    res.forEach((animal, i) => {
        let span1 = document.createElement('span')
        span1.innerText = animal.name
        characterBar.appendChild(span1)
        span1.addEventListener('click', () => {
            name.innerText = animal.name
            image.src = animal.image
        })
    })
}
request()
