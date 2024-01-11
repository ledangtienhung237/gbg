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
// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Sample data (replace with your own)
    var data = {
        labels: ['Duncan', 'Paul', 'Nancy', 'Alvis', 'Marcel', 'Cris'],
        datasets: [{
            label: 'Weekly report',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [437, 420, 338, 312, 298, 310] // Replace with your data values
        }]
    };

    // Configuration options
    var options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Get the context of the canvas element
    var ctx = document.getElementById('myColumnChart').getContext('2d');

    // Create the column chart
    var myColumnChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
});
