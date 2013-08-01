module.exports = function(grunt){
	// Do grunt-related things in here
	grunt.initConfig({
		//load the project configuration
		pkg: grunt.file.readJSON('package.json'),
		
		uglify: {
			options: {
		        banner: '/*! Done by, <%= pkg.name %>. On:<%= grunt.template.today("yyyy-mm-dd") %> */\n',
		        //mangle: false
		    },
		    myFiles:{
		    	files:{
		    		//minifying a single JS file
		    		'js/min/applicationEntry.min.js' : 'js/applicationEntry.js',
		    		'js/min/io.min.js' : 'js/io.js',
		    		'js/min/proj_config.min.js' : 'js/proj_config.js',
		    		'js/min/user_config.min.js' : 'js/user_config.js',
		    		//joining a lot of js files into one
		    		'js/min/kolbomobile.min.js' : ['js/applicationEntry.js','js/io.js','js/proj_config.js','js/user_config.js']
		    	}
		    	/*
		    	src: 'js/applicationEntry.js',
		    	dest: 'js/applicationEntry.min.js'
		    	*/
		    }
		}
	});

	// Load the plugin that provides the "uglify" task.
  	grunt.loadNpmTasks('grunt-contrib-uglify');

	//grunt.registerTask(taskName, [description, ] taskFunction)
	grunt.registerTask('default',['uglify']);
};