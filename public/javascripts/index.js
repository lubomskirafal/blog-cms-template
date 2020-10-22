const articlesContent = document.querySelectorAll('.article__content');

const handleArticles = (thumb = null)=> {
    
    if(thumb) {
        const thumbID = thumb.dataset.id;

        articlesContent.forEach(article => {

            article.classList.remove('article__content--active');
            article.classList.add('article__content--noActive');

            if(article.dataset.id === thumbID) {
                article.classList.remove('article__content--noActive');
                article.classList.add('article__content--active');
            }
        });
    }else {
        articlesContent.forEach(article => {

            if(article.classList.contains('article__content--active')) {
                article.classList.remove('article__content--active');
                article.classList.add('article__content--noActive');
            }
        });
    };
};

const handleClick = (e)=> {
    const target = e.target;

    if(target.classList.contains('article__thumb')) return handleArticles(target)
    if(target.parentNode.classList.contains('article__thumb')) return handleArticles(target.parentNode) ;
    if(target.classList.contains('.article__content-button--close') ||
        target.parentNode.classList.contains('article__content-button--close')) return handleArticles();

};

const init = ()=> {
    document.addEventListener('click', handleClick);
    
};


document.addEventListener('DOMContentLoaded', init);
