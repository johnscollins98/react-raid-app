import ValeGuardianNotes from "../components/EncounterNotes/ValeGuardianNotes";
import GorsevalNotes from "../components/EncounterNotes/GorsevalNotes";
import SlothasorNotes from "../components/EncounterNotes/SlothasorNotes";

const NoteMap: Map<string, JSX.Element> = new Map<string, JSX.Element>();

NoteMap.set("vale_guardian", ValeGuardianNotes());
NoteMap.set("gorseval", GorsevalNotes());
NoteMap.set("slothasor", SlothasorNotes());

export default NoteMap;
