import React, { useEffect, useState } from 'react';

const Home = () => {
    const [students, setStudents] = useState([])
    useEffect(() => {
        fetch('../../studentDataBase/studentDataBase.JSON')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default Home;