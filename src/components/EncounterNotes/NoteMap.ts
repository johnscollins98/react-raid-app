import ValeGuardianNotes from './ValeGuardianNotes';
import GorsevalNotes from './GorsevalNotes';

const NoteMap: Map<string, any> = new Map<string, any>();

NoteMap.set("vale_guardian", ValeGuardianNotes);
NoteMap.set("gorseval", GorsevalNotes);

export default NoteMap; 