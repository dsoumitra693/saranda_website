"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileCommunityOpen, setMobileCommunityOpen] = useState(false);

    const navbarRef = useRef(null);
    const dropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const mobileCommunityRef = useRef(null);
    const dropdownTimeoutRef = useRef(null);

    const socialLinks = [
        { name: "WhatsApp", href: "/whatsapp", icon: "/images/whatsapp.svg" },
        { name: "YouTube", href: "https://www.youtube.com/@saranda_iitm", icon: "/images/youtube.svg" },
        { name: "Instagram", href: "https://www.instagram.com/iitm_saranda", icon: "/images/instagram.svg" },
        { name: "LinkedIn", href: "https://www.linkedin.com/company/saranda-iitm", icon: "/images/linkedin.svg" },
    ];
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/know-us", label: "Know us" },
        { href: "/events", label: "Events" },
        { href: "/meetups", label: "Meetup" },
        { href: "/art-gallery", label: "Art Gallery" },
    ];
    const dropdownItems = [
        { href: "/community/culturals", label: "Cultural" },
        { href: "/community/esports", label: "eSports" },
    ];

    useEffect(() => {
        return () => {
            if (dropdownTimeoutRef.current) {
                clearTimeout(dropdownTimeoutRef.current);
            }
        };
    }, []);

    const handleDropdownOpen = () => {
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
        }
        setIsDropdownOpen(true);
        setHoveredItem("Communities");
    };

    const handleDropdownClose = () => {
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
        }
        dropdownTimeoutRef.current = setTimeout(() => {
            setIsDropdownOpen(false);
            setHoveredItem(null);
        }, 150);
    };

    useEffect(() => {
        if (navbarRef.current) {
            gsap.fromTo(
                navbarRef.current,
                { y: -80, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
            );
        }
    }, []);

    useEffect(() => {
        if (!dropdownRef.current) return;
        const el = dropdownRef.current;

        if (isDropdownOpen) {
            gsap.killTweensOf(el);
            el.style.display = "block";
            gsap.fromTo(
                el,
                { opacity: 0, y: -10, scale: 0.95, transformOrigin: "top" },
                { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: "power3.out" }
            );
        } else {
            gsap.killTweensOf(el);
            gsap.to(el, {
                opacity: 0,
                y: -10,
                scale: 0.95,
                duration: 0.15,
                ease: "power3.in",
                onComplete: () => {
                    el.style.display = "none";
                },
            });
        }
    }, [isDropdownOpen]);

    useEffect(() => {
        if (!mobileMenuRef.current) return;
        const el = mobileMenuRef.current;
        if (mobileMenuOpen) {
            gsap.killTweensOf(el);
            gsap.fromTo(
                el,
                { height: 0, opacity: 0 },
                { height: "auto", opacity: 1, duration: 0.25, ease: "power3.out" }
            );
        } else {
            gsap.killTweensOf(el);
            gsap.to(el, {
                height: 0,
                opacity: 0,
                duration: 0.25,
                ease: "power3.in",
            });
        }
    }, [mobileMenuOpen]);

    useEffect(() => {
        if (!mobileCommunityRef.current) return;
        const el = mobileCommunityRef.current;
        if (mobileCommunityOpen) {
            gsap.killTweensOf(el);
            gsap.fromTo(
                el,
                { height: 0, opacity: 0 },
                { height: "auto", opacity: 1, duration: 0.25, ease: "power3.out" }
            );
        } else {
            gsap.killTweensOf(el);
            gsap.to(el, {
                height: 0,
                opacity: 0,
                duration: 0.25,
                ease: "power3.in",
            });
        }
    }, [mobileCommunityOpen]);

    const isActive = (href) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname?.startsWith(href);
    };

    const isCommunityActive = dropdownItems.some((item) =>
        pathname?.startsWith(item.href)
    );

    return (
        <header ref={navbarRef} className="absolute top-0 z-50 bg-transparent w-screen">
            <nav className="relative container mx-auto px-4 py-3" aria-label="Main navigation">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image
                                src="/images/saranda_logo.png"
                                alt="Saranda Logo"
                                width={50}
                                height={50}
                                className="w-12 h-12 object-contain"
                                priority
                            />
                        </Link>
                    </div>
                    <h1 className="text-primary font-bold text-2xl ml-3 md:hidden text-center vertical-align-middle mt-2">
                        Saranda House
                    </h1>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <li
                                key={link.label}
                                className="relative cursor-pointer"
                                onMouseEnter={() => setHoveredItem(link.label)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <Link
                                    href={link.href}
                                    className="relative inline-block text-primary font-normal transition-colors px-2 py-1 rounded-md z-10 text-lg"
                                    aria-label={link.label}
                                >
                                    <h2 className="relative z-10 font-[36px]">{link.label}</h2>

                                    {/* Active underline */}
                                    {isActive(link.href) && (
                                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-t-md hover:h-[0px]" />
                                    )}

                                    {/* Animated background box on hover */}
                                    <span
                                        className={`absolute inset-0 bg-secondary rounded-md transition-transform duration-300 ease-out transform origin-bottom ${hoveredItem === link.label ? "scale-y-100" : "scale-y-0"
                                            }`}
                                        style={{ transformOrigin: "bottom" }}
                                    />
                                </Link>
                            </li>
                        ))}

                        {/* Communities Dropdown Desktop */}
                        <li
                            className="relative cursor-pointer"
                            onMouseEnter={handleDropdownOpen}
                            onMouseLeave={handleDropdownClose}
                        >
                            <button
                                className={`flex items-center space-x-1 text-primary font-normal text-lg transition-colors duration-200 px-3 py-2 rounded-md relative z-10`}
                                aria-expanded={isDropdownOpen}
                                aria-haspopup="true"
                            >
                                <h2 className="relative z-10 font-[36px]">Communities</h2>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                                        }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>

                                {/* Active underline */}
                                {isCommunityActive && (
                                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-t-md" />
                                )}

                                {/* Animated background box */}
                                <span
                                    className={`absolute inset-0 bg-secondary rounded-md transition-transform duration-300 ease-out transform origin-bottom ${hoveredItem === "Communities" ? "scale-y-100" : "scale-y-0"
                                        }`}
                                    style={{ transformOrigin: "bottom" }}
                                />
                            </button>

                            {/* Dropdown Items */}
                            {isDropdownOpen && (
                                <ul
                                    ref={dropdownRef}
                                    className="absolute top-full left-0 mt-1 w-48 overflow-hidden rounded-lg shadow-lg backdrop-blur-md bg-white/10 z-20"
                                    style={{
                                        backgroundColor: 'rgba(151, 164, 121, 0.8)',
                                    }}
                                    onMouseEnter={handleDropdownOpen}
                                    onMouseLeave={handleDropdownClose}
                                >
                                    {dropdownItems.map((item) => (
                                        <li
                                            key={item.label}
                                            className="relative rounded-lg overflow-hidden"
                                            onMouseEnter={() => setHoveredItem(item.label)}
                                            onMouseLeave={() => setHoveredItem("Communities")}
                                        >
                                            <Link
                                                href={item.href}
                                                className={`relative block px-4 py-3 text-primary text-lg transition-colors duration-200 z-10`}
                                            >
                                                <h2 className="relative z-10 font-[36px]">{item.label}</h2>

                                                {/* Sliding background on hover */}
                                                <span
                                                    className={`absolute inset-0 bg-secondary transition-transform duration-300 ease-out transform origin-left ${hoveredItem === item.label ? "scale-x-100" : "scale-x-0"
                                                        }`}
                                                    style={{ transformOrigin: "left" }}
                                                />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-primary hover:text-primary-light-lime transition-colors duration-200"
                        aria-label="Open mobile menu"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    mobileMenuOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>

                    {/* Social Links Desktop */}
                    <ul className="hidden lg:flex items-center space-x-3">
                        {socialLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="group p-2 rounded-full hover:bg-primary-light-lime/10 transition-all duration-300 transform hover:scale-110"
                                    aria-label={`Visit our ${link.name} page`}
                                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                    <Image
                                        src={link.icon}
                                        alt={`${link.name} icon`}
                                        width={24}
                                        height={24}
                                        className="w-6 h-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                                        style={{ filter: 'brightness(0) saturate(100%) invert(21%) sepia(27%) saturate(812%) hue-rotate(88deg) brightness(95%) contrast(93%)' }}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Dropdown */}
                <ul
                    ref={mobileMenuRef}
                    className="md:hidden bg-primary mt-2 space-y-1 bg-primary-light-lime rounded-md shadow-lg p-4 overflow-hidden"
                    style={{
                        height: mobileMenuOpen ? "auto" : 0,
                        opacity: mobileMenuOpen ? 1 : 0,
                        transition: "height 0.25s ease, opacity 0.25s ease",
                    }}
                >
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-4 py-2 rounded-md text-primary-dark font-normal text-white"
                            >
                                <h2 className="relative z-10 font-[36px]">{link.label}</h2>
                            </Link>
                        </li>
                    ))}

                    {/* Mobile Communities */}
                    <li>
                        <button
                            onClick={() => setMobileCommunityOpen(!mobileCommunityOpen)}
                            className="w-full flex justify-between items-center px-4 py-2 rounded-md bg-primary-lime text-neutral-light font-medium"
                            aria-expanded={mobileCommunityOpen}
                            aria-controls="mobile-community-menu"
                        >
                            <h2 className="relative z-10 font-[36px]">Communities</h2>
                            <svg
                                className={`w-5 h-5 transform transition-transform duration-200 ${mobileCommunityOpen ? "rotate-180" : ""
                                    }`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        <ul
                            id="mobile-community-menu"
                            ref={mobileCommunityRef}
                            className="mt-2 space-y-1 pl-4 border-l border-neutral-light overflow-hidden"
                            style={{
                                height: mobileCommunityOpen ? "auto" : 0,
                                opacity: mobileCommunityOpen ? 1 : 0,
                                transition: "height 0.25s ease, opacity 0.25s ease",
                            }}
                        >
                            {dropdownItems.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="block px-4 py-2 rounded-md text-neutral-light font-normal hover:bg-primary-lime hover:text-white"
                                    >
                                        <h2 className="relative z-10 font-[36px]">{item.label}</h2>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    
                    {/* Mobile Social Links */}
                    <li className="pt-4 border-t border-neutral-light/20">
                        <div className="flex justify-center space-x-6">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                                    aria-label={`Visit our ${link.name} page`}
                                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                    <Image
                                        src={link.icon}
                                        alt={`${link.name} icon`}
                                        width={20}
                                        height={20}
                                        className="w-5 h-5 transition-opacity duration-300"
                                        style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }}
                                    />
                                </Link>
                            ))}
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
