import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styles from "./LikeButton.module.css";
import { useState } from "react";

interface Props {
    onClick: () => void;
}

const LikeButton = ({ onClick }: Props) => {
    const [liked, setLiked] = useState(false);
    const toggle = () => {
        setLiked(!liked);
        onClick();
    };
    return (
        <div>
            {liked ? (
                <AiFillHeart size={50} color={"#ffc0cb"} onClick={toggle} />
            ) : (
                <AiOutlineHeart onClick={toggle} size={50} />
            )}
        </div>
    );
};

export default LikeButton;
