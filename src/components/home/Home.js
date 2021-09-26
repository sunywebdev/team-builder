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
        let filteredList = list.filter(std => std.name !== student.name)
        const newlist = [...filteredList, student]
        setList(newlist)
    }
    return (
        <div className='container'>
            <button class="btn btn-primary mb-2 mx-auto d-md-block d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Team<span class="badge bg-success ms-2">{list.length}</span></button>
            <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasScrollingLabel"> </h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div className="mx-auto p-0">
                        <Teams
                            list={list}
                        ></Teams>
                    </div>
                </div>
            </div>


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
                <div className="col-lg-3 d-md-none d-lg-block">
                    <Teams
                        list={list}
                    ></Teams>
                </div>
            </div>
        </div>
    );
};

export default Home;