import ValeGuardianNotes from "../components/EncounterNotes/ValeGuardianNotes";
import GorsevalNotes from "../components/EncounterNotes/GorsevalNotes";
import SlothasorNotes from "../components/EncounterNotes/SlothasorNotes";
import BanditTrioNotes from "../components/EncounterNotes/BanditTrioNotes";
import MatthiasNotes from "../components/EncounterNotes/MatthiasNotes";
import EscortNotes from "../components/EncounterNotes/EscortNotes";

const NoteMap: Map<string, JSX.Element> = new Map<string, JSX.Element>();

NoteMap.set("vale_guardian", ValeGuardianNotes());
NoteMap.set("gorseval", GorsevalNotes());
NoteMap.set("slothasor", SlothasorNotes());
NoteMap.set("trio", BanditTrioNotes());
NoteMap.set("matthias", MatthiasNotes());
NoteMap.set("escort", EscortNotes());

export default NoteMap;
