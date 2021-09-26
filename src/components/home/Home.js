import React, { useEffect, useState } from 'react';
import Students from '../students/Students';
import Teams from '../teams/Teams';

const Home = () => {
    const [students, setStudents] = useState([])
    useEffect(() => {
        fetch('./db.JSON')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])

    const [list, setList] = useState([])
    const addToList = (student) => {
        let filteredList = list.filter(std => std.name !== student.name);
        const newlist = [...filteredList, student]
        setList(newlist)
    }
    return (
        <div className='container'>
            <div className="row g-1">
                <div className="col-lg-9">
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
                        {
                            students.map(student =>
                                <Students
                                    key={student.mobile}
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