import { useState } from "react";
import styled from "styled-components"

export default function ProductImages({images}){
    const Image = styled.img`
        max-width: 100%;
        max-height: 100%;
        border-radius:4px;
        object-fit: contain;
    `;

    const ImageButtons = styled.div`
        margin-top: 8px;
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    `;

    const ImgBox = styled.div`
        width: 100%;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        overflow: hidden;
`;

    const ImageButton = styled.div`
        border: 2px solid ${props => props.active ? '#FF00B2' : '#444'};
        height: 80px;
        width: 80px;
        padding: 4px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.4s ease;

        &:hover{
            border-color: #FF00B2
        }

        img{
            max-width: 100%;
            max-height: 100%;
            object-fit: cover
        }
    `;

    const [activeImage, setActiveImage] = useState(images?.[0])

    return (
        <>
            <ImgBox>
                <Image src={activeImage || images?.[0]} alt="" />
            </ImgBox>
            <ImageButtons>
                {images.map((img, index)=>(
                    <ImageButton
                        key={index}
                        active={img===activeImage}
                        onClick={()=>setActiveImage(img)}>
                        <Image src={img}/>
                    </ImageButton>
                ))}
                
            </ImageButtons>
        </>
    )       
}