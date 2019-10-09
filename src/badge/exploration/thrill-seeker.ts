import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {ArchitectEntertainmentBuildings} from "../../map/architect-entertainment-buildings";

export const ThrillSeeker: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "thrill-seeker",
    names: [{value: "Thrill Seeker"}],
    alignment: ALIGNMENT_ANY,
    mapKey: ArchitectEntertainmentBuildings.key,
    badgeText: [{value: "You're always looking for new forms of entertainment, and it's said that the Mission Architect technology is entertainment in its purest form."}],
    notes: "Visit any Architect Entertainment Building's Main Studio floor." +
        " The coordinates of this Exploration Badge vary with each zone, but its relative location within the AE building is constant." +
        " The badge is clearly visible on the floor between, and just off to the side of, the hologram contacts and Architect Entertainment Stations.",
    links: [
        {title: "Thrill Seeker Badge", href: "https://paragonwiki.com/wiki/Thrill_Seeker_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "core.exploration.hero"},
        {type: Alternate.V, value: "core.exploration.villain"}
    ],
    vidiotMapKey: "X"
};
