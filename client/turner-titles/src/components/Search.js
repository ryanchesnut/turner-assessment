import React, {useState} from 'react'
import {Form,FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Search =() => {

    return (
        <Form inline >
            <FormControl type="text" placeholder="Search"/>
        </Form>
    )
}

export default Search




