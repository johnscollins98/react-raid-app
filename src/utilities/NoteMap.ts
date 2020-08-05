import ValeGuardianNotes from "../components/EncounterNotes/ValeGuardianNotes";
import GorsevalNotes from "../components/EncounterNotes/GorsevalNotes";
import SlothasorNotes from "../components/EncounterNotes/SlothasorNotes";
import BanditTrioNotes from "../components/EncounterNotes/BanditTrioNotes";
import MatthiasNotes from "../components/EncounterNotes/MatthiasNotes";
import EscortNotes from "../components/EncounterNotes/EscortNotes";
import KeepConstructNotes from "../components/EncounterNotes/KeepConstructNotes";
import TwistedCastleNotes from "../components/EncounterNotes/TwistedCastle";
import MursaatOverseerNotes from "../components/EncounterNotes/MursaatOverseerNotes";
import SamarogNotes from "./../components/EncounterNotes/SamarogNotes";
import DeimosNotes from "../components/EncounterNotes/DeimosNotes";
import SabethaNotes from "./../components/EncounterNotes/SabethaNotes";

const NoteMap: Map<string, JSX.Element> = new Map<string, JSX.Element>();

NoteMap.set("vale-guardian", ValeGuardianNotes());
NoteMap.set("gorseval", GorsevalNotes());
NoteMap.set("sabetha", SabethaNotes());
NoteMap.set("slothasor", SlothasorNotes());
NoteMap.set("trio", BanditTrioNotes());
NoteMap.set("matthias", MatthiasNotes());
NoteMap.set("escort", EscortNotes());
NoteMap.set("keep-construct", KeepConstructNotes());
NoteMap.set("twisted-castle", TwistedCastleNotes());
// TODO: Xera, Cairn
NoteMap.set("mursaat-overseer", MursaatOverseerNotes());
NoteMap.set("samarog", SamarogNotes());
NoteMap.set("deimos", DeimosNotes());

export default NoteMap;
