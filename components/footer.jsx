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
                src: "https://www.instagram.com/saranda.iitm/",
                icon: "/images/instagram.svg"
            },
            {
                alt: "YouTube",
                src: "https://www.facebook.com/saranda.iitm/",
                icon: "/images/youtube.svg"
            },
            {
                alt: "WhatsApp",
                src: "https://twitter.com/saranda_iitm",
                icon: "/images/whatsapp.svg",
                size: 24
            },
            {
                alt: "LinkedIn",
                src: "https://www.linkedin.com/school/saranda-iitm/",
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
            { title: "Student Handbook", src: "/student-handbook" },
            { title: "Grading Document", src: "/grading-document" },
            { title: "Score-Checker", src: "/score-checker" }
        ]
    }
]

export default function Footer() {
    return (
        <div className="w-full h-auto min-h-[350px] b-0 absolute bg-primary flex flex-wrap items-start justify-center gap-6 pt-4 px-4 pb-8 md:gap-15 md:pt-2 md:px-2.5 md:h-[350px]">
            {footerConfig.map((section, index) => (
                <FooterLinkGroup key={index} {...section} />
            ))}
        </div>
    )
}


export const FooterLink = ({ src, title }) => {
    return (
        <Link href={src}>
            <p className="text-neutral-light text-sm font-medium hover:text-secondary transition-all duration-200 py-1 text-center md:text-left md:text-[14px] md:hover:text-[16px]">
                {title}
            </p>
        </Link>
    );
};


export const FooterIconLink = ({ src, icon, alt, size }) => {
    return (
        <Link 
            href={src} 
            className="hover:opacity-90 transition-all duration-300 ease-in-out transform hover:scale-125 hover:shadow-lg hover:shadow-primary-lime/50 rounded-full"
        >
            <Image 
                src={icon} 
                alt={alt} 
                width={size ?? 32} 
                height={size ?? 32}
                className="hover:animate-pulse transition-all duration-300"
            />
        </Link>
    );
};

export const FooterLinkGroup = ({ title, links, iconLinks, otherIcons }) => {
    return (
        <div className="flex flex-col items-start justify-start w-full pb-8 pt-2 md:w-[25%] md:items-start md:mb-0">
            <h3 className="text-neutral-light text-xl font-bold mb-4 text-center md:text-left md:text-2xl">
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
