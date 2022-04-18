import React from 'react'
import {useLocation} from 'react-router-dom';
import {Grid} from '@mui/material';

const User = () => {

    const location = useLocation();
    const {title, author, url, num_comments, points, created_at, _tags} = location.state

    return (
        <>
        <h1 style={{textAlign:'center'}}>Item details</h1>
        <Grid style={{border: '1px solid black', heigh: 100, backgroundColor:'#FAFAFA', borderRadius: 10, margin: 30, paddingLeft: 50}}>
            <h2>Title: <span style={{fontSize: 18, fontStyle: 'italic'}}>{title}</span></h2>
            <h2>Author: <span style={{fontSize: 18, fontStyle: 'italic'}}>{author}</span></h2>
            <h2>Url: <span style={{fontSize: 18, fontStyle: 'italic', textDecoration:'underline', cursor:'pointer'}}>{url}</span></h2>
            <h2>Comments: <span style={{fontSize: 18, fontStyle: 'italic'}}>{num_comments}</span></h2>
            <h2>Points: <span style={{fontSize: 18, fontStyle: 'italic'}}>{points}</span></h2>
            <h2>Created at: <span style={{fontSize: 18, fontStyle: 'italic'}}>{created_at}</span></h2>
            <h2>Tags: <span style={{fontSize: 15, fontStyle: 'italic'}}>
                {_tags.map((m) => {
                return(
                    <p style={{paddingLeft: 20}}>-> {m}</p>
                )
            })}</span></h2>
        </Grid>
        </>
    )
}

export default User;
