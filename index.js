import http from "node:http"

const PORT = process.env.PORT || 4000;
const app = (request, response) => {
	response.write("Handling Payload successful");	
	response.end();
	return;
}

const server = http.createServer(app).listen(PORT, () => {
		console.log(`The server is up and running on PORT ${PORT}`)}
);

