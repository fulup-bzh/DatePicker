DatePicker for Angular & Foundation
====================================

Angular Picker Foundation5 friendly. The only real dependency outside of Angular is Font Awesome.

Project :
 - demo: http://breizhme.net/datepicker/demo/
 - home: https://github.com/fulup-bzh/DatePicker

This DatePicker simplified version for Angular of: http://foundation-datepicker.peterbeno.com
 - date picker for foundation/jquery https://github.com/najlepsiwebdesigner/foundation-datepicker
 - date picker for angular/bootstrap https://github.com/angular-ui/bootstrap/tree/master/src/datepicker


Installation
-------------

1. download & unzip source from GitHub repository:

2. copy the files
    - **dist/angular-foundation-datepicker-min.js**
    - **dist/angular-foundation-datepicker.css**

3. &lt;link&gt; and &lt;script&gt; them into your page 

4. to see the arrows and icons, include **font-awesome**:

    &lt;link href=&quot;http://netdna.bootstrapcdn.com/font-awesome/3.0.2/css/font-awesome.css&quot; rel=&quot;stylesheet&quot;&gt;
	
Usage  <date-picker>
---------------------
```
   <date-picker
      id="my-picker-name"                     // only use as an argument to callback
      class="my-custom-class"                 // default class is bzm-date-picker
      placeholder="Track Date Selection"      // place holder for date readonly input zone

      <!-- Angular Scope Variables -->
      callback="myCallBack"                    // $scope.myCallBack(selectedDate) is called when ever a new date is selected
      ng-model="viewDate"                      // $scope.viewDate angular scope for selected date
      not-after="myEndDate"                    // $scope.myEndDate   => JS Date OBJECT
      not-before="myStartDate"                 // $scope.myStartDate => idem

      <!-- Angular Directive Attributes -->
      format="dd-MM-yy"                        // angular date filter https://docs.angularjs.org/api/ng/filter/date
      language="en"                            // English, French, German, ...
      weekstart="1"                            // Week start [1==Monday]
      today='true|text'                        // If true display 'today' in chosen language, if 'text' display text in todaybouton
      dayoff=[6,7]                             // Disable Saturday/Sunday for selection
      weeknum=true                             // Display week number
      autohide=false                           // Do not close picker after date selection

   /></date-picker>

```

