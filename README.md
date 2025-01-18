# Assignment-2
Problem 1: Online Appointment Scheduler
Objective: Build a dynamic scheduler to manage online appointments asynchronously.
Tasks:
Create an array of appointment objects with the following fields:
clientName (string): Name of the client.
appointmentTime (Date object): Exact time of the appointment.
serviceType (string): Type of service (e.g., "Consultation", "Follow-up").
Implement the following functions:
Add Appointment: Add a new appointment to the array. Use try...catch to ensure the appointmentTime is a valid Date object and clientName is non-empty.
Upcoming Appointments: Display appointments scheduled for the next hour. Use Date and Math objects to filter the list.
Send Reminder: Use setTimeout() to log a reminder message (e.g., "Reminder: Your appointment for [Service] with [Client] is scheduled at [Time]") when the appointment time approaches.
Export all functions in a module and import them into a separate script for testing.

Problem 2: Expense Tracker
Objective: Create a utility to track and analyze expenses using asynchronous programming and error handling.
Tasks:
Create an array of expense objects with the following fields:
description (string): Description of the expense.
amount (number): Amount spent.
date (Date object): Date of the expense.
Implement the following functions:
Add Expense: Add a new expense to the array. Use try...catch to validate the input (e.g., amount must be a positive number, date must be valid).
Total Expenses: Use reduce() to calculate the total amount spent.
Filter by Date Range: Filter expenses within a specific date range provided by the user.
Async Fetch Expense Report: Simulate fetching an expense report asynchronously using a Promise. Log the report when the Promise resolves, and handle errors if the Promise is rejected.
Export all functions in a module and import them into a separate script for testing.

Problem 3: Study Planner
Objective: Build a study planner to manage and track study sessions for students.
Tasks:
Create an array of study session objects with the following fields:
topic (string): Topic to study.
sessionTime (Date object): Scheduled time for the session.
duration (number): Duration of the session in minutes.
Implement the following functions:
Add Session: Add a new study session to the array. Use try...catch to validate inputs (e.g., duration must be a positive number, sessionTime must be a valid date).
List Today’s Sessions: Use the Date object to display all sessions scheduled for the current day.
Session Countdown: Use setTimeout() to log a countdown message when the session starts (e.g., "Session on [Topic] starts now!").
Async Fetch Study Materials: Simulate fetching study materials asynchronously for a given topic using a Promise. Use async/await to handle the Promise and log the materials once fetched.
Export all functions in a module and import them into a separate script for testing.

How to Run Clone the repository: git clone https://github.com/your-repository-link Navigate to the desired problem folder: cd Your-Folder-name Run the JavaScript file using Node.js: node index.js
