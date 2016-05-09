 function TasksController($scope){
        $scope.tasks=['Review jQuery','Finish the lab','Do laundry'];
        $scope.addTask=function(){
        $scope.tasks.push($scope.newTask);
        };
    };