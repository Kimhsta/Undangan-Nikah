import { COUPLE_NAME } from "../data/wedding.js";

export function CoupleNames({ as: Tag = "span", className = "", separatorClassName = "" }) {
    const [firstName, secondName] = COUPLE_NAME.split(" & ");

    if (!secondName) {
        return <Tag className={className}>{COUPLE_NAME}</Tag>;
    }

    return (
        <Tag className={className}>
            {firstName} <span className={separatorClassName}>&</span> {secondName}
        </Tag>
    );
}
