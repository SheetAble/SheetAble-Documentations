# Development & Contributions
This will be the getting started guide if you want to contribute or try out some stuff with SheetAble yourself!

## Setting up the environment
### Prerequisites
* [GoLang](https://golang.org/) v1.6
* [Node](https://nodejs.org/en/) v14, [npm](https://www.npmjs.com/)

### Setup the backend server
#### Set dev mode
To setup the backend server for development you firstly have to add an ENV var to make sure CORS are activated so you can make requests from different domains. To do that simply set `DEV=1`. ([How to set env vars?](https://www.schrodinger.com/kb/1842))
#### Run server
After that you can start running the server by going in the `backend` directory and execute 
```
go run main.go
```

### Setup the frontend 
The frontend is written in React and accordingly created with [create-react-app](https://github.com/facebook/create-react-app). 
1. Go into the `frontend` directory with your terminal/command line
2. Install the npm packages
	``` 
	npm install
	```
3. Start the project
   ```
   npm start
   ```

### Conclusion
If you followed all the steps you should now have a development version of SheetAble running on your machine. Any changes in the frontend should automatically refresh your browser and the app. However if you make changes in the backend it will **not** automatically refresh the backend you have to restart the go process to take change.

Have fun developing 🎉
