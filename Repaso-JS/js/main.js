var arrayPost = []

const submit = document.getElementById("Submit")
const addPost = () => {
    return arrayPost.push({
        Title: document.getElementById("Title").value,
        Img: document.getElementById("Image").value,
        Name: document.getElementById("Name").value,
        Post: document.getElementById("Post").value,
        Date: document.getElementById("Date").value
})
}
submit.addEventListener("click",addPost)

