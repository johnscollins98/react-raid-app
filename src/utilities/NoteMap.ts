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
import SoullessHorrorNotes from "../components/EncounterNotes/SoullessHorrorNotes";
import RiverNotes from "../components/EncounterNotes/RiverNotes";
import StatueOfIceNotes from "../components/EncounterNotes/StatueOfIceNotes";
import StatueOfDeathNotes from "../components/EncounterNotes/StatueOfDeathNotes";
import StatueOfDarknessNotes from "./../components/EncounterNotes/StatueOfDarknessNotes";
import DhuumNotes from "../components/EncounterNotes/DhuumNotes";

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
NoteMap.set("desmina", SoullessHorrorNotes());
NoteMap.set("river", RiverNotes());
NoteMap.set("ice-king", StatueOfIceNotes());
NoteMap.set("soul-eater", StatueOfDeathNotes());
NoteMap.set("eyes", StatueOfDarknessNotes());
NoteMap.set("dhuum", DhuumNotes());

export default NoteMap;
