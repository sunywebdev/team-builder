import React, { useEffect, useState } from 'react';
import Students from '../students/Students';
import Teams from '../teams/Teams';

const Home = () => {
    const [students, setStudents] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])

    const [list, setList] = useState([])
    const addToList = (student) => {
        const newlist = [...list, student]
        setList(newlist)
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-9">
                    <div className='row row-cols-1 row-cols-md-3 g-2'>
                        {
                            students.map(student =>
                                <Students
                                    key={student.key}
                                    student={student}
                                    addToList={addToList}
                                ></Students>
                            )
                        }
                    </div>


                </div>
                <div className="col-lg-3">
                    <Teams
                        list={list}
                    ></Teams>
                </div>
            </div>
        </div>
    );
};

export default Home;