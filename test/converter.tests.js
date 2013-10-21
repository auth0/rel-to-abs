var converter = require('../');
var assert = require('assert');

describe('converter', function() {

  it('should convert relative images', function(){
    var html = '<img src="foo.png">';
    var converted = converter.convert(html, 'http://mysite.com');
    assert.equal(converted, '<img src="http://mysite.com/foo.png">');
  });

  it('should convert relative images with slash at the beginning', function(){
    var html = '<img src="/foo.png">';
    var converted = converter.convert(html, 'http://mysite.com');
    assert.equal(converted, '<img src="http://mysite.com/foo.png">');
  });

  it('should convert relative scripts with slash at the beginning', function(){
    var html = '<script src="/test.js"></script>';
    var converted = converter.convert(html, 'http://mysite.com');
    assert.equal(converted, '<script src="http://mysite.com/test.js"></script>');
  });

  it('should convert relative images with slash at the beginning and trailing slash for base url', function(){
    var html = '<img src="/foo.png">';
    var converted = converter.convert(html, 'http://mysite.com/');
    assert.equal(converted, '<img src="http://mysite.com/foo.png">');
  });

  it('should convert relative links', function(){
    var html = '<a href="mypage"></a>';
    var converted = converter.convert(html, 'http://mysite.com');
    assert.equal(converted, '<a href="http://mysite.com/mypage"></a>');
  });

  it('should not convert absolute links', function(){
    var html = '<a href="http://google.com">test</a>';
    var converted = converter.convert(html, 'http://mysite.com');
    assert.equal(converted, '<a href="http://google.com">test</a>');
  });

  it('should not fail with links without href', function(){
    var html = '<a>test</a>';
    var converted = converter.convert(html, 'http://mysite.com');
    assert.equal(converted, '<a>test</a>');
  });

  it('should not convert absolute links in escaped html inside inputs', function () {
    var original = '<input type="hidden" name="html" value="&lt;img src=&quot;/xauth0.jpg&quot;&gt;">';
    var converted = converter.convert(original, 'http://mysite.com');
    assert.equal(original, converted);
  });
});