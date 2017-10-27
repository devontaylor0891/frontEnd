# frontEnd
another crack at it

### Instructions
1. clone the repo
2. cd into frontEnd
3. run `npm install`
4. run `ng serve`
5. navigate to localhost:4200 in your browser

### The auth0-rwas branch
As of Oct 24, this branch has a working search function that uses dummy data from a mock server.
To use the mock data:
1. install json-server globally
run `npm install -g json-server` (you may need to sudo this)
2. navigate to frontEnd/src/assets/api
3. run `json-server searchResults.json`
this fires up a mock server at localhost:3000
4. then run your `ng serve` on the auth0-rwas branch and click search in the header
