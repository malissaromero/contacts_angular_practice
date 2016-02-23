#Description

Contacts Angular Practice is a responsive, single page basic phone book app.
The user can create contacts, edit, update, delete and update the existing contacts. It does not have a backend so the data will not persist.

#Technologies Used

AngularJS, Github

#Approach Taken

I decided with Angular because I knew I wanted to toggle my create form and I did it in Angular once before and wanted to see what else Angular can do. I followed a Treehouse tutorial and built on that. I focused on creating an app with CRUD (create, read, update, delete) functionality from the beginning even though they were bonus features. I like to practice with those four for every app I create. I had a lot of fun creating the app and want to build on it more.

#Challenges

**First Challenge:** The application has a bug where the input fields are auto populated when open all at once. For example, if I toggle the edit form, and then decide to create a contact while leaving the edit form open, the data in the edit form will auto populate the create inputs.

I know that the inputs are all linked together through ng-model which is why I first looked into creating two controllers. I have tried to create two controllers to solve the issue as you will see in the try_two_controllers branch on Github but it has not solved it.

I have submitted a stack overflow issue to fix the issue because it is bugging me to no end. http://stackoverflow.com/questions/34833406/issue-with-angular-auto-populating-the-create-form-when-i-click-on-the-edit-form

**Answer:** I figured out the answer by installing ng-Inspector browser extension. I immediately saw that I wrote two controllers on the line:

``` <div ng-controller="mainController as mainCtrl"> ```

I thought I was creating a shortcut. I changed the the line to:

``` <div ng-controller="mainCtrl">```

After that It worked great. I had to change my functions to reference $scope instead of this in the controller. I also had to change ng-models in the index.html file from mainCtrl.name to contact.name. After I made these changes it worked perfectly.

**Second Challenge:** I also tried to apply Angular's advanced functionality and directives such as orderBy so that my contacts list can show up alphabetically, but it messes up with the hard coded data in the controller especially when deleting.

``` <div class="item" ng-repeat="contact in mainCtrl.contacts | orderBy:'-name': true track by $index">```

There were similar issues that other developers have met that I found online, such as passing the actual contact in the delete function instead of $index but it has not solved the issue.

#Bonus Functionality

1. Add ability to "favorite" entries
2. Validate the Phone Number
3. Add some color and theme beyond the basic CSS provided by a framework
4. Use a modern JavaScript MVC framework
5. Add ability to edit any entries
