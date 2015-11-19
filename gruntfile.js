/**
 * Created by yeejo on 11/16/2015.
 */
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    var webpack = require('webpack');
    var webpackConfig = require('./webpack.config.js');
    grunt.initConfig({
        webpack: {
            dev: webpackConfig
        },
        watch: {
            app: {
                files: ["app/**/*"],
                tasks: ["webpack:dev"]
            },
            options: {
                livereload: true
            }
        },
        express: {
          dev: {
              options: {
                  script: './server.js'
              }
          }
        },
        open: {
            dev: {
                path: 'http://localhost:1234/'
            }
        }
    });

    grunt.registerTask("default", [
        "webpack:dev",
        "express:dev",
        "open:dev",
        "watch"
    ]);
};