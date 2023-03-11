/* eslint-disable @typescript-eslint/no-explicit-any */
import * as express from 'express'
import { Application } from 'express'

class App {
    public app: Application
    public port: number

    constructor(appInit: { port: number; middlewares: any; routes: any; }) {
        this.app = express()
        this.port = appInit.port

        this.middlewares(appInit.middlewares)
        this.routes(appInit.routes)
        this.assets()
        this.template()
    }

    private middlewares(middlewares: { forEach: (arg0: (middleware: any) => void) => void; }) {
        middlewares.forEach(middleware => {
            this.app.use(middleware)
        })
    }

    private routes(routes: { forEach: (arg0: (route: any) => void) => void; }) {
        routes.forEach(route => {
            this.app.use('/', route.router)
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private assets() {
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private template() {
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}

export default App