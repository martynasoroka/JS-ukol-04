
 

const updateSkill = (id) => {
    if (id == 1) {
        let s1 = prompt("HTML?")
        const skil1 = document.querySelector("#skill1 .skill__progress")
        skil1.style.width = s1 + '%'
        document.querySelector("#skill1 .skill__value").textContent = s1 + ' / 100'


    } else if (id == 2) {
        let s2 = prompt("CSS?")
        const skil2 = document.querySelector("#skill2 .skill__progress")
        skil2.style.width = s2 + '%'
        document.querySelector("#skill2 .skill__value").textContent = s2 + ' / 100'


    } else if (id == 3) {
        let s3 = prompt("JavaScript?")
        const skil3 = document.querySelector("#skill3 .skill__progress")
        skil3.style.width = s3 + '%'
        document.querySelector("#skill3 .skill__value").textContent = s3 + ' / 100'

    } else {
        alert("Zadej validni id")
    }
}

let id = prompt("Skill id?")

updateSkill(id)

console.log(id);










