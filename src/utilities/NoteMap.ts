import ValeGuardianNotes from "../components/EncounterNotes/ValeGuardianNotes";
import GorsevalNotes from "../components/EncounterNotes/GorsevalNotes";
import SlothasorNotes from "../components/EncounterNotes/SlothasorNotes";
import BanditTrioNotes from "../components/EncounterNotes/BanditTrio";

const NoteMap: Map<string, JSX.Element> = new Map<string, JSX.Element>();

NoteMap.set("vale_guardian", ValeGuardianNotes());
NoteMap.set("gorseval", GorsevalNotes());
NoteMap.set("slothasor", SlothasorNotes());
NoteMap.set("trio", BanditTrioNotes());

export default NoteMap;
