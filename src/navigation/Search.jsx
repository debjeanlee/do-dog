import React, { useState } from 'react'
import { FormControl, Button, Row } from 'react-bootstrap'
import axios from '../beers/axios'

function Search() {

    const [ input, setInput ] = useState("");
    const [ results, setResults ] = useState([]);

    function handleChange(e){
        setInput(e.target.value);
    }
    console.log(input);

    
    function submit(){
        let str = input.replace(" ", "_");
        document.getElementById("searchbeer").value = "";
        async function search(input){
            const res = await axios.get(`?beer_name=${input}`);
            setResults([res.data]);
        }
        search(str);
    }

    console.log("results:", results);
    

    return (
        <div>
            <Row>
                <FormControl type="text" placeholder="Search for a beer" className="mr-sm-2 my-auto" id="searchbeer" onChange={handleChange}/>
                <Button variant="outline-secondary" onClick={submit} >Search</Button>
            </Row>
        </div>
    )
}

export default Search
