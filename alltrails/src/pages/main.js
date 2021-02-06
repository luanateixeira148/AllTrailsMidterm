import React from 'react';
import '../pages/main.scss';
import NoteCard from '../comps/NoteCard';
import Sort from '../comps/Sort';
import NewNoteButton from '../comps/NewNoteButton';
import BottomMenu from '../comps/BottomMenu';
import { Link } from 'react-router-dom';

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