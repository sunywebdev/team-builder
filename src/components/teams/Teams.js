import React from 'react';

const Teams = (props) => {
    console.log(props);
    const { list } = props
    let total = 0
    for (const student of list) {
        total = student.price + total
    }
    return (
        <div>
            <p>Total Students : {list.length}</p>
            <p>Total Money : {total}</p>
            <ul>
                {
                    list.map(student =>
                        <div className="card mb-1">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={student.img} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p>{student.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </ul>
        </div>
    );
};

export default Teams;