import { Box, Container, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import Header from '../../Component/Gallery/Header'
import NavBar2 from '../../Component/Gallery/NavBar2'
import Section2 from '../../Component/Gallery/Section2'
import Tabs2 from '../../Component/Gallery/Tabs2'
import StaticFooter from "../../Component/StaticFooter.jsx"
import LightBox from '../../Test/LightBox'




const Image1 = styled("img")(({ theme }) => ({
  maxWidth: "106px",
  height: "60px",
  // marginTop: "13px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "5px",
}))

const folder = process.env.PUBLIC_URL + "/GalleryImages/"
const ImagesSet = [
  { type: "outdoor", image: folder+"od1.png", pIndex: 0, },
  { type: "outdoor", image: folder+"od2.png", pIndex: 1, },
  { type: "outdoor", image: folder+"od3.png", pIndex: 2, },
  { type: "outdoor", image: folder+"od4.png", pIndex: 3, },
  { type: "indoor", image: folder+"id1.png", pIndex: 4, },
  { type: "indoor", image: folder+"id2.png", pIndex: 5 },
  { type: "indoor", image: folder+"id3.png", pIndex: 6, },
  { type: "indoor", image: folder+"id4.png", pIndex: 7, },
  { type: "indoor", image: folder+"id5.png", pIndex: 8, },
  { type: "demo flat", image: folder+"df1.png", pIndex: 9, },
  { type: "demo flat", image: folder+"df2.png", pIndex: 10, },
  { type: "demo flat", image: folder+"df3.png", pIndex: 11, },
  { type: "demo flat", image: folder+"df4.png", pIndex: 12, },
  { type: "demo flat", image: folder+"df5.png", pIndex: 13, },
  { type: "demo flat", image: folder+"df6.png", pIndex: 14, },
  { type: "demo flat", image: folder+"df7.png", pIndex: 15, },
  { type: "demo flat", image: folder+"df8.png", pIndex: 16, },
  { type: "locality", image: folder+"l1.png", pIndex: 17, },
  { type: "locality", image: folder+"l2.png", pIndex: 18, },
  { type: "locality", image: folder+"l3.png", pIndex: 19, },
  { type: "locality", image: folder+"l4.png", pIndex: 20, },
  { type: "others", image: folder+"o1.png", pIndex: 21, },
  { type: "others", image: folder+"o1.png", pIndex: 22, },
]

function groupArrayOfObjects(list, key) {
  return list.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

function Gallery() {

 

  const ImageGroup = groupArrayOfObjects(ImagesSet, "type")
  
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false)
  const [pIndex, setPIndex] = useState(0)

  const handelImageOpen = (pIndex) => {
    setPIndex (pIndex)
    setIsLightBoxOpen(true)
  }

  const lightBoxClose = () => {
    console.log("close lightbox")
    setIsLightBoxOpen(false)
  }

  return (
    <div>
        <Header keys={Object.keys(ImageGroup)} />
        {/* <Box sx={{mt: "52px"}}>
          
          <NavBar2 keys={Object.keys(ImageGroup)}/>
        </Box> */}

        <Box  sx={{ pt: "82px"}}>
          
        {Object.keys(ImageGroup).map((key, index)=>
         
          <Box key={index} id={key} sx={{ textAlign: "left", pt: "13px" }}>
            
                <Container variant="ct15">
                    <Typography variant="fs15fw700" textTransform="capitalize"> { key } </Typography>
                    <Box sx={{ display : "flex", mt: "13px", flexWrap: "wrap", justifyContent: "start", gap: "10px"}}>
                        {ImageGroup[key].map((item, k)=>
                          <Image1 key={k} src={item.image} onClick={() => handelImageOpen(item.pIndex)} style={{}} />
                        )}
                        
                    </Box>
                </Container>

            </Box>
        )}  
        

        </Box>

        <Box sx={{height: "150px"}}>
           {isLightBoxOpen &&            
            <LightBox isOpen1={isLightBoxOpen} lightBoxClose1={lightBoxClose}  pIndex={pIndex} images1={ImagesSet} />
           }
            
        </Box>
        <StaticFooter />
    </div>
  )
}

export default Gallery