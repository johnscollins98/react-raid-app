import React from 'react';

import ValeGuardianNotes from "../components/EncounterNotes/ValeGuardianNotes";
import GorsevalNotes from "../components/EncounterNotes/GorsevalNotes";
import SlothasorNotes from "../components/EncounterNotes/SlothasorNotes";
import BanditTrioNotes from "../components/EncounterNotes/BanditTrioNotes";
import MatthiasNotes from "../components/EncounterNotes/MatthiasNotes";
import EscortNotes from "../components/EncounterNotes/EscortNotes";
import KeepConstructNotes from "../components/EncounterNotes/KeepConstructNotes";
import TwistedCastleNotes from "../components/EncounterNotes/TwistedCastle";
import XeraNotes from "../components/EncounterNotes/XeraNotes";
import CairnNotes from "../components/EncounterNotes/CairnNotes";
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
import ConjuredAmalgamateNotes from "../components/EncounterNotes/ConjuredAmalgamateNotes";
import TwinLargosNotes from "../components/EncounterNotes/TwinLargosNotes";
import QadimNotes from "./../components/EncounterNotes/QadimNotes";
import CardinalAdinaNotes from "../components/EncounterNotes/CardinalAdinaNotes";
import CardinalSabirNotes from "../components/EncounterNotes/CardinalSabirNotes";

const NoteMap: Map<string, JSX.Element> = new Map<string, JSX.Element>();

// Wing 1
NoteMap.set("vale-guardian", <ValeGuardianNotes />);
NoteMap.set("gorseval", <GorsevalNotes />);
NoteMap.set("sabetha", <SabethaNotes />);

// Wing 2
NoteMap.set("slothasor", <SlothasorNotes />);
NoteMap.set("trio", <BanditTrioNotes />);
NoteMap.set("matthias", <MatthiasNotes />);

// Wing 3
NoteMap.set("escort", <EscortNotes />);
NoteMap.set("keep-construct", <KeepConstructNotes />);
NoteMap.set("twisted-castle", <TwistedCastleNotes />);
NoteMap.set("xera", <XeraNotes />)

// Wing 4
NoteMap.set("cairn", <CairnNotes />);
NoteMap.set("mursaat-overseer", <MursaatOverseerNotes />);
NoteMap.set("samarog", <SamarogNotes />);
NoteMap.set("deimos", <DeimosNotes />);

// Wing 5
NoteMap.set("desmina", <SoullessHorrorNotes />);
NoteMap.set("river", <RiverNotes />);
NoteMap.set("ice-king", <StatueOfIceNotes />);
NoteMap.set("soul-eater", <StatueOfDeathNotes />);
NoteMap.set("eyes", <StatueOfDarknessNotes />);
NoteMap.set("dhuum", <DhuumNotes />);

// Wing 6
NoteMap.set("conjured-amalgamate", <ConjuredAmalgamateNotes />);
NoteMap.set("largos", <TwinLargosNotes />);
NoteMap.set("qadim", <QadimNotes />);

// Wing 7
NoteMap.set("adina", <CardinalAdinaNotes />);
NoteMap.set("sabir", <CardinalSabirNotes />);
// TODO: QadimP

export default NoteMap;
