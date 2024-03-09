import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/cartContext";
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import useOpacity from "../hooks/useOpacity";
import ConfirmationForm from "../components/Forms/ConfirmationForm";
import PageTitle from "../components/PageTitle";
import Item from "../components/Items/Item";

function Confirmation() {

    const navigate = useNavigate();

    const { cart } = useContext(CartContext);

    const [total, setTotal] = useState(0);


    useEffect(() => {
        let subtotal = 0
        cart.forEach(el => {
            subtotal += (el.price * el.amount)
        });
        setTotal(subtotal)

        cart.length == 0 && navigate("/aside-from-style-ecommerce/cart")
    }, [])
    
    const opacity = useOpacity()

    const steps = [
        'Select Products',
        'Payment Details',
        'Finish',
    ];

    return (
        <main>
        <section className={`fluid-container ${opacity}`}>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={1} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            
            <section className="mt-5 grid grid-cols-1 xl:grid-cols-3 gap-8">
                <aside className="col-span-2 h-full">
                    <PageTitle title="Payment details"/>
                    <ConfirmationForm className/>
                        <p className="px-5 py-2 bg-light rounded-md lg-title">Total: <span className="font-semibold font-dmsans">${total}</span></p>
                </aside>
                <aside className="">
                    <PageTitle title="Your Cart" style="text-left xl:text-right"/>
                    <div className="mt-5 overflow-y-hidden">
                        {cart.map((el) => (
                            <Item title={el.name} price={el.price} img={el.img}/>
                        ))}
                    </div>
                </aside>
            </section>
        </section>
    </main>
    ); 
}

export default Confirmation