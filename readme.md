# Notion Blog

## Creating Your Pages Table

**Note**: this is auto run if a table isn't detected the first time visiting `/blog`

### Using the Pre-Configured Script

1. Create a blank page in Notion
2. Clone this repo `git clone https://github.com/ijjk/notion-blog.git`
3. Install dependencies `cd notion-blog && yarn`
4. Run script to create table `NOTION_TOKEN='token' BLOG_INDEX_ID='new-page-id' node scripts/create-table.js` See [here](#getting-blog-index-and-token) for finding the id for the new page

### Manually Creating the Table

1. Create a blank page in Notion
2. Create a **inline** table on that page, don't use a full page table as it requires querying differently
3. Add the below fields to the table

The table should have the following properties:

- `Page`: this the blog post's page
- `Slug`: this is the blog post's slug relative to `/blog`, it should be a text property
- `Published`: this filters blog posts in **production**, it should be a checkbox property
- `Date`: this is when the blog post appears as posted, it should be a date property
- `Authors`: this is a list of Notion users that wrote the post, it should be a person property

![Example Blog Posts Table](./assets/table-view.png)

## Getting Blog Index and Token

To get your blog index value, open Notion and Navigate to the Notion page with the table you created above. While on this page you should be able to get the page id from either:

- the URL, if the URL of your page is https://www.notion.so/Blog-S5qv1QbUzM1wxm3H3SZRQkupi7XjXTul then your `BLOG_INDEX_ID` is `S5qv1QbU-zM1w-xm3H-3SZR-Qkupi7XjXTul`
- the `loadPageChunk` request, if you open your developer console and go to the network tab then reload the page you should see a request for `loadPageChunk` and in the request payload you should see a `pageId` and that is your `BLOG_INDEX_ID`

To get your Notion token, open Notion and look for the `token_v2` cookie.

## Creating Blog Posts

1. In Notion click new on the table to add a new row
2. Fill in the Page name, slug, Date, and Authors
3. At the top of the content area add the content you want to show as a preview (keep this under 2 paragraphs)
4. Add a divider block under your preview content
5. Add the rest of your content under the divider block

## Credits

- Guillermo Rauch [@rauchg](https://twitter.com/rauchg) for the initial idea
- Shu Ding [@shuding\_](https://twitter.com/shuding_) for the design help
- Luis Alvarez [@luis_fades](https://twitter.com/luis_fades) for design help and bug catching
