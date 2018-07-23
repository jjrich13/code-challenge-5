const app = angular.module('MessagesApp', []);

app.service('MessagesService', ['$http', function ($http) {
    let self = this;

    self.messages = {
        list: []
    };

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
            
            self.messages.list = result.data;
            
        }).catch( function (err){
            console.log(err);
            alert('Error')
            
        })
    };
    
    self.getMessages();
    
}]);