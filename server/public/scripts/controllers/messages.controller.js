

app.controller('MessagesController',['MessagesService', function(MessagesService){
    let self = this;

    self.message = MessagesService.message

    // variable
    self.messages = MessagesService.messages;

    // functions
    self.getMessages = MessagesService.getMessages;
    self.postMessage = MessagesService.postMessage;


}]);