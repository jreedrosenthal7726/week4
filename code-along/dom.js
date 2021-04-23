let pageTitleElement = document.querySelector(`.page-title`)

pageTitleElement.innerHTML = `Movies to Watch!`

// let movieElements = document.querySelectorAll(`.movies-to-watch li`)

// for (let i = 0; i < movieElements.length; i++) {
//     let movieElement = movieElements[i]
//     console.log(movieElement)

//     movieElement.innerHTML = 'The martian'
// }

let movieList = document.querySelector(`.movies-to-watch`)

movieList.insertAdjacentHTML(`beforeend`,`
    <li>The Martian</li>
`)