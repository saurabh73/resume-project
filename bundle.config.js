module.exports = {
    bundle: {
        'main/js/script': {
            scripts: './src/js/script.js',
            options: {
                rev: false,
                result: {
                    type: 'plain'
                }
            }
        },
        'main/css/style': {
            styles: [
            './src/css/styles.css',
            './src/css/resume.css'
        ],
            options: {
                rev: false,
                result: {
                    type: 'plain'
                }
            }
        },
        'vendor/js/vendor': {
            scripts: [
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/bootstrap/dist/js/bootstrap.min.js',
            './node_modules/chartist/dist/chartist.min.js',
            './node_modules/chartist-plugin-fill-donut/dist/chartist-plugin-fill-donut.min.js',
            './node_modules/waypoints/lib/jquery.waypoints.min.js',
            './node_modules/jquery-timelineme/src/jquery.timelineMe.js'
        ],
            options: {
                rev: false,
                result: {
                    type: 'plain'
                }
            }
        },
        'vendor/css/vendor': {
            styles: [
            './node_modules/bootstrap/dist/css/bootstrap.min.css',
            './node_modules/chartist/dist/chartist.min.css',
            './node_modules/font-awesome/css/font-awesome.min.css',
            './node_modules/jquery-timelineme/src/jquery.timelineMe.css'
        ],
            options: {
                rev: false,
                result: {
                    type: 'plain'
                }
            }
        }
    },
    copy: [
        {
            src: './src/assets/**/*.*',
            base: 'src'
        }
    ]
};