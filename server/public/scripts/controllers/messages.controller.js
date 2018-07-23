const app = angular.module('MessagesApp', []);

app.controller('MessagesController',['$http', function( $http){
    let self = this;

console.log('Controller loaded');

self.message ='Working';

self.postMessage = function(newMessage){
    console.log('Clicked:', newMessage);
    $http({
        method: 'POST',
        url: '/messages',
        data: newMessage
    }).then( function(result){
        alert('Posted!')
    }).catch( function (err){
        console.log(err);
        alert('Error')
        
    })
};


}]);