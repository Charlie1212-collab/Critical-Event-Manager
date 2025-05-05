import asyncio
from playwright.async_api import async_playwright
import csv

keywords = [
    "Walgreens theft", "Walgreens robbery",
    "Walgreens shoplifting", "Walgreens shooting"
]

results = []

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context()
        page = await context.new_page()

        for keyword in keywords:
            print(f"\n🔍 Searching: {keyword}")
            query = keyword.replace(" ", "+")
            url = f"https://www.youtube.com/results?search_query={query}&sp=CAI%253D"  # CAI: sort by upload date

            await page.goto(url)
            await page.wait_for_timeout(5000)

            for _ in range(3):  # Scroll down to load more
                await page.keyboard.press("PageDown")
                await page.wait_for_timeout(2000)

            videos = await page.query_selector_all('ytd-video-renderer')

            for video in videos:
                try:
                    title_el = await video.query_selector("a#video-title")
                    title = await title_el.get_attribute("title") if title_el else "N/A"
                    link = await title_el.get_attribute("href") if title_el else "N/A"
                    video_url = "https://www.youtube.com" + link if link else "N/A"

                    channel_el = await video.query_selector("ytd-channel-name a")
                    channel = await channel_el.inner_text() if channel_el else "N/A"

                    meta_el = await video.query_selector("#metadata-line span")
                    publish_time = await meta_el.inner_text() if meta_el else "N/A"

                    results.append({
                        "keyword": keyword,
                        "title": title.strip(),
                        "channel": channel.strip(),
                        "published": publish_time.strip(),
                        "url": video_url
                    })
                except Exception as e:
                    continue

        await browser.close()

    # Export to CSV
    with open("walgreens_youtube.csv", "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=["keyword", "title", "channel", "published", "url"])
        writer.writeheader()
        writer.writerows(results)

    print(f"\n✅ Saved {len(results)} videos to walgreens_youtube.csv")

asyncio.run(run())