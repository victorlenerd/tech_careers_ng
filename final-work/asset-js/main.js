const appyBtn = document.forms['apply-form'];
const postBtn = document.forms['post-form'];


appyBtn.addEventListener('submit', (e) => {
  console.log('Clicked');

  e.preventDefault();
});


// postBtn.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log('Clicked');
// });