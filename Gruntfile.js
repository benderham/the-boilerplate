module.exports = function(grunt) {

	grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
    	dist: {
	    	src: [
		    	'app/src/js/vendor/*.js',
		    	'app/src/js/global.js'
	    	],
	    	dest: 'app/build/js/global.js',
    	}
    },
    
    uglify: {
	    build: {
		    src: 'app/build/js/global.js',
		    dest: 'app/build/js/global.min.js'
	    }
    },
    
    sass: {
	    dist: {
		    options: {
			    style: 'compressed',
			    sourcemap: 'none',
			    loadPath: require('node-bourbon').includePaths,
			    loadPath: require('node-neat').includePaths
		    },
		    files: {
			    'app/build/css/main.css': 'app/src/sass/main.scss'
		    }
	    }
    },
    
    watch: {
	    scripts: {
		    files: ['app/src/js/*.js'],
		    tasks: ['concat', 'uglify'],
		    options: {
			    spawn: false,
		    },
		  },
		  css: {
			  files: ['app/src/sass/*.scss'],
		    tasks: ['sass'],
		    options: {
		      spawn: false,
		    }
		  }
    }
	
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['concat', 'uglify', 'sass', 'watch']);

};