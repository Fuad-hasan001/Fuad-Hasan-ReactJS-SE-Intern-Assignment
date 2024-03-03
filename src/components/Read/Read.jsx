import React, { useEffect, useState } from 'react';
import './Read.css'
import axios from 'axios';
import {
    TableRow,
    TableHeaderCell,
    TableHeader,
    TableCell,
    TableBody,Table, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Details from '../Details/Details';

const Read = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get(`https://65e3c45d88c4088649f606a7.mockapi.io/users`)
            .then((getData) => {
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
                                            <Link to='/update'>
                                            <Button className='btn-edit' color='orange'>Edit</Button>
                                            </Link>

                                            <Button className='btn-block' color='green'>Block</Button>
                                            
                                            <Button className='btn-details' color='blue'>Details</Button>

                                            <Link to='/delete'>
                                            <Button className='btn-delete' color='red'>Delete</Button>
                                            </Link>
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