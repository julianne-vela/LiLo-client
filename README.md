# LiLo-client

A React web application to generate lists of character, location, and item data from Final Fantasy XIV. Name inspired by Limsa Lominsa!

Utilizes the [XIVAPI](https://www.xivapi.com) from [@xivapi](https://github.com/xivapi)

### Components

- ListPage
  - Displays a list of requested items from API
- DetailPage
  - Displays a page with more detail about an individually selected item
  - Clicking an item on the ListPage will redirect to the DetailPage for that item
  - Also can navigate directly to the DetailPage via URL for any specific item
