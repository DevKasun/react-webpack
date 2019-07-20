import React from 'react'

const Table = () => {
    return (
        <div style={tableStyle}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Job role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>feff</td>
                        <td>efef</td>
                        <td>fee</td>
                        <td>ef</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const tableStyle = {
    padding: '25px 0',
}

export default Table;
