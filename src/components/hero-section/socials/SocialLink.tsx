import React, {PropsWithChildren} from "react";

type SocialLinkProps = {
    link: string
}

const SocialLink: React.FC<PropsWithChildren<SocialLinkProps>> = ({children, link}) => {
    return (
        <a href={link} target="_blank" className="rounded p-0.5 hover:bg-foreground">
            {children}
        </a>
    );
};

export default SocialLink;