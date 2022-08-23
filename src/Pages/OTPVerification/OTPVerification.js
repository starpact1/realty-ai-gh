import React, { useEffect, useState } from 'react'
import { Box, Container } from '@mui/material'

import { Button, Divider, Grid, Typography } from '@mui/material'
import OTPImage from "../../Images/OTP-image.png"
import OTPInput, { ResendOTP } from "otp-input-react"
import "./OTPVerification.css"
import { Link } from 'react-router-dom'

function OTPVerification() {



    const [OTP, setOTP] = useState("")
    const [theClassName, setTheClassName] = useState("otpField")

    function handelOTP(value) {
        if (value >= 1 && value <= 9) {
            setTheClassName("otpField otpField1")
        }

        if (value >= 10 && value <= 99) {
            setTheClassName("otpField otpField2")
        }

        if (value >= 100 && value <= 999) {
            setTheClassName("otpField otpField3")
        }

        if (value >= 1000 && value <= 9999) {
            setTheClassName("otpField otpField4")
        }

        setOTP(value)
        console.log(value)
    }

    return (
        <div>
            <Box>
                <img src={OTPImage} />
            </Box>
            <Container variant="ct"  >
                <Grid container sx={{ pt: "46px" }}>
                    <Grid item xs={12} >
                        <Typography variant="heading1">
                            OTP Verification
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ mt: "40px" }}>
                        <Typography variant="subHeading1">
                            Enter the OTP sent to +91 9768427098
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ mt: "40px", display: "flex", justifyContent: "center" }}>

                        <OTPInput value={OTP} onChange={handelOTP} autoFocus OTPLength={4} otpType="number" disabled={false} inputClassName={theClassName} inputStyles={{ width: "48px", marginLeft: "12px", marginRight: "12px", }} />

                    </Grid>

                    <Grid item xs={12} sx={{ mt: "40px" }}>
                        <Typography variant="subHeading2">
                            Didn’t you received the OTP? <Link to="/otp-verification" style={{ color: "#2743FD", textDecoration: "none" }}> Resend OTP </Link>
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Link className="underline0" to="/landing-page">
                            <Button variant="button1" sx={{ mt: "41px" }}>
                                Submit
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default OTPVerification