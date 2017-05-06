var src = 'src/';
var build = '_bin/';

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

  scripts: {
    src:  src + '/js/**/*.js',
    dest: build + '/js/'
  },

  pug: {
    src:  src + '/pug/**/*.pug',
    dest: build
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
    dest: src + '/pug/includes/',
    svg: {
      xmlDeclaration: false,
      doctypeDeclaration: false
    },
    mode: {
      symbol: {
        dest: '.',
        sprite: '_svg-sprite.svg'
      }
    }
  },

  watch: {
    sass: src + '/scss/**/*.{sass,scss}',
    pug: src + '/pug/**/*.pug',
    images:  src + '/images/**/*',
    scripts: src + '/js/**/*',
    svg: src + '/svg/**/*'
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

}
