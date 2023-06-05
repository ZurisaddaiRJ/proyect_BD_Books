import React, { useEffect, useState } from 'react';
import KafkaService from "../services/kafka.service";
import './Like.css';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const MongoDBService = require('../services/MongoDb.service');

function LikeButton({ pubId }) {
    const [user, setUser] = useState(null);
    const [smiles, setSmiles] = useState(0);
    const [smile, setSmile] = useState(false);


    useEffect(() => {
        // Crea una instancia de MongoDBService con la URL base del backend
        const mongoDBService = new MongoDBService('http://localhost:3001');
        const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log({ currentUser });
            setUser(currentUser);
        });



        // Define los parámetros deseados para la llamada a getReactionsByObjectAndReaction
        const objectId = pubId;
        const reactionId = 'Smile';

        // Define una función asincrónica para cargar los datos
        const fetchData = async () => {
            try {
                const response = await mongoDBService.getReactionsByObjectAndReaction(objectId, reactionId);
                const data = response[0];
                setSmiles(data.n);
            } catch (error) {
                console.error(error);
            }
        };

        // Llama a fetchData al montar o actualizar el componente
        fetchData();
        return () => unsubuscribe();
    })

    function saveHaha(e) {
        const uId = user.email;
        const oId = pubId;
        const rId = "Smile"
        console.log(uId, oId, rId);
        KafkaService.reaction(uId, oId, rId);
        e.preventDefault();
    }

    return (
        <div className="reactions">

            <button
                className={`reaction reaction-haha ${smile ? 'smile' : ''}`}
                onClick={(e) => {
                    e.preventDefault();
                    saveHaha(e, 1);
                    setSmiles(smiles + 1);
                    setSmile(true);
                    

                }
                } > {smiles}

            </button>

        </div>
    );

}
export default LikeButton