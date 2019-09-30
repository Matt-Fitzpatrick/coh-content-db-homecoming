import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Marketer: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "marketer",
    names: [
        {type: Alternate.H, value: "Marketer"},
        {type: Alternate.V, value: "Black Marketeer"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've sold 5000 items on the Auction House."},
    ],
    acquisition: "5000 total sales of any kind on the consignment houses.",
    links: [
        {title: "Marketer Badge", href: "https://paragonwiki.com/wiki/Marketer_Badge"},
        {title: "Black Marketeer Badge", href: "https://paragonwiki.com/wiki/Black_Marketeer"}
    ],
    imageKeys: [{value: "core.consignment.marketer"}]
};
