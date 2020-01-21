import React from 'react'
import Button from 'react-bootstrap/Button'
import { Form, FormControl } from 'react-bootstrap'

function User() {
    return (
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
        </Form>
    )
}

export default User