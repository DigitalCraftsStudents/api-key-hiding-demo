# Hiding your API keys:

## tl;dr - React-only

```sh
echo "config.js" >> .gitignore
git add .gitignore
git commit -am 'ignores config.js'
git push
```

And in your React app:

```js
import config from './config';
// use config variables
```

The problem is: when you publish your React app, your API keys get packaged with your React app.

So: it's hidden from GitHub, but not from the internet.

## option 2 - let your backend do the API requests

