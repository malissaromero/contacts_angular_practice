Description

Contacts Angular Practice is a responsive, single page basic phone book app.
The user can create contacts, edit, update and delete the existing contacts. It does not have a backend so the data will not persist.

Technologies Used

AngularJS, Github

Approach Taken

I decided with Angular because I knew I wanted to toggle my create form and I did it in Angular once before and wanted to see what else Angular can do. I followed a Treehouse tutorial and built on that. I focused on creating an app with CRUD (create, read, update, delete) functionality from the beginning even though they were bonus features. I like to practice with those four for every app I create. I had a lot of fun creating the app and want to build on it more. 

Challenges

1. The application has a bug where the input fields are auto populated when open all at once. For example, if I toggle the edit form, and then decide to create a contact while leaving the edit form open, the data in the edit form will auto populate the create inputs.

I have tried to create two controllers to solve the issue because the inputs are all linked together through ng-model but it has not solved it.

I have submitted a stack overflow issue to fix the issue. http://stackoverflow.com/questions/34833406/issue-with-angular-auto-populating-the-create-form-when-i-click-on-the-edit-form

2. I have tried to apply Angular's advanced functionality and directives such as orderBy so that my contacts list can show up alphabetically, but it messes up with the hard coded data in the controller especially when deleting.

There were similar issues that developers have met that I found online, such as passing the actual contact instead of $index, bug again, it has not solved the issue.
