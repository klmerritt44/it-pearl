
    document.addEventListener("DOMContentLoaded", function () {
        const feedUrl = "https://itpearl24.wordpress.com/category/web-development/feed/";
        const feedContainer = document.getElementById("rss-feed");

        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`)
            .then(response => response.json())
            .then(data => {
                const parser = new DOMParser();
                const xml = parser.parseFromString(data.contents, "application/xml");
                const items = xml.querySelectorAll("item");
                let html = "<ul>";

                items.forEach((item, index) => {
                    if (index < 5) { // Show only the latest 5 posts
                        const title = item.querySelector("title").textContent;
                        const link = item.querySelector("link").textContent;
                        html += `<li><a href="${link}" target="_blank">${title}</a></li>`;
                    }
                });

                html += "</ul>";
                feedContainer.innerHTML = html;
            })
            .catch(error => console.error("Error fetching RSS feed:", error));
    });
  