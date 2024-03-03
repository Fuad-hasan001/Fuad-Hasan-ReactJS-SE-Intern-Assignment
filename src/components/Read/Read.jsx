import React, { useEffect, useState } from 'react';
import './Read.css'
import axios from 'axios';
import {
    TableRow,
    TableHeaderCell,
    TableHeader,
    TableCell,
    TableBody,Table, Button} from 'semantic-ui-react'

const Read = () => {
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        axios.get(`https://65e3c45d88c4088649f606a7.mockapi.io/users`)
            .then((getData) => {
                // console.log(getData.data)
                setTableData(getData.data);
            })
    }, [])

    return (
        <div>
            <Table celled>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>Full Name</TableHeaderCell>
                        <TableHeaderCell>Options</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {/* Dynamic way */}
                    {
                        tableData.map(data => {
                            return (
                                    <TableRow>
                                        <TableCell>{data.id}</TableCell>
                                        
                                        <TableCell>
                                            {data.firstName} {data.lastName}
                                            </TableCell>

                                        <TableCell>
                                            <Button className='btn-edit' color='orange'>Edit</Button>

                                            <Button className='btn-block' color='green'>Block</Button>
                                            
                                            <Button className='btn-delete' color='red'>Delete</Button>
                                        </TableCell>
                                    </TableRow>
                            )
                        })
                    }

                </TableBody>
            </Table>
        </div>
    );
};

export default Read;