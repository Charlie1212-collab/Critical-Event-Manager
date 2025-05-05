// Sample news data - in a real application, this would come from an API
const newsData = [
    {
        id: 1,
        title: "Pharmacy Robbery Incident at Chicago Store",
        category: "robbery",
        date: "2025-04-29",
        summary: "A Walgreens store in downtown Chicago reported a robbery incident yesterday. Local authorities are investigating.",
        image: "assets/background.jpg",
        url: "#"
    },
    {
        id: 2,
        title: "Suspicious Activity Reported Near Seattle Location",
        category: "suspicious",
        date: "2025-04-27",
        summary: "Store employees reported suspicious activity in the parking lot of the 5th Avenue Walgreens. Security has been enhanced.",
        image: "assets/backgroundImage.jpg",
        url: "#"
    },
    {
        id: 3,
        title: "Shoplifting Incident at Boston Walgreens",
        category: "theft",
        date: "2025-04-25",
        summary: "Multiple items were reported stolen from the pharmacy section. Police are reviewing security footage.",
        image: "assets/background.jpg",
        url: "#"
    },
    {
        id: 4,
        title: "Drug-Related Arrest Outside Miami Store",
        category: "drug",
        date: "2025-04-23",
        summary: "Local police made an arrest related to drug activity in the vicinity of the Walgreens on Ocean Drive.",
        image: "assets/backgroundImage.jpg",
        url: "#"
    },
    {
        id: 5,
        title: "Attempted Robbery Foiled by Security",
        category: "robbery",
        date: "2025-04-20",
        summary: "Quick action by security personnel prevented a robbery attempt at the San Francisco Walgreens location.",
        image: "assets/background.jpg",
        url: "#"
    },
    {
        id: 6,
        title: "Pharmacy Theft Investigation Ongoing",
        category: "theft",
        date: "2025-04-18",
        summary: "Authorities continue to investigate a series of prescription medication thefts at multiple locations.",
        image: "assets/backgroundImage.jpg",
        url: "#"
    }
];

// Function to render news articles
function renderNewsArticles(articles) {
    const newsContainer = document.getElementById('news-articles');
    newsContainer.innerHTML = '';

    if (articles.length === 0) {
        newsContainer.innerHTML = '<p class="no-results">No articles found matching your criteria.</p>';
        return;
    }

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'article-card';

        articleElement.innerHTML = `
            <img class="article-image" src="${article.image}" alt="${article.title}">
            <div class="article-content">
                <span class="article-category">${capitalizeFirstLetter(article.category)}</span>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-date">${formatDate(article.date)}</p>
                <p class="article-summary">${article.summary}</p>
                <a href="${article.url}" class="read-more">Read more</a>
            </div>
        `;

        newsContainer.appendChild(articleElement);
    });
}

// Initialize filter and sort functionality
function initializeFiltersAndSort() {
    const filterDropdown = document.getElementById('filter-dropdown');
    const sortDropdown = document.getElementById('sort-dropdown');

    filterDropdown.addEventListener('change', applyFiltersAndSort);
    sortDropdown.addEventListener('change', applyFiltersAndSort);

    // Initial render
    applyFiltersAndSort();
}

// Apply filters and sort
function applyFiltersAndSort() {
    const filterValue = document.getElementById('filter-dropdown').value;
    const sortValue = document.getElementById('sort-dropdown').value;

    let filteredNews = [...newsData];

    // Apply category filter
    if (filterValue !== 'all') {
        filteredNews = filteredNews.filter(article => article.category === filterValue);
    }

    // Apply sorting
    filteredNews.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        return sortValue === 'newest' ? dateB - dateA : dateA - dateB;
    });

    renderNewsArticles(filteredNews);
}

// Utility function to capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Format date to more readable format
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Initialize the page when content is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeFiltersAndSort();

    // You could add code here to fetch real news data from an API
    // For example:
    // fetchNewsFromApi().then(data => {
    //     newsData = data;
    //     applyFiltersAndSort();
    // });
});