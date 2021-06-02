const fs = require("fs");
const path = require("path");

const sendPage = (res, fileName, statusCode, contentType) => {
	fs.readFile(
		path.join(__dirname, "../pages", `${fileName}`),
		(error, content) => {
			if (error) throw error;
			res.writeHead(statusCode, `Content-Type: ${contentType}`);
			res.end(content);
		}
	);
};

module.exports = { sendPage };
