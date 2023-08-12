import { redirect, condition } from "./config.js";

const config = {
    redirect,
    condition
}
export default function(options={}) {
    for (let prop in config) if (options[prop]) config[prop] = options[prop]
    return function (req,res,next) {
        if (config.condition(req)===true) res.redirect(config.redirect)
        else next()
    }
}