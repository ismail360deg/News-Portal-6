const breakingNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();

    // console.log(data.data.news_category);

    displayNews(data.data.news_category)
}

const displayNews = AllNews => {


    const newsContainer = document.getElementById('catagory-container');
    AllNews.forEach(News => {
        // console.log(phone)
        const { category_name } = News
        const NewsDiv = document.createElement('li');
        NewsDiv.classList.add('nav-item');
        NewsDiv.innerHTML = `
        <a class="nav-link" href="#">${category_name}</a>
        `;
        newsContainer.appendChild(NewsDiv);

    })
}

breakingNews();