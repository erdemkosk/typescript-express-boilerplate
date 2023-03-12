
![Logo](https://i.imgur.com/q4gXVQ7.png)


# typescript-express-boilerplate


This is boilerplate for typescript & express and dependcy injection



## Acknowledgements

 - [What is boilerplate and why do we use it?](https://www.freecodecamp.org/news/whats-boilerplate-and-why-do-we-use-it-let-s-check-out-the-coding-style-guide-ac2b6c814ee7/)
 - [What is Dependency injection](https://en.wikipedia.org/wiki/Dependency_injection)


## Features

- Custom Error support. You can create any custom error with  message,code,httpCode like throw new CustomError()
- Dependcy Injection for all modules



## Tech Stack

Node, Express, Typescript, tsyringe


## API Reference

#### Throwing Error Demo

```http
  GET /error
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `-` | `-` | You will see uncustom error handler {"message":"Internal server error","success":false} |

#### Throwing Custom Error Demo

```http
  GET /custom-error
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `-` | `-` | You will see custom error handler {"message":"Example Error For Test","errorCode":1,"success":false} |

#### Testing endpoint

```http
  GET /foos
```


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `-` | `-` | You will see custom error handler {"message":"Example Error For Test","errorCode":1,"success":false} |







## Run Locally

Clone the project

```bash
  git clone https://github.com/erdemkosk/typescript-express-boilerplate.git
```

Go to the project directory

```bash
  cd typescript-express-boilerplate
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Docker

Create a Docker image

```bash
  docker build -t typescript-express-boilerplate .   
```

Run a Docker image

```bash
  docker run -p 8080:8080 typescript-express-boilerplate    
```
## Contributing

Contributions are always welcome!




## License

[MIT](https://choosealicense.com/licenses/mit/)

