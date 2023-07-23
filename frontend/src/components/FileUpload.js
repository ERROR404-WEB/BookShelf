import React from 'react'
import Form from 'react-bootstrap/Form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';

const FileUpload = () => {
    const [value, setValue] = React.useState(null)
    const [banner, setBanner] = React.useState(null)
    const [book, setBook] = React.useState(null)

    const handleChange = (newValue) => {
        setValue(newValue)
    }

    const flexstyle = { display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }
    return (

        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '75vmin' },
                }}
                noValidate
                autoComplete="off"
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
            >

                <TextField id="outlined-basic" label="Title" variant="outlined" />
                <div className="box" style={{ ...flexstyle, border: "1px solid black" }}>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Book Banner Image</Form.Label>
                        <Form.Control type="file"
                            accept="application/pdf"
                            onChange={(e) => {
                                setBanner(e.target.files[0]);
                            }} />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Book Pdf </Form.Label>
                        <Form.Control type="file"
                            accept="application/pdf"
                            onChange={(e) => {
                                setBook(e.target.files[0]);
                            }}
                        />
                    </Form.Group>
                    <Button variant="info" style={flexstyle}> Submit </Button>{' '}
                </div>
            </Box>
        </>

    )
}

export default FileUpload