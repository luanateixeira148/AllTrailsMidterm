import React, { useState, useEffect } from 'react';
import '../pages/main.scss';
import NoteCard from '../comps/NoteCard';
import Sort from '../comps/Sort';
import NewNoteButton from '../comps/NewNoteButton';
import { Link } from 'react-router-dom';
// import {notes} from '../database.js';


const Main = () => {

    return <div className="body">
        <div className="notes">

            <NoteCard />
            <NoteCard />
            <NoteCard />
            
        </div>
        <div className="sortMenu">
            <Sort />
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