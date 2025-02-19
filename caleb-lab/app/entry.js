'use strict'

const angular = require('angular')
const cowsay = require('cowsay-browser')

const cowsayApp = angular.module('cowsayApp', [])

cowsayApp.controller('CowsayController', ['$log', '$scope', CowsayController])

function CowsayController($log, $scope){
  $log.debug('#CowsayController')

  let cowsayCtrl = $scope.cowsayCtrl = {}

  cowsayCtrl.title = 'Welcome to Cowville'

  cowsayCtrl.spoke = function(oldInput){
    $log.debug('#cowsayCtrl.spoke')
    return cowsay.say({text: oldInput, f: 'dragon'})
  }

  cowsayCtrl.speak = function(input){
    $log.debug('#cowsayCtrl.speak')
    return cowsay.say({text: input || 'Mooo', f: 'dragon'})
  }

  cowsayCtrl.logger = function(input, oldInput){
    $log.debug('#cowsayCtrl.logger')
    $log.log(input)
  }
}
