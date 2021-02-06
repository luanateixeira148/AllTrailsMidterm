import React, { useState, useEffect } from 'react';
import '../pages/main.scss';
import NoteCard from '../comps/NoteCard';
import Sort from '../comps/Sort';
import NewNoteButton from '../comps/NewNoteButton';
import BottomMenu from '../comps/BottomMenu';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const Main = () => {

    // const [titles, setTitles] = useState([]);

    // const [alltitles, setAlltitles] = useState([]);

    // const HandleAZ = () => {
    //     setTitles(
    //         alltitles.sort(az)
    //     )
    // }

    // const HandleZA = () => {
    //     setTitles(
    //         alltitles.sort(za)
    //     )
    // }

    // const GetTitles = async() => {
    //     var resp = await axios.get("");
    //     console.log("get titles", resp);
    // }
    // useEffect(()=>{
    //     GetTitles()
    // }, [])

    return <div className="body">
        <div className="notes">
            {/* {titles.map((o)=>{
                return <NoteCard
                    NoteTitle={o.title}
                />
            })} */}
            <NoteCard />
            <NoteCard />
            <NoteCard />
        </div>
        <div className="sortMenu">
            <Sort 
            // onClickAlphAZ={HandleAZ}
            // onClickAlphZA={HandleZA}
            />
        </div>
        <Link to='/note'>
        <div className="fixedButton">
            <NewNoteButton />
        </div>
        </Link>
    </div>
}

export default Main;

// function AlphAZ(a,b){
//     if(a.title > b.title){
//         return 1;
//     } else if (a.title < b.title) {
//         return -1;
//     } else {
//         return 0;
//     }
// };

// function AlphZA(a,b){
//     if(a.title > b.title){
//         return -1;
//     } else if (a.title < b.title) {
//         return 1;
//     } else {
//         return 0;
//     }
// };