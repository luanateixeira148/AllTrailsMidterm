import React from 'react';
import NoteCard from 'comps/NoteCard';
import Sort from 'comps/Sort';
import NewNoteButton from 'comps/NewNoteButton';

const Main = () => {


    return <div className="body">
        <div className="notes">
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
        </div>
        <div className="sortMenu">
            <Sort />
        </div>
        <div className="fixedButton">
            <NewNoteButton />
        </div>

    </div>
}

export default Main;