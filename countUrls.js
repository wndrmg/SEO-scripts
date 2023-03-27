function countUrls(urls) {
  const urlMap = new Map();

  urls.forEach(url => {
    if (urlMap.has(url)) {
      urlMap.set(url, urlMap.get(url) + 1);
    } else {
      urlMap.set(url, 1);
    }
  });

  const sortedUrls = Array.from(urlMap.entries()).sort((a, b) => b[1] - a[1]);

  sortedUrls.forEach(url => console.log(`${url[0]}: ${url[1]}`));
}

// пример
const input = `http://games-instel.ru/opredelit-shrift-po-kartinke-onlajn/
http://skillbox.ru/media/design/what-the-font/
http://unisender.com/ru/blog/vopros-otvet/opredelit-shrift-po-kartinke/
http://itlang.ru/opredelit-shrift-po-kartinke-onlajn/
http://sravni.ru/text/po-kartinke-opredelit-shrif/
http://sdelaicomp.ru/obzori/opredelit-shrift-po-kartinke-onlajn.html
http://netology.ru/blog/5-methods-typeface
http://timeweb.com/ru/community/articles/luchshie-sposoby-raspoznat-shrift-s-kartinki
http://smm-tips.ru/tech/opredelit-shrift-po-kartinke.html
http://mannodesign.com/raspoznavanie-russkogo-shrifta-onlajn
http://itlang.ru/opredelit-shrift-po-kartinke-onlajn/
http://smm-tips.ru/tech/opredelit-shrift-po-kartinke.html
http://noznet.ru/cyrillic-font-search-by-image-online/
http://games-instel.ru/opredelit-shrift-po-kartinke-onlajn/
http://sdelaicomp.ru/obzori/opredelit-shrift-po-kartinke-onlajn.html
http://unisender.com/ru/blog/vopros-otvet/opredelit-shrift-po-kartinke/
http://netology.ru/blog/5-methods-typeface
http://sravni.ru/text/po-kartinke-opredelit-shrif/
http://timeweb.com/ru/community/articles/luchshie-sposoby-raspoznat`

const urls = input.split("\n").map(url => url.slice(0));

countUrls(urls);