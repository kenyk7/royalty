// ==== CONFIGURATION ==== //

// Project paths
var project = 'royalty',
    src  = './src/',
    build = './build/',
    dist  = './dist/'+project+'/',
    assets = './assets/',
    bower  = './bower_components/',
    composer = './vendor/',
    modules = './node_modules/';


// Project settings
module.exports = {
  
  browsersync: {
    files: [build+'/**', '!'+build+'/**.map'],
    notify: false,
    open: true,
    port: 3000,
    proxy: 'local.app.com',
    watchOptions: {
      debounceDelay: 500
    }
  },

  images: {
    build: {
      src: src+'**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)',
      dest: build
    },
    dist: {
      src: [dist+'**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)', '!'+dist+'screenshot.png'],
      imagemin: {
        optimizationLevel: 7,
        progressive: true,
        interlaced: true
      },
      dest: dist
    }
  },

  livereload: {
    port: 35729
  },

  scripts: {
    bundles: {
      core: ['core'],
      plugins: ['plugins']
    },
    chunks: {
      core: [
        src+'js/core.js'
      ],
      plugins: [
        bower+'jquery/dist/jquery.js',
        bower+'bootstrap-sass/assets/javascripts/bootstrap.js'
      ]
    },
    dest: build+'js/',
    lint: {
      src: [src+'js/**/*.js']
    },
    minify: {
      src: build+'js/**/*.js',
      uglify: {},
      dest: build+'js/'
    },
    namespace: 'royalty-'
  },

  styles: {
    build: {
      src: src+'scss/**/*.scss',
      dest: build+'css/'
    },
    compiler: 'libsass',
    autoprefixer: { browsers: ['> 3%', 'last 2 versions', 'ie 9', 'ios 6', 'android 4'] },
    minify: { safe: true },
    rubySass: {
      loadPath: ['./src/scss', bower, modules],
      precision: 6,
      sourcemap: true
    },
    libsass: {
      includePaths: ['./src/scss', bower, modules],
      precision: 6,
      onError: function(err) {
        return console.log(err);
      }
    }
  },

  theme: {
    lang: {
      src: src+'languages/**/*',
      dest: build+'languages/'
    },
    php: {
      src: src+'**/*.php',
      dest: build
    },
    fonts: {
      src: src+'fonts/**/*',
      dest: build+'fonts/'
    }
  },

  utils: {
    clean: [build+'**/.DS_Store'],
    wipe: [dist],
    dist: {
      src: [build+'**/*', '!'+build+'**/*.map'],
      dest: dist
    },
    normalize: {
      src: modules+'normalize.css/normalize.css',
      dest: src+'scss/vendor/normalize',
      rename: '_normalize.scss'
    }
  },

  watch: {
    src: {
      styles: src+'scss/**/*.scss'
      scripts: src+'js/**/*.js'
      images: src+'**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)'
      theme: src+'**/*.php'
      livereload: build+'**/*'
    },
    watcher: 'browsersync' // use ('browsersync') and Livereload ('livereload')
  }

}
