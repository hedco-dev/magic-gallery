# Magic Gllery

> A Vue.js/Redux project

## Redux data flow in the project

![Redux Data Flow](https://raw.githubusercontent.com/hedco-dev/magic-gallery/master/images/redux.jpg "Redux Data Flow")

## Build Setup

``` bash
# install dependencies
npm install
```

#### use the below command to serve with hot reload at localhost:8080, you must first run the on [data provider project](https://github.com/hedco-dev/Magic-Photo-Provider) on port 5000 and also use a smart way to render items in the gallery.

``` bash
# serve at localhost:8080 and call localhost:5000 to resolving api
npm start
```

#### use the below command to serve with hot reload at localhost:8080, it does not need to use local data provider and call target API directly and also has a so simple way to render items in gallery.

``` bash
# serve at localhost:8080 and giphy.com api directly
npm run dev2
```
#### the other commands

``` bash
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run doc to regenerate documentation 
npm run doc

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
