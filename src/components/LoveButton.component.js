import React, { useState } from 'react';
import './Like.css';
import KafkaService from "../services/kafka.service";


function saveLove(e, status) {

    let data = {
        id: 0,
        status: status
    };

    console.log(JSON.stringify(data));

    KafkaService.reaction("love-button");
    e.preventDefault();
}


function LoveButton() {
    const [loves, setLikes] = useState(0);
    const [loved, setLiked] = useState(false);
    return (
        <div className="like-button-container">
            <button id="like"
                className={`reaction reaction-love${loved ? 'liked' : ''}`}
                onClick={() => {
                    setLikes(loves + 1);
                    setLiked(true);
                }}
            >
                 
            </button>
        </div>
    );
}
export default LoveButton