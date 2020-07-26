import ValeGuardianNotes from '../components/EncounterNotes/ValeGuardianNotes';
import GorsevalNotes from '../components/EncounterNotes/GorsevalNotes';

const NoteMap: Map<string, JSX.Element> = new Map<string, JSX.Element>();

NoteMap.set("vale_guardian", ValeGuardianNotes());
NoteMap.set("gorseval", GorsevalNotes());

export default NoteMap; 