module.exports = function(grunt){
    grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
       sass: {
           dist: {
               files: {
                   'dist/css/styles.css' : 'sass/styles.scss'
               }
           }
       },
       cssmin: {
            minify: {
                src: 'dist/css/styles.css',
                dest: 'dist/css/styles.min.css'
            }
       },
       browserSync: {
           dev: {
               bsFiles: {
                   src: [
                       'dist/css/styles.min.css',
                       '*.html'
                   ]
               },
               options: {
                   watchTask: true,
                   server: './'
               }
           }
       },
       watch: {
           css: {
               files: 'sass/styles.scss',
               tasks: ['sass','cssmin']
           }
       }
    })

    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-browser-sync')
    grunt.registerTask('default', ['browserSync','watch'])
}