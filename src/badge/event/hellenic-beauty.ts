import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const HellenicBeauty: IBadgeData = {
    type: BadgeType.EVENT,
    key: "hellenic-beauty",
    names: [
        {value: "Hellenic Beauty"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have let beauty prevail by letting Camilla and Claudia go unscathed while defeating the ugly brute Cornutus."},
    ],
    acquisition: "In the Summer Blockbuster, defeat Cornutus, but leave both Camilla and Claudia alive.",
    notes: "(It is not necessary to refrain from damaging the two angels, just don't kill them.)",
    links: [
        {title: "Hellenic Beauty Badge", href: "https://paragonwiki.com/wiki/Hellenic_Beauty_Badge"}
    ],
    icons: [{value: "core.event.hellenic-beauty"}]
};
