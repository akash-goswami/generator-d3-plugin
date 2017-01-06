# generator-d3-plugin

[Yeoman](http://yeoman.io) generator for [D3](https://d3js.org/) v4 plugins

## Getting Started

Install the generator:

```bash
npm install -g generator-d3-plugin
```

Then run the generator:

```bash
yo d3-plugin
```
and follow the prompts.

## Details

- The plugins are build using rollup which is suggested by D3.

- Unit test cases can be written in tape, tape is added in devDependencies by default.

- The plugin can be tested using `npm test`. Only eslint is enabled for the time being.

- The plugin can be build using `npm run prepublish`.

- Local server with live reloading can be achieved by running `npm run watch` *followed by* `npm start`. (You can run it in the reverse order but you have to refresh the browser in that case).

- The build is created in `/build` folder.

- The examples are found in the `/example` folder. It is recommended that you use this folder to display example of your plugin.

- Once the live reloading is on, the builds are created __only__ in the `example/build` folder. **Once you are done developing the plugin run** `npm run prepublish` **for final build to the** `/build` **folder**.


## Read

Read more about [D3 v4 Plugin](https://bost.ocks.org/mike/d3-plugin/) and [reusable chart component](http://bl.ocks.org/cpbotha/5073718) for plugins.
