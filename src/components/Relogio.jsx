import React, { useEffect, useState } from 'react';
import "./Relogio.css";

function Relogio() {

    let [hora, setHora] = useState(16);
    let [minuto, setMinuto] = useState(59);
    let [segundo, setSegundo] = useState(59);

    useEffect(() => {

        const interval = setInterval(() => {
            setSegundo(segundo - 1);

            if (segundo === 0) {
                setMinuto(minuto - 1);
                setSegundo(59);

                if (minuto === 0) {
                    setMinuto(59);
                    setHora(hora - 1);
                }
            }
        }, 1000)

        return () => clearInterval(interval);
    }, [segundo])

    return (
        <div id='divRelogio'>
            <p>{hora}:</p>
            <p>{minuto}:</p>
            <p>{segundo}</p>
        </div>
    )
}

export default Relogio;