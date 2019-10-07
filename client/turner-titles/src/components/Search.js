import React from 'react'
import {Form,FormControl} from 'react-bootstrap'
import {debounce} from 'lodash'
import 'bootstrap/dist/css/bootstrap.min.css';
import getTitles from '../actions/GetTitles'


const Search = ({setTitles}) => {

   const extractTitles = (data) =>{
       setTitles(data)
    } 

   const handleChange = debounce((text) => {
        let titles = getTitles(text)
        titles.then( data => {
            extractTitles(data)
        }
     )
    }, 1000)

 
    return (
        <Form inline >
            <FormControl type="text" onChange={e => handleChange(e.target.value)} placeholder="Search Titles"/>
        </Form>
    )
}

export default Search




