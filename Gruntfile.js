/*globals module, require, process */
/*jslint vars:true */
module.exports = function (grunt) {
  'use strict';

  // Default task.
  grunt.registerTask('build',   ['sass','uglify']);
  grunt.registerTask('default', ['build','watch']);

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // SASS plugin is used for CSS
    sass: {
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'dist/bzm-date-picker.css': ['src/scss/app.scss']
        }
      }
    },
    uglify: {
      options: {
        compress: {
          drop_console: true
        }
      },
      target: {
        files: {
          'dist/bzm-date-picker.min.js': ['src/js/*.js']
        }
      }
    },
    watch: {
      grunt: {
        files: ['Gruntfile.js'],
        task: ['build']
      },
      sass: {
        files: ['src/scss/*.scss'],
        tasks: ['sass']
      },
      uglify: {
        files: ['src/js/*.js'],
        tasks: ['uglify']
      }
    }
  });
};
