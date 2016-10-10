angular.module('starter.controllers', []);

var DashCtrl = function ($scope) {};

DashCtrl.$inject = ['$scope'];
angular.module('starter.controllers').controller('DashCtrl', DashCtrl);

var ChatsCtrl = function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
}

ChatsCtrl.$inject = ['$scope', 'Chats'];
angular.module('starter.controllers').controller('ChatsCtrl', ChatsCtrl);

var ChatDetailCtrl = function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
}

ChatDetailCtrl.$inject = ['$scope', '$stateParams', 'Chats'];
angular.module('starter.controllers').controller('ChatDetailCtrl', ChatDetailCtrl);


var AccountCtrl = function($scope) {
  $scope.settings = {
    enableFriends: true
  };
}

AccountCtrl.$inject = ['$scope'];
angular.module('starter.controllers').controller('AccountCtrl', AccountCtrl);
