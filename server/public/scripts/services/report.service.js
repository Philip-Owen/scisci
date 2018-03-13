myApp.service('ReportService', ['$http', '$location', function ($http, $location) {
    console.log('ReportService Loaded');
    let self = this;

    self.moduleLibrary = {list: []};
    self.componentLibrary = {list: []}; 
    /******************************************/
    /*              GET REQUESTS              */
    /******************************************/
    // get all modules
    self.getModules = function() {
        $http.get('/api/report/all')
        .then( function(response) {
            console.log("getting module response", response.data);
            self.moduleLibrary.list = response.data;
        })
        .catch( function(error) {
            console.log(error);
        });
    };
    // get all components
    self.getComponents = function() {
        $http.get('/api/report/components')
        .then( function(response) {
            console.log("getting component response", response.data);
            self.componentLibrary.list = response.data;
        })
        .catch( function(error) {
            console.log(error);
        });
    };


    /******************************************/
    /*             POST REQUESTS              */
    /******************************************/



    /******************************************/
    /*              PUT REQUESTS              */
    /******************************************/



    /******************************************/
    /*            DELETE REQUESTS             */
    /******************************************/



    /******************************************/
    /*            OTHER FUNCTIONS             */
    /******************************************/



}]);
