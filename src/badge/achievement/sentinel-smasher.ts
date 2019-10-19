import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const SentinelSmasher: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "sentinel-smasher",
    names: [
        {value: "Sentinel Smasher"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Diabolique thought she had ensured that the Sentinel could be prepared for any situation " +
        "simply by absorbing the powers of the heroes she had captured. In a display of confidence or " +
        "hubris, you decided to make a point by giving the Sentinel its best possible chance of " +
        "defeating your league. Even in this dangerous state, you achieved victory over the Sentinel " +
        "during Dilemma Diabolique."}
    ],
    acquisition: "Defeat the Sentinel after rescuing four specific heroes during the Dilemma Diabolique Trial",
    links: [
        {title: "Sentinel Smasher Badge", href: "https://paragonwiki.com/wiki/Sentinel_Smasher_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-dea.png"}
    ],
};