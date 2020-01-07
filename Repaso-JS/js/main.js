var arrayPost = []

const htmlCard = (postTitle, postDate, postArt, postName, n = 1) => {
    return (
      `
      <div class="card col-md-4 col-12" style="width: 18rem;">
        <img class="card-img-top" src="https://picsum.photos/1440/600?random=${n}" alt="Card image cap">  
        <div class="card-body">
            <h5 class="card-title">${postTitle}</h5>
            <p class="card-text">${postDate}</p>
            <p class="card-text">${postArt}</p>
            <p class="card-text">${postName}</p>
        </div>
      </div>
      `
    )
  }

  const  buildCard= (cards, parent) => {
    var accCards = cards.reduce((acc, {Title, scrImg, Name, Post, pDate}, cIx)=> {
      console.log(acc)
      return acc + htmlCard(Title, Name, Post, pDate, cIx) 
    }, '')
    document.getElementById(parent).innerHTML = accCards
  }


const submit = document.getElementById("Submit")
const addPost = () => {
    arrayPost.push({
        Title: document.getElementById("Title").value,
        scrImg: document.getElementById("Image").value,
        Name: document.getElementById("Name").value,
        Post: document.getElementById("Post").value,
        pDate: document.getElementById("Date").value
    })
    buildCard(arrayPost,"postBuilder")
}
submit.addEventListener("click",addPost)

