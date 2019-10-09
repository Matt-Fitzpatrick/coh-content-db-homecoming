import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const DividedMastery: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "divided-mastery",
    names: [
        {value: "Divided Mastery"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback under the parameter of \"1 Defeat Allowed\" for the team."},
    ],
    acquisition: "Complete a Flashback arc with one or fewer defeats.",
    links: [
        {title: "Divided Mastery Badge", href: "https://paragonwiki.com/wiki/Divided_Mastery_Badge"}
    ],
    icons: [{value: "core.ouroboros.divided-mastery"}]
};
