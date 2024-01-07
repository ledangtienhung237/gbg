// Example JavaScript code (for dynamic content)
// This could be used to fetch news items from an API or a data source.

// Example data (can be replaced with actual data fetching logic)
const newsData = [
  {
    title: 'News Title 1',
    date: 'January 1, 2024',
    content: 'Lorem ipsum dolor sit amet...'
  },
  {
    title: 'News Title 2',
    date: 'January 2, 2024',
    content: 'Lorem ipsum dolor sit amet...'
  }
  // Add more news items as needed
];

// Display news items
const newsFeed = document.querySelector('.news-feed');

newsData.forEach(news => {
  const newsItem = document.createElement('div');
  newsItem.classList.add('news-item');

  newsItem.innerHTML = `
    <h2>${news.title}</h2>
    <p class="date">${news.date}</p>
    <p>${news.content}</p>
  `;

  newsFeed.appendChild(newsItem);
});
