import React from "react";

import profilePicture from "../../assets/profile-picture.jpg";
import {Separator} from "../ui/separator.tsx";
import LinkedInLogo from "../../assets/socials-icons/LinkedInLogo.tsx";
import SocialLink from "./socials/SocialLink.tsx";
import GithubLogo from "../../assets/socials-icons/GithubLogo.tsx";
import WhatsappLogo from "../../assets/socials-icons/WhatsappLogo.tsx";

const HeroSection: React.FC = () => {
    return (
        <section className="container">
            <div className="flex flex-col justify-center items-center gap-4 mt-8">
                <div className="flex flex-wrap justify-center">
                    <div className="w-6/12 sm:w-4/12 px-4">
                        <img src={profilePicture}
                             alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none"/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-3xl text-center">Lucca Rey</span>
                    <span className="text-2xl">Desenvolvedor Android</span>
                </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-5">
                <SocialLink
                    link="https://www.linkedin.com/in/luccarey/"
                    children={<LinkedInLogo/>}
                />
                <SocialLink
                    link="https://github.com/Luccamvmrey"
                    children={<GithubLogo/>}
                />
                <SocialLink
                    link="https://wa.me/5571997429256"
                    children={<WhatsappLogo/>}
                />
            </div>

            <Separator className="my-8 mx-auto"/>
        </section>
    );
};

export default HeroSection;