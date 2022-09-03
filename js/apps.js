const breakingNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();

    displayNews(data.data.news_category)
}

breakingNews();


const displayNews = AllNews => {

    const newsContainer = document.getElementById('catagory-container');
    AllNews.forEach(News => {
        const { category_name, category_id } = News
        const NewsDiv = document.createElement('li');
        NewsDiv.classList.add('nav-item');
        NewsDiv.innerHTML = `
        <a onclick="breakCard(${category_id})" class="nav-link" href="#">${category_name}</a>
        `;
        newsContainer.appendChild(NewsDiv);

    })
}

const breakCard = async (newsId) => {
    const sppinner = document.getElementById('spinnerPart');
    sppinner.classList.remove('d-none')
    const url = `https://openapi.programming-hero.com/api/news/category/0${newsId}`
    const res = await fetch(url)
    const data = await res.json()
    displayAllNews(data.data)
}

const displayAllNews = cards => {
    const cardContainer = document.getElementById('news-container');
    cardContainer.textContent = '';
    const founder = document.getElementById('totalFounder')
    founder.innerText = cards.length
    const shortFind = cards.sort((x, y) => {
        if (x.total_view < y.total_view) {
            return 1;
        }
        else {
            return -1
        }

    })
    cards.forEach(card => {
        const cardDiv = document.createElement('div');

        const sppinner = document.getElementById('spinnerPart');
        sppinner.classList.add('d-none')
        cardDiv.classList.add('col');

        cardDiv.innerHTML = `
        <div class="card h-100">
        <img src="${card.image_url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${card.title}</h5>
            <p class="card-text">${card.details.length > 150 ? card.details.slice(0, 150) + '...' : card.details}</p>
            <div  class="d-flex align-items-center">
            <img src="${card.author.img}" class="card-img-top rounded-circle w-25 h-25" alt="...">

            <div class="d-flex">
            <h5 class="card-title ms-4">${card.author.name}</h5>
            <h5 class="card-title ms-4"><i class="fa-solid fa-eye"></i>${card.total_view}</h5>
            </div>

            </div>

            <button onclick="loadPhoneDetails('${card._id}')" href="#" class="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#phoneDetailModel">Show Details</button> 
           

        </div>
    </div>
        `;
        cardContainer.appendChild(cardDiv);

    })
}



const loadPhoneDetails = async (newsId) => {
    const url = ` https://openapi.programming-hero.com/api/news/${newsId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayCardsDetails(data.data[0])
}


const displayCardsDetails = model => {
    const modalTitle = document.getElementById('phoneDetailModelLabel');
    const modalDetails = document.getElementById('phone-Details');
    modalDetails.innerHTML = `
    <img src="${model.image_url}" class="card-img-top" alt="...">
    <h5 class="card-title p-4 ">${model.author.name}</h5>
    <p class="card-text">${model.details.length > 150 ? model.details.slice(0, 150) + '...' : model.details}</p>
    <p>Release Date: ${model.author.published_date ? model.author.published_date : 'No Release Date Found'}</p>
    <h5 class="card-title ms-4"><i class="fa-solid fa-eye"></i>${model.total_view}</h5>
    `

}


breakCard(1);