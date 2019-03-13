module.exports = function(grunt){
  rts = function (grunt) {
    grunt.initConfig({
      mochacli: {
        options: {
          reporter: 'spec',
          ail: true
            
        },
        all: ['test/*.js']
                           
      },
      mocha_istanbul: {
        coverage: {
          src: 'test'
                    
        }
          
      },
      istanbul_check_coverage: {
        default: {
          options: {
            coverageFolder: 'coverage*',
            check: {
              lines: 90,
              statements: 90
                                                  
            }
                        
          } 
            
        }
          
      }
        
    });

    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.loadNpmTasks('grunt-mocha-istanbul');

    grunt.registerTask('default', ['mochacli']);   
    grunt.registerTask('cover', ['mocha_istanbul']);
    grunt.registerTask('check-cover', ['istanbul_check_coverage']);

  };

  grunt.initConfig({
       
    eslint: {
      options: {
         configFile: 'eslintrc.json',
                                        
      },
      target: ['rectangle.js']
                  
    }
  })
  grunt.loadNpmTasks('grunt-eslint');
  grunt.registerTask('default',['eslint']);
};
