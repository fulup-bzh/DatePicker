DatePicker for Angular & Foundation
====================================

Angular Picker Foundation5 friendly. The only real dependency outside of Angular is Awesome founts.

Project :
 - demo: http://datepicker.breizhme.net
 - home: https://github.com/fulupbzh/datepicker-angular-foundation

This DatePicker simplified version for Angular of: http://foundation-datepicker.peterbeno.com
 - date picker for foundation/jquery https://github.com/najlepsiwebdesigner/foundation-datepicker
 - date picker for angular/bootstrap https://github.com/angular-ui/bootstrap/tree/master/src/datepicker

Installation
-------------

1. download & unzip source from GitHub repository:

2. copy the files
    3. **/js/angular-foundation-datepicker-min.js**
    4. **/css/angular-foundation-datepicker.css**

3. &lt;link&gt; and &lt;script&gt; them into your page 

4. to see the arrows and icons, please include **font-awesome**:

    &lt;link href=&quot;http://netdna.bootstrapcdn.com/font-awesome/3.0.2/css/font-awesome.css&quot; rel=&quot;stylesheet&quot;&gt;
	
Usage  <date-picker>
---------------------
```
   <date-picker
      class="my-project-class-4-date-picker"
      placeholder="Track Date Selection"

      <!-- Angular Scope Variables -->
      callback="myCallBack"                    // $scope.myCallBack(selectedDate) is called when ever a new date is selected
      ng-model="viewDate"                      // $scope.viewDate angular scope for selected date
      not-after="myEndDate"                    // $scope.myEndDate   => JS Date OBJECT
      not-before="myStartDate"                 // $scope.myStartDate => idem

      <!-- Angular Directive Attributes -->
      format="dd-MM-yy"                        // angular date filter https://docs.angularjs.org/api/ng/filter/date
      language="en"                            // English, French, German, ...
      weekstart="1"                            // Week start [1==Monday]
      today='true/false'                       // Display or not Today Button
      dayoff=[6,7]                             // Disable Saturday/Sunday for selection
      weeknum=true                             // Display week number
      autohide=false                           // Do not close picker after date selection

   /></date-picker>

```

