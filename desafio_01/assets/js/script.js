const newsContainer = document.querySelectorAll('.news-container');
const iconHeart = document.querySelectorAll('.icon-heart');

// * container and icon styles when clicking on it

iconHeart.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('fa-regular');
        icon.classList.toggle('fa-solid');
    });
});

newsContainer.forEach(news => {
    news.addEventListener('click', () => news.classList.toggle('border'))
});