const newsContainer = document.querySelectorAll('.news-container');
const iconHeart = document.querySelectorAll('.icon-heart');
const inputSearch = document.getElementById('input-search');
const allTitlesNews = document.querySelectorAll('.news-container__title');



// Carregar notícias favoritas do localStorage ao iniciar a página

document.addEventListener('DOMContentLoaded', () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    savedFavorites.forEach(id => {

        const favoriteNews = document.querySelector(`.news-container[data-id='${id}']`);

        if (favoriteNews) {
            const heartIcon = favoriteNews.querySelector('.icon-heart');

            heartIcon.classList.add('fa-solid');
            heartIcon.classList.remove('fa-regular');

            favoriteNews.classList.add('border');
        }
    });

});


// Função para salvar ou remover notícias do localStorage

const updateLocalStorage = (id, isFavorite) => {

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (isFavorite) {
        if (!favorites.includes(id)) {
            favorites.push(id);
        }
    } else {
        favorites = favorites.filter(favId => favId !== id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));

};


// Estilo do container e do ícone quando clicar nele

iconHeart.forEach(icon => {

    icon.addEventListener('click', () => {

        const clickedIconContainer = icon.parentElement.parentElement;
        const newsId = clickedIconContainer.getAttribute('data-id');

        icon.classList.toggle('fa-regular');
        icon.classList.toggle('fa-solid');

        clickedIconContainer.classList.toggle('border');

        const isFavorite = icon.classList.contains('fa-solid');

        updateLocalStorage(newsId, isFavorite);

    });

});


// Filtrar notícias com base no que o usuário digita no campo de input

inputSearch.addEventListener('input', () => {

    const inputSearchValue = inputSearch.value.toLowerCase();

    allTitlesNews.forEach(title => {

        const containerNew = title.parentElement.parentElement;

        title.textContent.toLowerCase().includes(inputSearchValue) ?
            containerNew.style.display = 'block' :
            containerNew.style.display = 'none';

    });
});