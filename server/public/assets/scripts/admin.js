var myApp = angular.module('myApp', []);

myApp.controller('WelcomeController', ['$scope', '$http', function($scope, $http){
    $scope.note = {};
    $scope.nameArray=[];

    //POST
    $scope.clickButton = function(note){
        $http.post('/admin/data', note).then(function(response){
            $scope.getPeople();
        });
    };

    //GET
    $scope.getPeople = function(){
        $http.get('/admin/data').then(function(response){
            $scope.nameArray = response.data;
        });
    };

    //DELETE
    $scope.deleteButton = function(id){
        $http.delete('/admin/data'+ id).then(function(response){
            //console.log(response);
            $scope.getPeople();
        })
    };

    $scope.getPeople();

}]);


//$(document).ready(function(){
//    getData();
//    $("#messageForm").submit(function(event){
//        event.preventDefault();
//        var values = {};
//
//        $.each($(this).serializeArray(), function(i, field){
//            values[field.name] = field.value;
//        });
//
//        $("#messageForm").find("input[type=text]").val("");
//        $("#messageForm").find("textarea[type=text]").val("");
//
//        postData(values);
//    });
//
//    $("#messageContainer").on('click', '.delete', deleteMessage);
//});
//
//function getData(){
//    $.ajax({
//        type: "GET",
//        url: "/admin/data",
//        success: function(data){
//            updateDOM(data);
//        }
//    });
//}
//
//function postData(values){
//    $.ajax({
//        type: "POST",
//        url: "/admin/data",
//        data: values,
//        success: function(){
//            getData();
//        }
//    });
//}
//
//function deleteMessage(){
//    var deletedId = {"id" : $(this).data("id")};
//
//    //console.log("Meaningful Log: ", deletedId);
//
//    $.ajax({
//        type: "DELETE",
//        url: "/admin/data",
//        data: deletedId,
//        success: function(data){
//            //if (data){
//            //   getData();
//            //} else {
//            //   //show warning to user
//            //}
//            getData();
//        }
//    });
//}
//
//function updateDOM(data){
//    $("#messageContainer").empty();
//
//    for(var i = 0; i < data.length; i++){
//        var el = "<div class='row messageBlock'>" + "<div class='nameAndMessage col-xs-10'>" +
//            "<p class='name'>" + data[i].name + " said: </p>" +
//            "<p class='message'>" + data[i].message + "</p></div>" +
//            "<div class='deleteButton col-xs-2'><button class='delete btn btn-danger' data-id='" +
//            data[i].id + "'>Delete</button></div>" +
//            "</div>";
//
//        $("#messageContainer").append(el);
//    }
//
//}