import React, {useState} from 'react'

function NewTransactions() {

    // declaring state 
    const [isClicked, setIsClicked] = useState({
        date:"",
        description:"",
        category:"",
        amount:""
    })
    // function that handles the change in the inputs
       const handleChange = (e) => {
        console.log(e.target.value)
        setIsClicked({
            // spread operator to copy the data then targtting the value
            ...isClicked,
            [e.target.name] : e.target.value,   
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // creates the post when the data is added it adds the data to the backend ie ..db.json
        fetch('http://localhost:8001/transactions',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(isClicked),
            

        })
        // this makes the website to reload after data is passed and the button is clicked
        window.location.reload() 

    }


  return (
    // input section for adding a new transactions
    <form onSubmit={handleSubmit} className = "forminput">
        <input id = "inputtransaction" name='date' type="date" onChange={handleChange}  />
        <input id = "inputtransaction" type="text" name='description' placeholder='Description' onChange={handleChange} />
        <input id="type" placeholder= "Category" name='category' onChange = {handleChange} />
        <input id = "inputtransaction" type="number" name='amoungt' placeholder='Amount' onChange={handleChange}  />
        <button id = "newtransactions" type="submit" onSubmit={handleSubmit}>New Transaction</button>
    </form>
  )
}

export default NewTransactions