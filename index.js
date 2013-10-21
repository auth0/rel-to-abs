var cheerio = require('cheerio');
var urlJoin = require('url-join');

function convert(base_url, currentUrl) {
  if (!currentUrl || /^(https?|file|ftps?|mailto|javascript|data:image\/[^;]{2,9};):/i.test(currentUrl)) {
    return currentUrl;
  }
  return urlJoin(base_url, currentUrl);
}

exports.convert = function(html, base_url) {
  var $ = cheerio.load(html);
  $('img, script').each(function (index, el) {
    if (!el.attribs['src']) return;
    el.attribs['src'] = convert(base_url, el.attribs['src']);
  });

  $('a, link').each(function (index, el) {
    if (!el.attribs['href']) return;
    el.attribs['href'] = convert(base_url, el.attribs['href']);
  });

  return $.html();
};