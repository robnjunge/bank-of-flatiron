# Bank of Flatiron
Welcome to the Bank of Flatiron, where you can trust us with all your financial data!

To view in VSCode, right click on the README.md file and select "Open Preview".

## Instructions
For this project, you’ll be building out a React application that displays a list of your recent bank transactions, among other features.

Part of what this code challenge is testing is your ability to follow given instructions. While you will definitely have a significant amount of freedom in how you implement the features, be sure to carefully read the directions for setting up the application.

## Setup
After unbundling the project:

<li>Run npm install in your terminal.
Run npm run server. This will run your backend on port 8001.</li>
<li>In a new terminal, run npm start. This will run your React app on port 8000.
Make sure to open http://localhost:8001/transactions in the browser to verify that your backend is working before you proceed!

If you are unfamiliar with HTML tables, take a look at the docs with an example here</li>

## Endpoints
The base URL for your backend is: http://localhost:8001

## Core Deliverables
As a user, I should be able to:
<li>
See a table of the transactions.<br></li>
<li>Fill out and submit the form to add a new transaction. This should add the new transaction to the table as well as post the new transaction to the backend API for persistence. <br></li>
<li>Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.<br> </li>

## Endpoints for Core Deliverables
<li>GET /transactions<br>
Example Response:<br>
`
[
  {
    "id": 1,
    "date": "2019-12-01",
    "description": "Paycheck from Bob's Burgers",
    "category": "Income",
    "amount": 1000
  },<br>
  {
    "id": 2,
    "date": "2019-12-01",
    "description": "South by Southwest Quinoa Bowl at Fresh & Co",
    "category": "Food",
    "amount": -10.55
  }
]
`<br></li>
<li>
POST /transactions<br>
Required Headers:<br>
`
{
  "Content-Type": "application/json"
}`<br></li>
<li>
Request Object:<br>
`
{
  "date": "string",
  "description": "string",
  "category": "string",
  "amount": number
}`<br></li>
<li>
Example Response:<br>
`
{
  "id": 1,
  "date": "2019-12-01",
  "description": "Paycheck from Bob's Burgers",
  "category": "Income",
  "amount": 1000
}`</li>