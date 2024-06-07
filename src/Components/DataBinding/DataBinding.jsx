import React from "react";
import { useState } from "react";
import { TextField, Typography, Button } from "@mui/material";

const DataBindingComp = () => {

    const [data, setData] = useState('somesh');
    const [price, setPrice] = useState(0);
    const [inrPrice, setInrPrice] = useState();

    var handlePrice = (e) => {
        setPrice(e.target.value);
    }

    return (
        <div className='container-fluid' style={{ 'margin-top': '80px' }}>
            <div className="row">
                <div className="col-12 p-3 bg bg-dark text-white d-flex justify-content-between">
                    <div>
                        <Typography className="text-white">Data Binding Component</Typography>
                    </div>
                    <div>
                        <span className="mx-2 bi bi-person-fill"></span>
                        <span className="mx-2 bi bi-cart"></span>
                        <span className="mx-2 bi bi-bell"></span>
                    </div>
                </div>

                <div className="col-4 my-4">
                    <TextField onChange={(e) => { setData(e.target.value) }} label='Enter Data'></TextField><br />
                    <Button variant="contained" color='success' size="small" className="mt-2" onClick={() => setData('')}>Submit</Button>
                </div>

                <div className="col-8 my-4">
                    <Typography variant="h4">{data}</Typography>
                    <input type="number" name="" id="" onChange={handlePrice} />
                    <p>{price.toLocaleString('en-in', { style: 'currency', currency: 'INR' })}</p>
                </div>
            </div>
        </div>
    )
}

export default DataBindingComp;