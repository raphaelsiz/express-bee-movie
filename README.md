# express-bee-movie
Express middleware that returns the bee movie if something isn't quite right.
## Usage
### Installation
`npm i express-bee-movie`
### Usage with express
```js
import express from 'express'
import beeMovie from 'express-bee-movie'
const app = express()
app.use(beeMovie())
```
### Options
Currently there are two options that can be passed in: `redirect` is set by default to a URL that contains the entire bee movie script. `condition` is a function that determines whether the user will be redirected. Technically both options, and the options object itself, are optional,
## Example usage
An example where we use the package to redirect ChatGPT's crawler bots to the bee movie:
```js
import express from 'express';
import userAgent from 'express-useragent';
import beeMovie from 'express-bee-movie';

const app = express();
app.use(userAgent.express());
app.use(beeMovie({
    condition: function(req) {
        return (req.useragent.source == "GPTBot")
    }
}))
app.get('/',function(req,res) {
    res.send("Congrats, you're not the GPTBot!")
})
app.listen(3000)
```