import React, { useEffect, useState } from 'react';
import KafkaService from "../services/kafka.service";
import './Like.css';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const MongoDBService = require('../services/MongoDb.service');

function LikeButton({ pubId }) {
    const [user, setUser] = useState(null);

    const [sorprises, setSorprises] = useState(0);
    const [sorpri, setSorpri] = useState(false);

    useEffect(() => {
        // Crea una instancia de MongoDBService con la URL base del backend
        const mongoDBService = new MongoDBService('http://localhost:3001');
        const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log({ currentUser });
            setUser(currentUser);
        });



        // Define los parámetros deseados para la llamada a getReactionsByObjectAndReaction
        const objectId = pubId;
        const reactionId = 'Surprise';

        // Define una función asincrónica para cargar los datos
        const fetchData = async () => {
            try {
                const response = await mongoDBService.getReactionsByObjectAndReaction(objectId, reactionId);
                const data = response[0];
                setSorprises(data.n);
            } catch (error) {
                console.error(error);
            }
        };

        // Llama a fetchData al montar o actualizar el componente
        fetchData();
        return () => unsubuscribe();
    })

    function saveWow(e) {
        const uId = user.email;
        const oId = pubId;
        const rId = "surprise"
        console.log(uId, oId, rId);
        KafkaService.reaction(uId, oId, rId);
        e.preventDefault();
    }

    return (
        <div className="reactions">

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

        </div>
    );

}
export default LikeButton