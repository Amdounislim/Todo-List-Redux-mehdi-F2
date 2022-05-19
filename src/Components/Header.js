import React, { useState } from 'react'
import { Card, Form, InputGroup, FormControl, Button } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { addTask } from '../JS/actions/actionTask'

const Header = () => {
    const [myInput, setMyInput] = useState("")

    const dispatch = useDispatch()


    return (
        <Card bg="primary">
            <Card.Body>
                <h1 className={"text-white"}>To-Do-App !</h1>
                <Form >
                    <Form.Group>
                        <InputGroup className="mb-3">
                            <FormControl
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                onChange={(e) => setMyInput(e.target.value)}
                                value={myInput}
                            />
                            <Button variant="success" onClick={() => { dispatch(addTask({ text: myInput, id: Math.random(), isDone: false })); setMyInput("") }}>
                                +
                            </Button>

                        </InputGroup>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card >
    )
}

export default Header