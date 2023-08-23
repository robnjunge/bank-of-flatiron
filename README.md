# Bank of Flatiron
Welcome to the Bank of Flatiron, where you can trust us with all your financial data!

To view in VSCode, right click on the README.md file and select "Open Preview".

## Instructions
For this project, you’ll be building out a React application that displays a list of your recent bank transactions, among other features.

Part of what this code challenge is testing is your ability to follow given instructions. While you will definitely have a significant amount of freedom in how you implement the features, be sure to carefully read the directions for setting up the application.


## Setup 

Use <a href = https://dulcet-vacherin-5f9977.netlify.app>this </a> to get the deployed site
<li>You can also fork and clone this repository <strong>git@github.com:robnjunge/bank-of-flatiron.git</strong> in to your computer </li>
 <li>Open the project-folder using VS code.
<li>Then run npm start in your terminal to open the react app in your browser</li>

## Core Deliverables
As a user, I should be able to:
<li>
See a table of the transactions.<br></li>
<li>Fill out and submit the form to add a new transaction. This should add the new transaction to the table as well as post the new transaction to the backend API for persistence. <br></li>
<li>Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.<br></li>
<li>Delete a transaction permanently using the delete button on every trasaction<br></li>

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

## LICENSE
 MIT License


## AUTHOR
Robert Njung'e