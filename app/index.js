'use strict';

var _ = require('lodash'),
    chalk = require('chalk'),
    yeoman = require('yeoman-generator'),
    D3PluginSetupScaffolder = yeoman.generators.Base.extend({
	init: function() {
		var prompts,
            done = this.async();

		this.log(
			'\n' + chalk.bold.underline('Welcome to the D3 Plugin Scaffolder') +
			'\n' +
			'This plugin is gonna help you setup a plugin for d3' +
			'\n'
		);

		prompts = [{
			type: 'input',
			name: 'projectName',
			message: 'What is the name of your plugin? (for package.json etc.)',
			default: 'd3-simple-plugin'
		}];

		this.prompt(prompts,
            function (props) {
    			_.extend(this, props);
    			this.packageName = _.kebabCase(_.deburr(this.projectName));
    			if (this.packageName.slice(0, 4) !== 'd-3-') {
    				this.packageName = 'd3-' + this.packageName;
    			} else {
                    this.packageName = 'd3-' + this.packageName.slice(4, this.packageName.length);
                }
    			this.currentYear = new Date().getFullYear();
    			done();
            }
            .bind(this));
	},

	propmtOwnerDetails: function() {
		var prompts,
            done = this.async();

		prompts = [
            {
                type: 'input',
			    name: 'ownerName',
			    message: 'What is your name? (for copyright notice, etc.)'
		    }
        ];

		this.prompt(prompts,
            function (props) {
                _.extend(this, props);
                done();
            }
            .bind(this));
	},

	promptProjectDetails: function() {
		var prompts,
            done = this.async();

		prompts = [
            {
                type: 'input',
                name: 'ghUser',
                message: 'What is your GitHub Username?',
                default: _.capitalize(_.camelCase(this.ownerName))
		    },
            {
    			type: 'input',
    			name: 'ghRepo',
    			message: 'What is the name of the GitHub repo this will be published to?',
    			default: this.packageName
            },
            {
                type: 'input',
                name: 'projectDesc',
                message: 'Brief us about the project!',
                default: ''
		    },
            {
                type: 'confirm',
                name: 'createDir',
                message: 'Would you like to create a new directory for your plugin?',
                default: true
            }
        ];

		this.prompt(prompts,
            function (props) {
                _.extend(this, props);
                if (props.createDir) {
                	this.destinationRoot(this.packageName);
                }
                this.log('\n');
                done();
            }
            .bind(this));
	},

	writing: {
		project: function() {
			this.copy('editorconfig', '.editorconfig');
			this.copy('eslintignore', '.eslintignore');
			this.copy('eslintrc', '.eslintrc');
			this.copy('gitignore', '.gitignore');
			this.copy('npmignore', '.npmignore');

            this.template('_rollup.node.js', 'rollup.node.js');
			this.template('_rollup.config.js', 'rollup.config.js');
			this.template('_package.json', 'package.json');
			this.template('_readme.md', 'README.md');
			this.template('_LICENSE', 'LICENSE');
		},
		component: function() {
			this.template('_index.js', 'index.js');
			this.template('src/_d3-simple-plugin.js', 'src/' + this.packageName + '.js');

            this.template('script/_prepublish', 'script/prepublish');
            this.template('script/_test', 'script/test');
            this.template('script/_pretest', 'script/pretest');
            this.template('script/_start', 'script/start');
		},

        example: function () {
            this.template('example/_index.html', 'example/index.html');
        }
	},

	install: function() {
		this.npmInstall();
	},

	end: function() {
		this.log(
			'\n' + chalk.green.underline('Your new d3 plugin is ready!') +
			'\n' +
			'\nYour plugin is in /src' +
            '\nYour example is in /example' +
            '\n'+
            '\n'+
			'\n' + (this.createDir ? ('do ' + chalk.red.bold('cd ' + this.packageName)) : '') +
            '\nTo build it run ' + chalk.red.bold('npm run pretest') + ' followed by ' +
            chalk.red.bold('npm run prepublish') +
            '\nTo start a local web server with live reloading, run ' + chalk.red.bold('npm run watch') + ' followed by ' +
            chalk.red.bold('npm start') +
            '\n' +
			'\n'
		);
	}

});

module.exports = D3PluginSetupScaffolder;
