import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Hunter: IBadgeData = {
    type: BadgeType.EVENT,
    key: "hunter",
    names: [
        {value: "Hunter"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have defeated 20 of the nefarious Vampires who rose from their graves on Halloween."},
    ],
    acquisition: "Defeat 20 Nefarious Vampires during the Halloween event.",
    links: [
        {title: "Hunter Badge", href: "https://paragonwiki.com/wiki/Hunter_Badge"}
    ],
    icons: [{value: "core.event.hunter"}]
};
