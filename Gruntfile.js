module.exports = function(grunt) {
  
  // Let's set up our 'source' and 'build' folders
  var globalConfig = {
    src: 'app/src',
    build: 'app/build'
  };
  
  // Load all grunt tasks matching the 'grunt-*' pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    globalConfig: globalConfig,
    pkg: grunt.file.readJSON('package.json'),
    
    // Watch for file changes
    watch: {
      // Watch for changes in rootImages
      favicons: {
        files: ['<%= globalConfig.src %>/favicons/**/*.{jpg,jpeg,png,gif,svg}'],
        tasks: ['newer:copy:favicons']
      },
      // Watch for changes in fonts
      fonts: {
        files: ['<%= globalConfig.src %>/fonts/**/*.{eot,svg,ttf,woff,woff2}'],
        tasks: ['newer:copy:fonts']
      },
      // Watch for changes in vendor javascript
      vendorScripts: {
        files: ['<%= globalConfig.src %>/js/vendor/**/*.js'],
        tasks: ['concat:vendorScripts']
      },
      // Watch for changes in main javascript
      mainScript: {
        files: ['<%= globalConfig.src %>/js/main.js'],
        tasks: ['jshint:mainScript', 'copy:mainScript']
      },
      // Watch for changes to styles
      styles: {
        files: ['<%= globalConfig.src %>/scss/**/*.{scss,sass}'],
        tasks: ['sass:develop', 'autoprefixer']
      },
      // Watch for changes in jade
      jade: {
        files: ['<%= globalConfig.src %>/jade/**/*.jade'],
        tasks: ['jade']
      }   
    }, 
    // end watch
    
    // Let's do some copying!
    copy: {
      
      // Favicons
      favicons: {
        files: [{
          expand: true,
          cwd: '<%= globalConfig.src %>/favicons/',
          src: ['**'], 
          dest: '<%= globalConfig.build %>/'
        }]
      },
      
      // Font files
      fonts: {
        files: [{
          expand: true,
          cwd: '<%= globalConfig.src %>/fonts',
          src: ['**'], 
          dest: '<%= globalConfig.build %>/fonts'
        }]
      },
      
      // Main javascript file
      mainScript: {
        files: [{
          expand: true,
          cwd: '<%= globalConfig.src %>/js',
          src: ['main.js'],
          dest: '<%= globalConfig.build %>/js/'
        }]
      }
          
    }, 
    // end copy 
    
    // SASS/CSS Development
		// Compile sass
		sass: {
			develop: {
				options: {
					style: 'expanded',
          sourcemap: 'none'
				},
				files: {
					'<%= globalConfig.build %>/css/main.css': '<%= globalConfig.src  %>/scss/main.scss'
				}
			}
		},
		// end compilation
		
		// Autoprefixer
		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'ie9', 'ios 6', 'android 4']
			},
			files: {
				expand: true,
				flatten: true,
				src: '<%= globalConfig.build %>/css/*.css'
			}
		},
		// end autoprefixer
		
		// SASS/CSS Build
		// Combine all of our media queries
		cmq: {
			mainCSS: {
        expand: true,
        src: '<%= globalConfig.build %>/css/*.css'
	    }
		}, // end combining media queries
		
		// Compress CSS
		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: '<%= globalConfig.build %>/css/',
		      src: ['*.css', '!*.min.css'],
		      dest: '<%= globalConfig.build %>/css/',
		      ext: '.css'
		    }]
		  }
		}, // end CSS minification
		
		// Javascript Development
		// Concat vendor/bower scripts
		concat: {
	    options: {
	      separator: ';',
	    },
	    vendorScripts: {
	      src: [
  	      'bower_components/jquery/dist/jquery.js',
  	      'bower_components/modernizr/modernizr.js',
	      	'<%= globalConfig.src  %>/js/vendor/vendor.js'
	      ],
	      dest: '<%= globalConfig.build %>/js/vendor.js',
	    }
	  },
	  // end concat
		
		// Javascript linting using jshint
		jshint: {
			mainScript: '<%= globalConfig.src  %>/js/main.js'
		}, 
		// end linting
		
		// Javascript Build
		// Javascript minification with uglify
		uglify: {
	    build: {
	      files: {
	        '<%= globalConfig.build %>/js/main.js': ['<%= globalConfig.build %>/js/main.js'],
	        '<%= globalConfig.build %>/js/vendor.js': ['<%= globalConfig.build %>/js/vendor.js']
	      }
	    }
	  }, 
	  // end minification

		// Get images ready for summer with imagemin
		imagemin: {
			themeImages: {
				options: {
					optimizationLevel: 7,
					progressive: true,
					interlaces: true
				},
				files: [{
					expand: true,
					cwd: '<%= globalConfig.src  %>/images/',
					src: ['**/*.{jpg,jpeg,png,gif,svg}'],
					dest: '<%= globalConfig.build %>/images/'
				}]
			}
		},
		// end imagemin
		
		// Jade
		jade: {
      compile: {
        options: {
          pretty: true
        },
        files: [{
          expand: true,
          cwd: '<%= globalConfig.src %>/jade/',
          src: ['*.jade'],
          dest: '<%= globalConfig.build %>/',
          ext: '.html',
          extDot: 'first'
        }]
      }
    },
		
		// preview changes live with browserSync
		browserSync: {
			dev: {
				bsFiles: {
					src: ['<%= globalConfig.build %>/*.html', '<%= globalConfig.build %>/css/main.css', '<%= globalConfig.build %>/js/*.js','<%= globalConfig.build %>/images/**/*.{jpg,jpeg,png,gif,svg}']
				},
				options: {
          watchTask: true,
					//proxy: "dev.boilerplate",
          server: {
            baseDir: "./<%= globalConfig.build %>/"
          }					
				}
			}
		},
		// end browserSync			
	});	
	
	// Development
	grunt.registerTask('default', [
		'copy',
		'sass:develop', 'autoprefixer',
		'jshint',
		'concat:vendorScripts',
		'newer:imagemin',
		'jade',
		'browserSync', 'watch'
	]);
	
	// Build
	grunt.registerTask('build', [
		'copy',
		'sass:develop', 'autoprefixer',
		'jshint',
		'concat:vendorScripts',
		'cmq','cssmin',
		'uglify',
		'imagemin',
		'jade'
	]);

};