import React, { useRef } from 'react'
import { Box, Button, Container, InputBase, Paper, styled, Typography } from '@mui/material'
import BannerBackground from "../../Images/Image1/ProfileBackground.png"
import VectorBackground from "../../Images/Image1/ProfileVector.png"
import ProfileImage1 from "../../Images/Image1/ProfileImage.png"
import "./Profile.css"
import StaticFooter from '../../Component/StaticFooter'
const BannerHolder = styled(Paper)(({ theme }) => ({
    height: "164px",
    width: "100%",
    position: "relative",
    backgroundImage: `url(${BannerBackground})`
}))

const VectorHolder = styled(Box)(({ theme }) => ({
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundImage: `url(${VectorBackground})`,
    backgroundSize: "100% 100%",
}))

const ProfileImageHolder = styled(Box)(({ theme }) => ({
    position: "absolute",
    height: "122px",
    width: "122px",
    background: "#C4C4C4",
    border: "5px solid #FFFFFF",
    left: "50%",
    transform: "translate(-50%)",
    top: "75px",
    borderRadius: "50%",
    backgroundImage: `url(${ProfileImage1})`,
    backgroundPosition: "center",
    backgroundSize: "110%", //TODO: make it 100%

}))

const InputLabel = styled(Typography)(({ theme }) => ({

    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "18px",

    color: "#000000",


}))





function Profile() {

    const InputRef = useRef()

    return (
        <div>
            <Paper sx={{mt: "-24px", boxShadow: "none"}}>
                <BannerHolder>
                    <VectorHolder />
                    <ProfileImageHolder>
                    </ProfileImageHolder>
                </BannerHolder>
                <Container sx={{ pt: "44px" }}>
                    <Button variant="button3" onClick={ () => InputRef.current.click() } sx={{ border: "1px solid #00286B", borderRadius: "5px", fontSize: "13px", fontWeight: 500, lineHeight: "17px" }}>
                        Change Picture
                    </Button>
                    <input type="file" ref={InputRef} style={{display: "none"}} />
                </Container>

                <Container variant="ct29" sx={{ pt: "30px", textAlign: "left" }} >
                    <Box>
                        <InputLabel>
                            Username
                        </InputLabel>
                        <InputBase className="inputBase" />
                    </Box>

                    <Box sx={{ mt: "25px" }}>
                        <InputLabel>
                            Email Address
                        </InputLabel>
                        <InputBase className="inputBase" />
                    </Box>

                    <Box sx={{ mt: "25px" }}>
                        {/* TODO: use input mask */}
                        <InputLabel>
                            Phone Number
                        </InputLabel>
                        <InputBase className="inputBase" value="+91 9768427098" disabled/>
                    </Box>

                    <Box sx={{ mt: "25px" }}>
                        <InputLabel>
                            Password
                        </InputLabel>
                        <InputBase className="inputBase" />
                    </Box>

                    <Box sx={{ marginTop: "85px", marginBottom: "85px" }}>
                        <Button variant="button1" sx={{width: "100%"}}>
                            Update
                        </Button>
                    </Box>
                </Container>
                <StaticFooter />
            </Paper>

        </div>
    )
}

export default Profile