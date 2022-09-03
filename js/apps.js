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









// const breakingNews = async () => {
//     const url = `https://openapi.programming-hero.com/api/news/category/01`
//     const res = await fetch(url);
//     const data = await res.json();
//     displayNews(data.data)
// }

// const displayNews = phones => {
//     const phonesContainer = document.getElementById('news-container');
//     phones.forEach(phone => {
//         const PhoneDiv = document.createElement('div');
//         PhoneDiv.classList.add('col');
//         PhoneDiv.innerHTML = `
//         <div class="card">
//         <img src="${phone.image_url}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${phone.title}</h5>
//             <p class="card-text">${phone.details}</p>
//         </div>
//     </div>
//         `;
//         phonesContainer.appendChild(PhoneDiv);

//     })
// }

// breakingNews();









breakingNews();