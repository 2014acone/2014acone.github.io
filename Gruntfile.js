module.exports = function(grunt) {

    grunt.initConfig({
        nodemon: {
            dev: {
                script: 'index.js'
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'style/sass',
                    src: ['*.scss'],
                    dest: './style/css',
                    ext: '.css'
                }],
                options: {
                    sourcemap: 'none'
                }
            }
        },
        watch: {
            css: {
                files: 'style/sass/*.scss',
                tasks: ['sass']
            }
        },
        concurrent: {
            target: {
                tasks: ['build', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['concurrent:target']);
    grunt.registerTask('build', ['sass']);
};
