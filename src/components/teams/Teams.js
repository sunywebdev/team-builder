import React from 'react';

const Teams = (props) => {

    const { list } = props
    let total = 0
    for (const student of list) {
        total = student.budget + total
    }
    return (
        <div>
            <table class="table">
                <tr>
                    <td><i class="fas fa-users"></i> Total Students : </td>
                    <td> {list.length}</td>
                </tr>
                <tr>
                    <td>Total Money : </td>
                    <td>{total}</td>
                </tr>
            </table>

            <ul>
                {
                    list.map(student =>
                        <div className="mb-1" style={{ border: '3px solid #FE676D' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={student.img} className="img-fluid" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <p>{student.name}</p>
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