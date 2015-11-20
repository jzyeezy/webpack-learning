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
            client: {
                files: ["app/scripts/**/*", "public/index.html"],
                tasks: ["webpack:dev"]
            },
            styles: {
                files: ["app/styles/*"],
                tasks: ["sass:dev"]
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
        },
        sass: {
            options: {
                sourceMap: true
            },
            dev: {
                files: {
                    'build/styles/app.css' : 'app/styles/app.scss'
                }
            }
        }
    });

    grunt.registerTask("default", [
        "webpack:dev",
        "sass:dev",
        "express:dev",
        "open:dev",
        "watch"
    ]);
};