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
                    <td><i class="fas fa-users"></i>Total Students : </td>
                    <td className='fw-bold' style={{ color: '#FE676D' }}> {list.length}</td>
                </tr>
                <tr>
                    <td><i class="fas fa-dollar-sign"></i>Total Money : </td>
                    <td className='fw-bold' style={{ color: '#FE676D' }}>{total}</td>
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
                                <div className="col-md-8 d-flex align-items-center ps-2" style={{ color: '#FE676D' }}>
                                    <h6>{student.name}</h6>
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