const searchContainer = document.querySelector('.search-container');
const search = document.querySelector('.search');
const body = document.querySelector('body');

search.addEventListener('click', ()=> {
    searchContainer.classList.add('active');
    document.addEventListener('click', (e)=> {
        if(!e.composedPath().includes(search)) {
            searchContainer.classList.remove('active');
        }
    });
});
