import React from 'react'
import { Paper, styled, Typography } from '@mui/material';
import { Container } from '@mui/system';
import VideoBackground from "../../Images/Image1/videoPreview.png"

const Base = styled(Paper)(({ theme }) => ({
    background: "#FFFFFF",
    boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.25)",
    paddingTop: "25px",
    paddingBottom: "20px",
    marginTop: "25px"

}));

const PreviewHolder = styled(Paper)(({theme}) => ({
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 11.65%, rgba(0, 0, 0, 0.4) 75.89%), url(.jpg)",
    filter: "drop-shadow(0px 8px 16px rgba(24, 50, 115, 0.2))",
    borderRadius: "6px",
    height: "200px",
    backgroundImage: `url(${VideoBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "110% 125%",
    backgroundPosition: "center"
}))

function WhyChooseRealtyAi() {
  return (
    <div>
        <Base>
            <Container variant="ct21" sx={{ textAlign: "left" }}>
                <Typography variant="heading2" lineHeight="116.7%" fontWeight="700">
                    Why choose RealtyAI?
                </Typography>
                <PreviewHolder sx={{ mt: "20px" }}>

                </PreviewHolder>
            </Container>
        </Base>
    </div>
  )
}

export default WhyChooseRealtyAi