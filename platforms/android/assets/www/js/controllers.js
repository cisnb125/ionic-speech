angular.module('starter.controllers', [])

.controller('DashCtrl', function(AnnyangService, $scope) {
  var vm = this;
  vm.init = function() {
    vm.clearResults();

    AnnyangService.addCommand('*allSpeech', function(allSpeech) {
      console.debug(allSpeech);
      vm.addResult(allSpeech);
    });

    AnnyangService.start();
  };

  vm.addResult = function(result) {
    vm.results.push({
      content: result,
      date: new Date()
    });
  };

  vm.clearResults = function() {
    vm.results = [];
  };

  vm.init();
})

.controller('ChatsCtrl', function($scope, Chats) {
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
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
