import React from 'react';
import KafkaService from "../services/kafka.service";
import './Like.css';

function saveLove(e, status) {

    let data = {
        id: 0,
        status: status
    };

    console.log(JSON.stringify(data));

    KafkaService.reaction("i-love");
    e.preventDefault();
}

function saveLike(e, status) {

    let data = {
        id: 0,
        status: status
    };

    console.log(JSON.stringify(data));

    KafkaService.reaction("i-like");
    e.preventDefault();
}

function saveHaha(e, status) {

    let data = {
        id: 0,
        status: status
    };

    console.log(JSON.stringify(data));

    KafkaService.reaction("i-haha");
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

    return (
        <div className="reactions">
            <button
                className={`reaction reaction-like `}
                onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1)
                }}
            >

            </button>

            <button
                className={`reaction reaction-love`}
                onClick={(e) => {
                    e.preventDefault();
                    saveLove(e, 1)

                }
                } >

            </button>

            <button
                className={`reaction reaction-haha`}
                onClick={(e) => {
                    e.preventDefault();
                    saveHaha(e, 1)

                }
                } >

            </button>

            <button
                className={`reaction reaction-wow `}
                onClick={(e) => {
                    e.preventDefault();
                    saveWow(e, 1)
                }}
            >

            </button>

            <button
                className={`reaction reaction-sad `}
                onClick={(e) => {
                    e.preventDefault();
                    saveSad(e, 1)
                }}
            >

            </button>

            <button
                className={`reaction reaction-angry`}
                onClick={(e) => {
                    e.preventDefault();
                    saveAngry(e, 1)
                }}
            >

            </button>


        </div>
    );

}
export default LikeButton