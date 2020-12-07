import React, { useState } from "react";
import styled from "styled-components";
import imageDetails from './imageDetails';

const Fig = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    border-style: outset;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: auto;
        width: 100%;
        object-fit: cover;
        object-position: 50% 50%;
        border-radius: 5px;
        opacity: 1;
    }
`;

const Icons = styled.div`
    position: absolute;
    top: 0;
    width: 96%;
    justify-content: space-between;
    display: flex;
    padding-top: 2px;

    img {
        width: auto;
        height: auto;
    }
    button{
        cursor: pointer;
        background: transparent;
        border: none;
        padding: 0;
    }
    button:focus{
        outline: none;
    }
`;

const OneGridItem = ({src, alt, leftIcons, rightIcons, setIconClick})=>(
    <div className="grid-item">
        <Fig>
            <img
                src={src}
                alt={alt}
            />
            <Icons>
                <div>
                <button onClick={setIconClick}>
                    <img src={leftIcons.src} alt={leftIcons.alt} />
                </button>
                <button onClick={setIconClick}>
                    <img src={leftIcons.src} alt={leftIcons.alt} />
                </button>
                </div>
                <div>
                <button onClick={setIconClick}>
                    <img src={rightIcons.src} alt={rightIcons.alt} />
                </button>
                <button onClick={setIconClick}>
                    <img src={rightIcons.src} alt={rightIcons.alt} />
                </button>
                </div>
            </Icons>
        </Fig>
    </div>
)


const ImageGridItem = () => {
    const [iconClick, setIconClick] = useState(null);

    return (
        <div className="container">
            {
                imageDetails.map((imageDetail) => 
                    <OneGridItem 
                        key={imageDetail.id}
                        src={imageDetail.src}
                        alt={imageDetail.alt}
                        leftIcons={imageDetail.leftIcons}
                        rightIcons={imageDetail.rightIcons}
                        setIconClick = {() => setIconClick(alert("clicked!!!"))}
                    />
                )
            }
            
        </div>
    );
};

export default ImageGridItem;
