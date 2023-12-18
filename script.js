  const accessKey = 'n5ZdogkA6yEdTB7E4DLaBeZ5u9r5h9dWk0wxRgvjS3k';
  const form = document.querySelector('form');
  const imageSearch = document.querySelector('#image-search');
  const images = document.querySelector('.images');
  const showMore = document.querySelector('.show-more');

  let imageSearchInput = '';
  let page = 1;

  async function searchImages(){
      imageSearchInput = imageSearch.value;
      const url = `https://api.unsplash.com/search/photos?page=${page}&query=${imageSearchInput}&client_id=${accessKey}`
      const response = await fetch(url);
      const data = await response.json();

      const results = data.results;

      if (page === 1){
          images.innerHTML = '';
      }

  results.map ((result) => {
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image');
  const picture = document.createElement('img');
  picture.src = result.urls.regular;
  picture.alt = result.alt_description;
  imageWrapper.appendChild(picture);
  images.appendChild(imageWrapper);
  });
 
  page++;
  if (page > 1){
      showMore.style.display = 'block';
  }}

  form.addEventListener('submit', (event) => {
      event.preventDefault();
      page = 1;
      searchImages()
  }
  );
  
  showMore.addEventListener('click', () => {
      searchImages()
  });

const scrollToTopButton = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = 'block';
  } 
});
scrollToTopButton.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
