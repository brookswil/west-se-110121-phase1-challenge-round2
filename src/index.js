console.log("you got this!");

const API = "https://distinct-vaulted-freesia.glitch.me/image"
let imageData;

const commentList = document.getElementById('fg-comments');

// GET request

fetch(API)
  .then((res) => res.json())
  .then (json => {
      imageData = json;
      renderImage(imageData);
}) 

document
  .getElementById('like-button')
  .addEventListener('click', incrementLikes);;

document
  .getElementById('comment-form')
  .addEventListener('submit', addComment);

function renderImage(image) {
    const title = document.getElementById('fg-title')
    title.textContent = image.title;

    document.querySelector('#fg-image').src = image.image;

    renderLikes(image.likes);
    renderComments(image.comments);
}

function incrementLikes() {
    imageData.likes += 1;
    renderLikes(imageData.likes);
}

function renderLikes(likes) {
    document.getElementById('fg-likes').textContent = `${likes} likes`;
}

  function addComment(event) {
    event.preventDefault();
    const commentText = event.target.comment.value;
    
    imageData.comments.push({ content: commentText });
    renderComments(imageData.comments);
    event.target.reset();
}

function renderComments(comments) {
    commentList.innerHTML = '';
    comments.forEach(renderComment);
  }
  
  function renderComment(comment) {
    const li = document.createElement('li');
    li.textContent = comment.content;
    commentList.append(li);
  }


