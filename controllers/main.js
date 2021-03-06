'use strict';

angular.module("contactsApp", ["firebase"])
.controller("mainCtrl", ["$scope", "$firebase",
  function($scope, $firebase) {

    var url = "https://contacts-angular.firebaseio.com/";
    var fireRef = new Firebase(url)

    fireRef.set({"malissa": "gorilla with glasses and pizza"})


    $scope.contacts = [
      {"id": "0", "name":"Carson Daly", "phoneNumber":"000-000-0000"},
      {"id": "1", "name":"Britney Spears", "phoneNumber":"000-000-0000"},
      {"id": "2", "name":"Freddie Prince Jr", "phoneNumber":"000-000-0000"},
      {"id": "3", "name":"Halle Berry", "phoneNumber":"000-000-0000"},
      {"id": "4", "name":"Gary Oldman", "phoneNumber":"000-000-0000"},
      {"id": "5", "name":"Aaron Carter", "phoneNumber":"000-000-0000"}
    ]

    $scope.formIsVisible = false
    $scope.toggleForm = function() {
      console.log("toggleform")
      if($scope.formIsVisible){
        $scope.formIsVisible = false
      }
      else {
        $scope.formIsVisible = true
      }
    }

    $scope.reset = function(){
      $scope.contact.name = ""
      $scope.contact.phoneNumber = ""
    }

    $scope.create = function() {
      console.log("create works")
      $scope.contacts.unshift({
        name: $scope.contact.name,
        phoneNumber: $scope.contact.phoneNumber
      });
      $scope.reset()
    };

    $scope.submitForm = function(isValid) {
      if(isValid) {
        console.log("our form is amazing");
        $scope.create()
      };
    }

    this.edit = function(index) {
      var contact = this.contacts[index];
        this.name = contact.name;
        this.phoneNumber = contact.phoneNumber;
    };

    this.update = function(index) {
      var contact = this.contacts[index];
        contact.name = this.name;
        contact.phoneNumber = this.phoneNumber;
    };


    // this.delete = function(contact) {
    //   //loop through the objects and find the id that I just deleted
    //   this.contacts = this.contacts.filter(function(item){
    //     //if the id does not match what we just deleted return the item/items that do match
    //     return contact.id != item.id
    //   })
    //   //reset my entire list
    //   this.reset()
    // };

    $scope.delete = function(index) {
      console.log("delete")
      $scope.contacts.splice(index, 1);
    };

    // this.favorited = function(index) {
    // }

}
]);
