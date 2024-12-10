# Node.js Server Crashing Under Load

This repository demonstrates a common issue in Node.js applications where the server crashes or becomes unresponsive when handling a high volume of requests.  The provided code implements a simple HTTP server that is susceptible to this problem.  A solution is also provided.

## Bug

The `server.js` file shows a basic HTTP server.  Under heavy load (simulated using a tool like `wrk` or `k6`), this server will eventually crash due to inefficient resource management.

## Solution

The `server-solution.js` file demonstrates improved handling of requests using a worker pool to improve concurrency and prevent the server from crashing under load.  This version utilizes the `worker_threads` module to distribute the load efficiently.

## How to Reproduce

1. Clone the repository.
2. Run `node server.js`.
3. Use a load testing tool (such as `wrk` or `k6`) to simulate many concurrent requests to the server at `http://localhost:8080`.  Observe the server behavior.  You'll likely encounter crashes or unresponsiveness.
4. Then run `node server-solution.js` and repeat the load test. The server will now handle the load much more efficiently.

## Technologies Used

* Node.js
* `http` module
* `worker_threads` (in the solution)