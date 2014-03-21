module.exports = function(grunt) {

	//configure grunt
	grunt.initConfig({
		uglify: {
			development: {
			// FILES ARRAY -
			// files: [
			// 	{
			// 		src: 'javascripts/*.js',
			// 		dest: 'javascripts/min/main.min.js'
			// 	}
			// ]
			//
			// Files Object
			// 	files: {
			// 		'javascripts/min/main.min.js': 'javascripts/*.js'
			// 	}
			// }
			// },
			// Expanded files
			files: [
				{
					expand: true,
					cwd: 'javascripts',
					src: ['*.js'],
					dest: 'javascripts/min',
					ext: '.min.js'
				}
			],
			options: {
				sourceMap: true
			}
			},
			build: {
				files: {
					'javascripts/min/app.min.js': 'javascripts/*.js'
				}
			}
			},	
		cssmin: {
			development: {
				files: {
					'css/min/main.min.css': 'css/main.css'
				}
			}

		},
		watch: {
			uglify: {
				files: 'javascripts/*.js',
				task: ['uglify:development']
			},
			cssmin: {
				files: 'css/*.css',
				tasks: ['cssmin:development']
			}
		}
	});

	grunt.registerTask('development', ['uglify:development', 'cssmin: development']);
	grunt.registerTask('build', ['uglify:build', 'cssmin:development']);

	grunt.registerTask('default', ['development']);

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
};