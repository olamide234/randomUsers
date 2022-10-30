import React from 'react'
import "../App.css";

export default function Home() {
    return (
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop: '2rem'}} className='home-container'>
           <div className='home-content'>
            Welcome to Hockey game community, click &nbsp;
            <span style={{display:'inline-block'}}><a className='direction' href="/users"> here --></a></span>
            &nbsp;to view our members
            </div>
            <img src='https://thumbs.dreamstime.com/z/field-hockey-stick-ball-fake-grass-copy-space-154122341.jpg' className='home-img'></img>
            
        </div>
    )
}
