import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {NervaArchipelago} from "../../map/nerva-archipelago";

export const LockedAndLoaded: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "locked-and-loaded",
    names: [{value: "Locked and Loaded"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: NervaArchipelago.key,
    location: [3286.0, 126.0, 3645.0],
    badgeText: [{
        value: `This is the spot where many Longbow Agents have trained to take you down.`
    }],
    notes: `Located in [map:${NervaArchipelago.key}], in the Agincourt neighborhood.

It is located under a shed with mesh-net walls 120 yards north-northeast of the Agincourt marker.`,
    links: [
        {title: "Locked and Loaded Badge", href: "https://paragonwiki.com/wiki/Locked_and_Loaded_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "2"
};
