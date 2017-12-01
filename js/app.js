console.log('loaded app');

var app = angular.module('states_iq', []);
app.controller('data_stuff', do_data);

function do_data($scope) {
    console.log('doing data stuff');
    $scope.students = data;
}