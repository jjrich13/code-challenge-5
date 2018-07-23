const app = angular.module('MessagesApp', []);

app.controller('MessagesController',['Messages', function( $http){
    let self = this;

console.log('Controller loaded');

self.message ='Working';

self.postMessage = function(newMessage){
    $http({
        method: 'POST',
        url: '/messages',
        data: newMessage
    }).then( function(result){
        self.getMessages();
    }).catch( function (err){
        console.log(err);
        alert('Error');
        
    });
};

self.getMessages = function(){
    $http({
        method: 'GET',
        url: '/messages'
    }).then( function(result){
        console.log(result.data);
        
        self.messages = result.data;
        
    }).catch( function (err){
        console.log(err);
        alert('Error')
        
    })
};

self.getMessages();

}]);