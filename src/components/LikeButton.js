import React, { useState } from 'react';
import KafkaService from "../services/kafka.service";
import './Like.css';

function saveLove(e, status) {

    let data = {
        id: 0,
        status: status
    };

    console.log(JSON.stringify(data));

    KafkaService.reaction("love-button");
    e.preventDefault();
}

function saveLike(e, status) {

    let data = {
        id: 0,
        status: status
    };

    console.log(JSON.stringify(data));

    KafkaService.reaction("like-button");
    e.preventDefault();
}

function saveHaha(e, status) {

    let data = {
        id: 0,
        status: status
    };

    console.log(JSON.stringify(data));

    KafkaService.reaction("i-jaja");
    e.preventDefault();
}

function saveWow(e, status) {

    let data = {
        id: 0,
        status: status
    };

    console.log(JSON.stringify(data));

    KafkaService.reaction("i-wow");
    e.preventDefault();
}

function saveSad(e, status) {

    let data = {
        id: 0,
        status: status
    };

    console.log(JSON.stringify(data));

    KafkaService.reaction("i-sad");
    e.preventDefault();
}

function saveAngry(e, status) {

    let data = {
        id: 0,
        status: status
    };

    console.log(JSON.stringify(data));

    KafkaService.reaction("i-angry");
    e.preventDefault();
}

function LikeButton() {

    const [loves, setLoves] = useState(0);
    const [love, setLove] = useState(false);

    const [likes, setLikes] = useState(0);
    const [like, setLike] = useState(false);

    const [smiles, setSmiles] = useState(0);
    const [smile, setSmile] = useState(false);

    const [sorprises, setSorprises] = useState(0);
    const [sorpri, setSorpri] = useState(false);

    const [sads, setSads] = useState(0);
    const [sad, setSad] = useState(false);

    const [angrys, setAngrys] = useState(0);
    const [angry, setAngry] = useState(false);

    return (
        <div className="reactions">
            <button id="like"
                className={`reaction reaction-like ${like ? 'like' : ''}`}
                onClick={(e) => {
                    setLikes(likes + 1);
                    setLike(true);
                    e.preventDefault();
                    saveLike(e, 1)
                }}
            > {likes} 

            </button>

            <button id="love"
                className={`reaction reaction-love ${love ? 'love' : ''}`}
                onClick={(e) => {
                    setLoves(loves + 1);
                    setLove(true);
                    e.preventDefault();
                    saveLove(e, 1)

                }
                } >{loves}

            </button>

            <button
                className={`reaction reaction-haha ${smile ? 'smile' : ''}`}
                onClick={(e) => {
                    setSmiles(smiles + 1);
                    setSmile(true);
                    e.preventDefault();
                    saveHaha(e, 1)

                }
                } > {smiles}

            </button>

            <button
                className={`reaction reaction-wow ${sorpri ? 'sorpri' : ''}`}
                onClick={(e) => {
                    setSorprises(sorprises + 1);
                    setSorpri(true);
                    e.preventDefault();
                    saveWow(e, 1)
                }}
                > {sorprises}

            </button>

            <button
                className={`reaction reaction-sad ${sad ? 'sad' : ''}`}
                onClick={(e) => {
                    setSads(sads + 1);
                    setSad(true);
                    e.preventDefault();
                    saveSad(e, 1)
                }}
                > {sads}

            </button>

            <button
                className={`reaction reaction-angry ${angry ? 'angry' : ''}`}
                onClick={(e) => {
                    setAngrys(angrys+ 1);
                    setAngry(true);
                    e.preventDefault();
                    saveAngry(e, 1)
                    
                }}
                > {angrys}

            </button>


        </div>
    );

}
export default LikeButton