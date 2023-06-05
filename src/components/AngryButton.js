import React, { useEffect, useState } from 'react';
import KafkaService from "../services/kafka.service";
import './Like.css';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const MongoDBService = require('../services/MongoDb.service');


function AngryButton({ pubId }) {
    const [user, setUser] = useState(null);

    const [angrys, setAngrys] = useState(0);
    const [angry, setAngry] = useState(false);

    useEffect(() => {
        // Crea una instancia de MongoDBService con la URL base del backend
        const mongoDBService = new MongoDBService('http://localhost:3001');
        const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log({ currentUser });
            setUser(currentUser);
        });
        


        // Define los parámetros deseados para la llamada a getReactionsByObjectAndReaction
        const objectId = pubId;
        const reactionId = 'Angry';

        // Define una función asincrónica para cargar los datos
        const fetchData = async () => {
            try {
                const response = await mongoDBService.getReactionsByObjectAndReaction(objectId, reactionId);
                const data = response[0];
                setAngrys(data.n);
            } catch (error) {
                console.error(error);
            }
        };

        // Llama a fetchData al montar o actualizar el componente
        fetchData();
        return () => unsubuscribe();
    })

    function saveAngry(e) {

        const uId = user.email;
        const oId = pubId;
        const rId = "Angry"
        console.log(uId, oId, rId);
        KafkaService.reaction(uId, oId, rId);
        e.preventDefault();
    }

    return (
        <div className="reactions">
           
            <button
                className={`reaction reaction-angry ${angry ? 'angry' : ''}`}
                onClick={(e) => {
                    setAngrys(angrys + 1);
                    setAngry(true);
                    e.preventDefault();
                    saveAngry(e, 1)

                }}
            > {angrys}

            </button>

        </div>
    );

}
export default AngryButton