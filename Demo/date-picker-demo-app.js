/**
 * Author:  Fulup Ar Foll
 * Date:    March 2015
 * Licence: Anything until you do not complain and fix bugs by yourself
 *
 * Demo Dependencies: [note: BzmDatePicker module only depend on Awesome fonts and Angular]
 *
 *  - mm.foundation Angular directive for Foundation http://pineconellc.github.io/angular-foundation/
 *  - ui-notification https://github.com/alexcrack/angular-ui-notification
 */

'use strict';

var opa = angular.module('BzmDatePickerDemo', ['mm.foundation','ui-notification','bzm-date-picker']);

opa.controller('DemoController', ['$scope', 'Notification', DemoController]);
function DemoController (scope, Notification) {
    scope.count=0;

    console.log ("Initialisation of DemoController");

    // Build few sample dates for demo purpose
    scope.today    = new Date();
    scope.date1 = new Date (scope.today.getTime() + (7 * 24 * 3600 * 1000)); // today + 7 days
    scope.date2 = new Date (scope.today.getTime() - (7 * 24 * 3600 * 1000)); // today - 7 days

    console.log ("today=%s lastweek=%s nextweek=%s", scope.today, scope.date1, scope.date2)

    // Date callback popup a message
    scope.datePickerCB = function (pickdate, pickerid) {

        if (scope.count++ > 1000) return; // more than 1000 mean we have a bug :)

        console.log (scope.count, "$scope.datePickerCB pickdate=%s", pickdate.toString());
        Notification.success ({message: scope.count + " : " + pickerid + " ==> " + pickdate.toString(), width: 100, delay: 10000});
    }

};

console.log ("Date-Picker-Demo-App Loaded");