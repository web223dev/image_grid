import React from "react";
import styled from "styled-components";
import star_icon from "./images/award_star_gold_blue.png";
import delete_pic from "./images/picture_delete.png";

const Fig = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    border-style: outset;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
        height: auto;
        width: 100%;
        object-fit: cover;
        object-position: 50% 50%;
        border-radius: 5px;
        opacity: 1;
        -webkit-transition: 0.3s ease-in-out;
        transition: 0.3s ease-in-out;
    }
    &:hover img {
        opacity: 0.5;
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
`;

const ImageGridItem = () => {
    return (
        <div className="container">
            <div className="grid-item">
                <Fig>
                    <img
                        src="https://placekitten.com/304/331"
                        alt="pretty kitty"
                    />
                    <Icons>
                        <a href="#">
                            <img src={star_icon} alt="star" />
                        </a>
                        <a href="#">
                            <img src={delete_pic} alt="pic_delete" />
                        </a>
                    </Icons>
                </Fig>
            </div>

            <div className="grid-item">
                <Fig>
                    <img
                        src="https://placekitten.com/383/356"
                        alt="pretty kitty"
                    />
                    <Icons>
                        <a href="#">
                            <img src={star_icon} alt="star" />
                        </a>
                        <a href="#">
                            <img src={delete_pic} alt="pic_delete" />
                        </a>
                    </Icons>
                </Fig>
            </div>

            <div className="grid-item">
                <Fig>
                    <img
                        src="https://placekitten.com/329/264"
                        alt="pretty kitty"
                    />
                    <Icons>
                        <a href="#">
                            <img src={star_icon} alt="star" />
                        </a>
                        <a href="#">
                            <img src={delete_pic} alt="pic_delete" />
                        </a>
                    </Icons>
                </Fig>
            </div>

            <div className="grid-item">
                <Fig>
                    <img
                        src="https://placekitten.com/366/259"
                        alt="pretty kitty"
                    />
                    <Icons>
                        <a href="#">
                            <img src={star_icon} alt="star" />
                        </a>
                        <a href="#">
                            <img src={delete_pic} alt="pic_delete" />
                        </a>
                    </Icons>
                </Fig>
            </div>

            <div className="grid-item">
                <Fig>
                    <img
                        src="https://placekitten.com/389/396"
                        alt="pretty kitty"
                    />
                    <Icons>
                        <a href="#">
                            <img src={star_icon} alt="star" />
                        </a>
                        <a href="#">
                            <img src={delete_pic} alt="pic_delete" />
                        </a>
                    </Icons>
                </Fig>
            </div>

            <div className="grid-item">
                <Fig>
                    <img
                        src="https://placekitten.com/345/258"
                        alt="pretty kitty"
                    />
                    <Icons>
                        <a href="#">
                            <img src={star_icon} alt="star" />
                        </a>
                        <a href="#">
                            <img src={delete_pic} alt="pic_delete" />
                        </a>
                    </Icons>
                </Fig>
            </div>

            <div className="grid-item">
                <Fig>
                    <img
                        src="http://pic.jcmserv3.net/305x200/0e394d/65699e.png"
                        alt="jmcserv"
                    />
                    <Icons>
                        <a href="#">
                            <img src={star_icon} alt="star" />
                        </a>
                        <a href="#">
                            <img src={delete_pic} alt="pic_delete" />
                        </a>
                    </Icons>
                </Fig>
            </div>

            <div className="grid-item">
                <Fig>
                    <img
                        src="http://pic.jcmserv3.net/305x200/0e394d/65699e.png"
                        alt="jmcserv"
                    />
                    <Icons>
                        <a href="#">
                            <img src={star_icon} alt="star" />
                        </a>
                        <a href="#">
                            <img src={delete_pic} alt="pic_delete" />
                        </a>
                    </Icons>
                </Fig>
            </div>

            <div className="grid-item">
                <Fig>
                    <img
                        src="http://pic.jcmserv3.net/166x200/0e394d/65699e.png"
                        alt="jmcserv"
                    />
                    <Icons>
                        <a href="#">
                            <img src={star_icon} alt="star" />
                        </a>
                        <a href="#">
                            <img src={delete_pic} alt="pic_delete" />
                        </a>
                    </Icons>
                </Fig>
            </div>

            <div className="grid-item">
                <Fig>
                    <img
                        src="http://pic.jcmserv3.net/305x200/0e394d/65699e.png"
                        alt="jmcserv"
                    />
                    <Icons>
                        <a href="#">
                            <img src={star_icon} alt="star" />
                        </a>
                        <a href="#">
                            <img src={delete_pic} alt="pic_delete" />
                        </a>
                    </Icons>
                </Fig>
            </div>

            <div className="grid-item">
                <Fig>
                    <img
                        src="http://pic.jcmserv3.net/305x200/0e394d/65699e.png"
                        alt="jmcserv"
                    />
                    <Icons>
                        <a href="#">
                            <img src={star_icon} alt="star" />
                        </a>
                        <a href="#">
                            <img src={delete_pic} alt="pic_delete" />
                        </a>
                    </Icons>
                </Fig>
            </div>

            <div className="grid-item">
                <Fig>
                    <img
                        src="http://pic.jcmserv3.net/166x200/0e394d/65699e.png"
                        alt="jmcserv"
                    />
                    <Icons>
                        <a href="#">
                            <img src={star_icon} alt="star" />
                        </a>
                        <a href="#">
                            <img src={delete_pic} alt="pic_delete" />
                        </a>
                    </Icons>
                </Fig>
            </div>

            <div className="grid-item">
                <Fig>
                    <img
                        src="http://pic.jcmserv3.net/305x200/0e394d/65699e.png"
                        alt="jmcserv"
                    />
                    <Icons>
                        <a href="#">
                            <img src={star_icon} alt="star" />
                        </a>
                        <a href="#">
                            <img src={delete_pic} alt="pic_delete" />
                        </a>
                    </Icons>
                </Fig>
            </div>

            <div className="grid-item">
                <Fig>
                    <img
                        src="http://pic.jcmserv3.net/305x200/0e394d/65699e.png"
                        alt="jmcserv"
                    />
                    <Icons>
                        <a href="#">
                            <img src={star_icon} alt="star" />
                        </a>
                        <a href="#">
                            <img src={delete_pic} alt="pic_delete" />
                        </a>
                    </Icons>
                </Fig>
            </div>
        </div>
    );
};

export default ImageGridItem;
