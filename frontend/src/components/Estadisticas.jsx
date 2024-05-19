import React, { useState, useEffect } from 'react';
import api from '../api';
import "../styles/estadisticas.css";

function Estadisticas() {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        fetchEstadisticas();
    }, []);

    const fetchEstadisticas = () => {
        api.get('/api/especialidad-stats/')
            .then(res => res.data)
            .then(data => {
                setStats(data);
            })
            .catch(err => alert('Error fetching stats: ' + err));
    };

    return (
        <div>
            <table className="estadisticas-table">
                <thead>
                    <tr>
                        <th>Especialidad</th>
                        <th>Conteo</th>
                    </tr>
                </thead>
                <tbody>
                    {stats.map((stat, index) => (
                        <tr key={index}>
                            <td>{stat.especialidad__nombre}</td>
                            <td>{stat.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Estadisticas;
