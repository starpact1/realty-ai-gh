import React from 'react'
import { Box, Paper, styled, Typography } from '@mui/material';
import { Container } from '@mui/system';
import VideoBackground from "../../Images/Image1/videoPreview.png"
import PlayButton from "../../Images/Icon/Play-Button.png"

// const Base = styled(Paper)(({ theme }) => ({
//     background: "#FFFFFF",
//     boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.25)",
//     paddingTop: "25px",
//     paddingBottom: "20px",
//     marginTop: "25px"

// }));

const PreviewHolder = styled(Paper)(({ theme }) => ({
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 11.65%, rgba(0, 0, 0, 0.4) 75.89%), url(.jpg)",
    filter: "drop-shadow(0px 8px 16px rgba(24, 50, 115, 0.2))",
    borderRadius: "6px",
    height: "200px",
    position: "relative",
    backgroundImage: `url(${VideoBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "110% 125%",
    backgroundPosition: "center"
}))

const PreviewImage = styled("img")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

}))


const PreviewText = styled(Typography)(({ theme }) => ({
    position: "absolute",
    left: "16px",
    top: "153px",
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "26px",
    /* identical to box height */


    /* Neutral/100 */

    color: "#FCFCFD"


}))

const SliderHolder = styled(Box)(({ theme }) => ({
    height: "140px",
    background: "linear-gradient(180deg, #47AFFF 0%, #BAE1FF 0.01%, #F5F9FF 100%)",
    borderRadius: "10px",
    marginTop: "21px"

}))

const SliderText = styled(Box)(({ theme }) => ({
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "33px",
    /* or 165% */

    display: "flex",
    alignItems: "flex-end",

    color: "#00286B",

    borderRadius: "5px",

}))




function WhyChooseRealtyAi() {
    return (
        <div>
            <Paper variant="Base">
                <Container variant="ct21" sx={{ textAlign: "left" }}>
                    <Typography variant="heading2" lineHeight="116.7%" fontWeight="700">
                        Why choose RealtyAI?
                    </Typography>
                    <PreviewHolder sx={{ mt: "20px" }}>
                        <PreviewImage src={PlayButton} />
                        <PreviewText>
                            Perfect projects for you...
                        </PreviewText>
                    </PreviewHolder>
                    <Box sx={{ mt: "25px" }}>
                        <Typography variant="heading2" lineHeight="116.7%" fontWeight="700" >
                            See how ratings work
                        </Typography>

                        <SliderHolder>
                            <SliderText>
                            AI/ML used for accurate ratings
                            </SliderText>
                        </SliderHolder>
                    </Box>
                </Container>
            </Paper>
        </div>
    )
}

export default WhyChooseRealtyAi