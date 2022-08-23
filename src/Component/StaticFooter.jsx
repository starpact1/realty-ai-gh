import React, { useState } from 'react'
import { Box, Button, ButtonBase, Grid, Paper, styled, Typography } from '@mui/material'
import Home from "../Images/Image1/Home.png"
import Compare from "../Images/Image1/Compare.png"
import ContactUs from "../Images/Image1/ContcatUs.png"
import whislist from "../Images/Image1/WhishList.png"
import ProfileImage from "../Images/Image1/Profile.png"
import PhoneImage from "../Images/Image1/phone2.png"
import FooterModal from './FooterModal'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'


const Footer = styled(Paper)(({ theme }) => ({

    position: "fixed",
    paddingTop: "18px",
    paddingBottom: "18px",
    bottom: "0px",
    width: "100%",
    boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.25)",

}))
const FooterFont = styled(Typography)(({ theme }) => ({

    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "16px",
    /* identical to box height, or 133% */


    color: "rgba(30, 31, 75, 0.5)"


}))

const ContactImageHolder = styled(Box)(({ theme }) => ({
    position: "absolute",
    height: "60px",
    width: "60px",
    // background: "#C4C4C4",
    // border: "5px solid #FFFFFF",
    left: "50%",
    transform: "translate(-50%)",
    top: "-42px",
    borderRadius: "50%",
    backgroundImage: `url(${ContactUs})`,
    backgroundPosition: "center",
    border: "none",
    // border: "1px solid red",
    // backgroundSize: "110%", //TODO: make it 100%

}))



function StaticFooter() {

    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false)

    const handelIsOpen = () => {
        setIsOpen(true)
        console.log(isOpen)
    }

    const modalRef = useRef();

    return (
        <div>
            <Footer>
                <Grid container>
                    <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <ButtonBase sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} onClick={() => navigate("/landing-page")}>
                            <img src={Home} style={{ height: "19px" }} />
                            <FooterFont>
                                Home
                            </FooterFont>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <ButtonBase sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} onClick={() => navigate("/compare-page")}>
                            <img src={Compare} style={{ height: "19px" }} />
                            <FooterFont> Compare </FooterFont>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={4} sx={{ position: "relative" }}>
                        <ButtonBase onClick={() => modalRef.current.handleOpen1()} >
                            <ContactImageHolder>
                                <Box sx={{ position: "absolute", width: "25px", height: "25px", backgroundImage: `url(${PhoneImage})`, top: "50%", left: "50%", transform: "translateY(-50%) translateX(-50%)" }}>

                                </Box>
                            </ContactImageHolder>

                            {/* <img src={ContactUs}/> */}
                            <FooterFont sx={{ pt: "24px" }}> Contact Us </FooterFont>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <ButtonBase sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} onClick={() => navigate("/wishlist")}>
                            <img src={whislist} style={{ height: "19px" }} />
                            <FooterFont> Wishlist </FooterFont>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <ButtonBase sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} onClick={() => navigate("/profile")}>
                            <img src={ProfileImage} style={{ height: "19px" }} />
                            <FooterFont color="#4766F9"> Profile </FooterFont>
                        </ButtonBase>
                    </Grid>
                </Grid>
                {/* <Grid container>
                    <Grid item xs={12} sx={{ justifyContent: "center" }}>
                        <Box sx={{ height: "5px", backgroundColor: "#E9ECEF", width: "145px", mt: "10px", mx: "auto" }}></Box>
                    </Grid>
                </Grid> */}
            </Footer>
            <FooterModal ref={modalRef} />
        </div>
    )
}

export default StaticFooter