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
    
    scss: {
	    dist: {
		    options: {
			    style: 'compressed',
			    sourcemap: 'none',
			    loadPath: require('node-bourbon').includePaths,
			    loadPath: require('node-neat').includePaths
		    },
		    files: {
			    'app/build/css/main.css': 'app/src/scss/main.scss'
		    }
	    }
    },
    
    autoprefixer: {
      dist: {
        files: {
          'app/build/css/main.css': 'app/build/css/main.css'
        }
      }
  	},
  	
  	imagemin: {
			dynamic: {
			  files: [{
			      expand: true,
			      cwd: 'app/src/img/',
			      src: ['**/*.{png,jpg,gif}'],
			      dest: 'app/build/img/'
			  }]
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
		  styles: {
			  files: ['app/src/scss/**/*.scss'],
		    tasks: ['scss', 'autoprefixer'],
		    options: {
		      spawn: false,
		      livereload: true
		    }
		  },
		  images: {
			  files: ['app/src/img/*.{png,jpg,gif}'],
			  tasks: ['newer:imagemin:dynamic'],
			  options: {
		      spawn: false,
		    }
		  }
    }
	
	});
	
	require('load-grunt-tasks')(grunt);
	
	grunt.registerTask('default', ['concat', 'uglify', 'scss', 'autoprefixer', 'newer:imagemin', 'watch']);

};