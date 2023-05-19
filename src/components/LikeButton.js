import React, { useState } from 'react';
import KafkaService from "../services/kafka.service";
import './Like.css';

function saveLike(e, status) {

    let data = {
        id: 0,
        status: status
    };

    console.log(JSON.stringify(data));

    KafkaService.reaction("i-love-adsoftsito");
    e.preventDefault();
}

function LikeButton() {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const [dislikes, setDislikes] = useState(0);
    const [disliked, setDisliked] = useState(false);

    return (
        <div className="reactions">
            <button
                className={`reaction reaction-like ${liked ? 'liked' : ''}`}
                onClick={() => {
                    setLikes(likes + 1);
                    setLiked(true);
                }}
            >
                {likes} Like
            </button>

            <button
                className={`reaction reaction-love`}
                onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1)

                }
                } >
                Love
            </button>

            <button
                className={`reaction reaction-wow ${disliked ? 'disliked' : ''}`}
                onClick={() => {
                    setDislikes(dislikes + 1);
                    setDisliked(true);
                }}
            >
                {dislikes} Asombro
            </button>
        </div>
    );

}
export default LikeButton