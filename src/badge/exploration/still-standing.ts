import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SirensCall} from "../../map/sirens-call";

export const StillStanding: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "still-standing",
    names: [{value: "Still Standing"}],
    alignment: ALIGNMENT_ANY,
    mapKey: SirensCall.key,
    location: [-325.0, 191.0, -105.0],
    links: [
        {title: "New PvP Exploration Badge List", href: "https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ]
};
