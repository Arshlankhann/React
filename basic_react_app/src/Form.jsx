function handleFormClick(){
    console.log("Form was Submit")
}

export default function from(){
    return(
        <from>
            <input placeholder="write something"/>
            <button onClick={handleFormClick}>Submit</button>
        </from>
    )
}