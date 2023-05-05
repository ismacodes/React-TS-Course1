import React, { Children, useState } from "react";

interface Props {
    children: string;
    maxChars?: number; // ? makes it an optional prop
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
    let [isExpanded, setIsExpanded] = useState(false);

    if (children.length <= maxChars) {
        return <p>{children}</p>;
    } else {
        return (
            <>
                <p>{isExpanded ? children : children.slice(0, maxChars) + "..."}</p>
                <button
                    onClick={() => {
                        setIsExpanded(!isExpanded);
                    }}
                >
                    Show {isExpanded ? "Less" : "More"}
                </button>
            </>
        );
    }
};

export default ExpandableText;
