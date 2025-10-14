import Image from "next/image"
import Link from "next/link"

const footerConfig = [
    {
        title: "Contacts",
        links: [
            {
                title: "saranda-webad@ds.study.iitm.ac.in",
                src: "mailto:saranda-webad@ds.study.iitm.ac.in"
            },
            {
                title:"support@ds.study.iitm.ac.in",
                src:"mailto:support@ds.study.iitm.ac.in"
            }
        ],
        iconLinks: [
            {
                alt: "Instagram",
                src: "https://www.instagram.com/iitm_saranda",
                icon: "/images/instagram.svg"
            },
            {
                alt: "YouTube",
                src: "https://www.youtube.com/@saranda_iitm",
                icon: "/images/youtube.svg"
            },
            {
                alt: "WhatsApp",
                src: "https://whatsapp.com/channel/0029Vb4vQKPB4hdNYxXcYC0j",
                icon: "/images/whatsapp.svg",
                size: 24
            },
            {
                alt: "LinkedIn",
                src: "https://linkedin.com/company/saranda-house",
                icon: "/images/linkedin.svg"
            }
        ],
        otherIcons: [
            { alt: "iitm", icon: "/images/iitm_logo.png", src: "*", size: 36 },
            { alt: "saranda", icon: "/images/saranda_logo.png", src: "*", size: 36 }
        ]
    },
    {
        title: "Quick links",
        links: [
            { title: "Home", src: "/" },
            { title: "Core Team", src: "/core-team" },
            { title: "Events", src: "/events" },
            { title: "Meet Ups", src: "/meet-ups" },
            { title: "Art Gallery", src: "/art-gallery" },
            { title: "Saranda Culturals Community", src: "/culturals-community" },
            { title: "Saranda eSports Community", src: "/esports-community" },
        ]
    },
    {
        title: "Useful links",
        links: [
            { title: "Student Handbook", src: "https://docs.google.com/document/u/1/d/e/2PACX-1vRxGnnDCVAO3KX2CGtMIcJQuDrAasVk2JHbDxkjsGrTP5ShhZK8N6ZSPX89lexKx86QPAUswSzGLsOA/pub" },
            { title: "Grading Document", src: "https://docs.google.com/document/u/1/d/e/2PACX-1vSBP6TJyZDklGPMyRtTwQc1cWZKOrozsOy5qmBwB8awTFvBbPN33-IxUV2WYupNdlXQOCgKwV9fDQKq/pub?urp=gmail_link#h.mq6va7imuzk" },
            { title: "Score-Checker", src: "https://score-checker-379619009600.asia-south1.run.app" }
        ]
    }
]

export default function Footer() {
    return (
        <div className="w-full h-auto min-h-[350px] absolute bg-primary flex flex-wrap items-start justify-center gap-6 pt-4 px-4 pb-8 md:gap-15 md:pt-2 md:px-2.5 md:h-[350px]">
            {footerConfig.map((section, index) => (
                <FooterLinkGroup key={index} {...section} />
            ))}
        </div>
    )
}


export const FooterLink = ({ src, title }) => {
    return (
        <Link href={src}>
            <p className="text-neutral-light text-sm font-medium hover:text-secondary transition-colors duration-300 py-1 text-center md:text-left md:text-[14px]">
                {title}
            </p>
        </Link>
    );
};


export const FooterIconLink = ({ src, icon, alt, size }) => {
    return (
        <Link 
            href={src} 
            className="hover:opacity-75 transition-opacity duration-300 ease-in-out rounded-full"
        >
            <Image 
                src={icon} 
                alt={alt} 
                width={size ?? 32} 
                height={size ?? 32}
                className="transition-opacity duration-300"
            />
        </Link>
    );
};

export const FooterLinkGroup = ({ title, links, iconLinks, otherIcons }) => {
    return (
        <div className="flex flex-col items-start justify-start w-full pb-8 pt-2 md:w-[25%] md:items-start md:mb-0">
            <h3 className="text-neutral-light text-xl   mb-4 text-center md:text-left md:text-2xl">
                {title}
            </h3>

            <div className="flex flex-col items-start w-full">
                {links.map((link, index) => (
                    <FooterLink key={index} {...link} />
                ))}
            </div>

            {iconLinks && (
                <div className="flex items-center justify-center gap-3 mt-4 md:justify-start md:gap-2">
                    {iconLinks.map((link, index) => (
                        <FooterIconLink key={index} {...link} />
                    ))}
                </div>
            )}
            {otherIcons && (
                <div className="flex items-center justify-center gap-5 mt-4 md:justify-start md:gap-2">
                    {otherIcons.map((link, index) => (
                        <FooterIconLink key={index} {...link} />
                    ))}
                </div>
            )}
        </div>
    );
};
