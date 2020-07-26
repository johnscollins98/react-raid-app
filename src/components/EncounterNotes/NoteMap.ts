import ValeGuardianNotes from './ValeGuardianNotes';
import GorsevalNotes from './GorsevalNotes';

const NoteMap: Map<string, JSX.Element> = new Map<string, JSX.Element>();

NoteMap.set("vale_guardian", ValeGuardianNotes());
NoteMap.set("gorseval", GorsevalNotes());

export default NoteMap; 