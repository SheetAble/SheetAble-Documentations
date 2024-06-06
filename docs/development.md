# Develoment & Contributions

This will be the getting started guide if you want to contribute or try out some stuff with SheetAble yourself!

## Setting up the environment

### Prerequisites

- [GoLang](https://golang.org/) v1.6
- [Node](https://nodejs.org/en/) v14, [npm](https://www.npmjs.com/)

### Setup the backend server

#### Set dev mode

To setup the backend server for development you firstly have to add an ENV var to make sure CORS are activated so you can make requests from different domains. To do that simply set `DEV=1`. ([How to set env vars?](https://www.schrodinger.com/kb/1842))

#### Run server

After that you can start running the server by going in the `backend` directory and execute

```
go run main.go
```

#### Running into errors? If you see:

```
go : The term 'go' is not recognized as the name of a cmdlet, function, script file, or operable program.
Check the spelling of the name, or if a path was included, verify that the path is correct and try again.
```

- You likely do not have 'go' installed, please install it from the link in the Prerequisites above
- If you installed it and still have the error, close your development environment, then open it and try again

```
[current date] [current time] error conencting to sqlite database: Binary was compiled with 'CGO_ENABLED=0',
go-sqlite3 requires cgo to work. This is
a stub
exit status 1
```

- You need to add and set the ENV variable 'CGO_ENABLED' to 1

```
# runtime/cgo
cgo: C compiler "gcc" not found: exec: "gcc": executable file not found in %PATH%"
```

- You likely do not have 'gcc' in your development environment.
- If you are using VSCode, follow [this guide](https://code.visualstudio.com/docs/cpp/config-mingw)
- Otherwise, look for how to install c/c++ and gcc on your machine, and update the PATH ENV variable
- Be sure to restart your environment after installing the proper extensions

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
