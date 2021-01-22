import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';


const MessagesSkeleton = () => {
    return (
        <div style={{ width: "fit-content", marginLeft: "10px" }}>
            <Skeleton animation="wave" variant="rect" width={150} height={40} style={{margin: "20px 34px 10px 0px", borderRadius: "10px"}}/>
            <Skeleton animation="wave" variant="rect" width={240} height={120} style={{margin: "20px 34px 10px 0px", borderRadius: "10px"}}/>
            <Skeleton animation="wave" variant="rect" width={240} height={80} style={{margin: "20px 34px 10px 0px", borderRadius: "10px"}}/>
            <Skeleton animation="wave" variant="rect" width={120} height={40} style={{margin: "20px 34px 10px 0px", borderRadius: "10px"}}/>
            <Skeleton animation="wave" variant="rect" width={100} height={40} style={{margin: "20px 34px 10px 0px", borderRadius: "10px"}}/>
            <Skeleton animation="wave" variant="rect" width={240} height={160} style={{margin: "20px 34px 10px 0px", borderRadius: "10px"}}/>
            <Skeleton animation="wave" variant="rect" width={210} height={40} style={{margin: "20px 34px 10px 0px", borderRadius: "10px"}}/>
            <Skeleton animation="wave" variant="rect" width={210} height={40} style={{margin: "20px 34px 10px 0px", borderRadius: "10px"}}/>
            <Skeleton animation="wave" variant="rect" width={210} height={50} style={{margin: "20px 34px 10px 0px", borderRadius: "10px"}}/>
            <Skeleton animation="wave" variant="rect" width={210} height={50} style={{margin: "20px 34px 10px 0px", borderRadius: "10px"}}/>
            <Skeleton animation="wave" variant="rect" width={210} height={50} style={{margin: "20px 34px 10px 0px", borderRadius: "10px"}}/>
        </div>
    );
};

export default MessagesSkeleton;