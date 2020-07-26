import React from 'react';

import { INote } from '../../utilities/Interfaces';

function Note(props: INote) {
  return (
    <div className="note">
      <h3 className="note-heading">{props.heading}</h3>
      <ul className="note-point">
        {props.points.map((point: string, i: number) => <li key={i}>{point}</li>)}
      </ul>
    </div>
  );
}

export default Note;
