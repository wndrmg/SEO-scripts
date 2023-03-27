const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');
const url = 'https://example.com/article';

async function getArticle() {
  try {
    const res = await fetch(url);
    const data = await res.text();
    const doc = new JSDOM(data, { url });
    const reader = new Readability(doc.window.document);
    const article = reader.parse();
    const articleTitle = article.title;
    const articleContent = article.content;
    console.log(articleTitle);
    console.log(articleContent);
    } catch (err) {
    console.error(err);
    }
}

getArticle();