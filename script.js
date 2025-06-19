const heading = document.querySelector(`h1`)

heading.textContent = `DOM Manipulation in JavaScript`

const list = document.querySelectorAll(`ol > li`)
list[3].textContent = `charAT`
list[2].textContent = `toUpperCase`
list[0].textContent = `replace`
list[1].textContent = `toLowerCase`

const listN = document.getElementsByClassName(`methods`)

listN[0].textContent = `split`
listN[1].textContent = `indexOf`

const lastN = document.getElementsByTagName(`li:nth-of-types(9)`)

lastN.textContent = `replaceAll`

const lists = document.getElementsByTagName(`li`)
lists[4].textContent = `startWith`
lists[5].textContent = `includes`
lists[9].textContent = `endsWith`

const title = document.getElementById(`title`)

title.innerHTML = `All the <span style="color: blue; text-decoration: underline;">string methods</span>`

document.body.style.backgroundImage = `linear-gradient(to right, rbg(${parseInt(Math.random()*225)}, 
${parseInt(Math.random()*225)}, ${parseInt(Math.random()*225)}) 45%, #f1c 45%)`

document.body.style.background = ` rgb(${parseInt(Math.random()*225)}, 
${parseInt(Math.random()*225)}, ${parseInt(Math.random()*225)})`

title.style.paddingBlock; `2rem`
title.style.border = `12px solid crimson`







// console.log(heading.textContent);