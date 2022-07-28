import React, { useEffect, useState } from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


function LightBox({isOpen1, images1, lightBoxClose1, pIndex}) {

    const folder = process.env.PUBLIC_URL + "/"
    

    const [isOpen, setIsOpen] = useState(isOpen1)
    const [photoIndex, setPhotoIndex] = useState(pIndex)
    const [images, setImages] = useState(images1)

    
    

    const handelImageClick = (i) => {

        setPhotoIndex(i)
        setIsOpen(true)
        console.log(i)

    }


    return (
        <div>
            {/* LightBox

            <br />
            {images.map((item, i, key) =>
                <img key={i} src={item.image} onClick={() => handelImageClick(i)} style={{ width: "100px", marginLeft: "20px", marginRight: "20px" }} />
            )} */}

            {isOpen &&
                <Lightbox
                    mainSrc={images[photoIndex].image}
                    nextSrc={images[(photoIndex + 1) % images.length].image}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length].image}
                    onImageLoad={() => {
                        window.dispatchEvent(new Event('resize'));
                    }}
                    onCloseRequest={() => {setIsOpen(false); lightBoxClose1();}}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        // this.setState({
                        //     photoIndex: (photoIndex + images.length - 1) % images.length,
                        // })
                    }
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)
                        // this.setState({
                        //     photoIndex: (photoIndex + 1) % images.length,
                        // })
                    }

                    imageCaption = {photoIndex+1+"/"+images.length}
                    imageTitle = {<span style={{textTransform: "capitalize"}}>{images[photoIndex].type}</span>}
                />
             } 

        </div>
    )
}

export default LightBox