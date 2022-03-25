import { delay } from "../../utils";

class HtppClient {

    constructor(baseURL) {
        this.baseURL = baseURL
    }

    async get(path) {
        await delay(2000)

        const response = await fetch(`${this.baseURL}${path}`)

        if (response.ok) {
            return response.json();
        }
        throw new Error(`${response.status} - ${response.statusText}`)
    }
}

export default HtppClient