const breakingNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();

    // console.log(data.data.news_category);

    displayNews(data.data.news_category)
}

breakingNews();


const displayNews = AllNews => {


    const newsContainer = document.getElementById('catagory-container');
    AllNews.forEach(News => {
        // console.log(phone)
        const { category_name, category_id } = News
        const NewsDiv = document.createElement('li');
        NewsDiv.classList.add('nav-item');
        NewsDiv.innerHTML = `
        <a onclick="breakCard(${category_id})" class="nav-link" href="#">${category_name}</a>
        `;
        newsContainer.appendChild(NewsDiv);

    })
}

const breakCard = async (thenid) => {
    const url = `https://openapi.programming-hero.com/api/news/category/0${thenid}`
    const res = await fetch(url)
    const data = await res.json()
    displayAllNews(data.data)
}

const displayAllNews = phones => {
    const phonesContainer = document.getElementById('news-container');
    phonesContainer.textContent = '';
    phones.forEach(phone => {
        console.log(phone)
        const PhoneDiv = document.createElement('div');
        PhoneDiv.classList.add('col');
        PhoneDiv.innerHTML = `
        <div class="card h-100">
        <img src="${phone.image_url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.title}</h5>
            <p class="card-text">${phone.details.length > 150 ? phone.details.slice(0, 150) + '...' : phone.details}</p>
            <div  class="d-flex align-items-center">
            <img src="${phone.author.img}" class="card-img-top rounded-circle w-25 h-25" alt="...">

            <div class="d-flex">
            <h5 class="card-title ms-4">${phone.author.name}</h5>
            <h5 class="card-title ms-4"><i class="fa-solid fa-eye"></i>${phone.total_view}</h5>
            </div>

            </div>
           

        </div>
    </div>
        `;
        phonesContainer.appendChild(PhoneDiv);

    })
}

breakCard();








// const allCardNews = cardNews => {
//     const breakingNewsContainer = document.getElementById('news-container');
//     cardNews.forEach(phone => {
//         const cardDiv = document.createElement('div');
//         cardDiv.classList.add('col');
//         cardDiv.innerHTML = `

//         `;

//     })
// }


