import React, { useState } from 'react';

function LikeButton() {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const [encanta, setEncanta] = useState(0);
    const [Mencanta, setMencanta] = useState(false);
    const [dislikes, setDislikes] = useState(0);
    const [disliked, setDisliked] = useState(false);
    
    return (
        <div className="like-button-container">
            <button
                className={`like-button ${liked ? 'liked' : ''}`}
                onClick={() => {
                    setLikes(likes + 1);
                    setLiked(true);
                }}
            >
                {likes} Likes
            </button>

            <button
                className={`like-button ${Mencanta ? 'Mencanta' : ''}`}
                onClick={() => {
                    setEncanta(encanta + 1);
                    setMencanta(true);
                }}
            >
                {encanta} Me encanta
            </button>

            <button
                className={`like-button ${disliked ? 'disliked' : ''}`}
                onClick={() => {
                    setDislikes(dislikes + 1);
                    setDisliked(true);
                }}
            >
                {dislikes} Dislike
            </button>

            
        </div>
        


    );
}
export default LikeButton