const http = require("http");
const { sendPage } = require("./helpers");

const PORT = process.env.PORT || 5000;

//create server
const server = http.createServer((req, res) => {
	if (req.url === "/") {
		sendPage(res, "home.html", 200, "text/html");
	} else if (req.url === "/styles.css") {
		sendPage(res, req.url, 200, "text/css");
	} else {
		sendPage(res, "404Page.html", 404, "text/html");
	}
});

//start listening
server.listen(PORT, () => console.log("Server is up and running"));
