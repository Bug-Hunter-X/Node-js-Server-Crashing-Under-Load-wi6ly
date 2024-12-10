const http = require('http');
const { Worker } = require('worker_threads');

const numWorkers = 4; // Adjust the number of workers based on your system's resources
const workers = [];

function createWorker() {
  return new Worker('./worker.js');
}

for (let i = 0; i < numWorkers; i++) {
  workers.push(createWorker());
}

const server = http.createServer((req, res) => {
  const workerIndex = Math.floor(Math.random() * numWorkers);
  const worker = workers[workerIndex];
  worker.postMessage({ req, res });
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
// worker.js
const { parentPort, workerData } = require('worker_threads');

parentPort.on('message', ({ req, res }) => {
  // Simulate some work here
  // ...
  res.writeHead(200);
  res.end('Hello, World!');
});