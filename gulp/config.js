var src = '_src/';
var build = '_out/';

module.exports = {

  browsersync: {
    development: {
      server: {
        baseDir: [build]
      },
      port: 8080,
      files: [
        build + '/css/*.css',
        build + '/*.html',
        build + '/images/**',
        build + '/js/**/*.js'
      ]
    }
  },

  scss: {
    src:  src + '/scss/**/*.{sass,scss}',
    dest: build + '/css/'
  },

  html: {
    src:  src + '/html/*.html',
    dest: build
  },

  scripts: {
    src:  src + '/js/**/*.js',
    dest: build + '/js/'
  },

  autoprefixer: {
    browsers: [
      'last 2 versions',
      'Safari >= 8',
      'ie 8',
      'ie 9'
    ],
    cascade: false
  },

  modernizr: {
    src:  [
      src + '/js/**/*.js',
      src + '/scss/**/*.scss'
    ],
    dest: build + '/js/',
    options: [
      'setClasses',
      'addTest',
      'html5printshiv',
      'testProp',
      'fnBind'
    ],
    tests: [
      'flexbox'
    ]
  },

  image: {
    src: src + '/images/**/*.{jpg,png,gif,svg}',
    dest: build + '/images/'
  },

  svg: {
    src: src + '/svg/*.svg',
    dest: src + '/svg',
    mode: {
      symbol: {
        dest: '.',
        sprite: 'svg-sprite.svg'
      }
    }
  },

  watch: {
    sass: src + '/scss/**/*.{sass,scss}',
    pug: src + '/pug/**/*.pug',
    images:  src + '/images/**/*',
    scripts: src + '/js/**/*'
  },

  favicons: {
    src:  src + '/favicons/*',
    dest: build
  },

  optimize: {
    css: {
      src:  build + '/css/*.css',
      dest: build + '/css/',
      options: {
        keepSpecialComments: 0
      }
    },

    js: {
      src:  build + '/js/*.js',
      dest: build + '/js/',
      options: {}
    }
  }

};