Given an HTML source, it will convert any URL on links, images, scripts, etc to abosulte URLs.

## Install

	npm install rel-to-abs

## Usage

	var converter = require('rel-to-abs');

	var converted = converter.convert('<img src="foo.png">', 'http://mysite.com');

	converted == <img src="http://mysite.com/foo.png">

## Credits

<http://stackoverflow.com/questions/7544550/javascript-regex-to-change-all-relative-urls-to-absolute>

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
