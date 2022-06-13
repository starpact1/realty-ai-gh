import { Button, Divider, Grid, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LoginImage from "../../Images/Mobile-login.png"
import "./Login.css"

function Login() {

    const [borderColor, setBorderColor] = useState("#B9B9B9")
    const [phone, setPhone] = useState("9768427098")

    const handelOnFocus = () => {

        setBorderColor("#2743FD")

    }

    const handelOnBlur = () => {

        setBorderColor("#B9B9B9")

    }

    useEffect(() => {
        document.title = "Login"
    })


    return (
        <div>
            <Box>
                <img src={LoginImage} />
            </Box>
            <Container variant="ct"  >
                <Grid container sx={{ pt: "24px" }}>
                    <Grid item xs={12} >
                        <Typography variant="heading1">
                            Login
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ my: "29px" }}>
                        <Typography variant="subHeading1">
                            We will send you a one-time password to this mobile number
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ mb: "24px" }}>
                        <Typography variant="subHeading2">
                            Enter Mobile Number
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{}}>
                        {/* <TextField
                            inputProps={{
                                style: {
                                    paddingTop: "0px",
                                    paddingBottom: "12px",
                                    border: "none",
                                }
                            }}
                        /> */}
                        <Box sx={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{ width: "127px", display: "flex", }}>
                                <div style={{ fontSize: "16px", fontWeight: "bold", }}>+91</div>
                                <div>
                                    <input type="number" className="phoneInput" value={phone} onChange={(e) => setPhone(e.target.value)} onFocus={handelOnFocus} onBlur={handelOnBlur} />
                                </div>
                            </Box>
                        </Box>

                        <Divider sx={{ borderBottomWidth: "1px", borderColor: { borderColor }, mt: "11px", width: "233px", mx: "auto", }} />

                    </Grid>

                    <Grid item xs={12}>
                        <Link to="/otp-verification" style={{ textDecoration: "none" }}>
                            <Button variant="button1" sx={{ mt: "68px" }}>
                                Get OTP
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Login