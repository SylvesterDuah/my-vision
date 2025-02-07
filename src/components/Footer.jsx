import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socialLinks = [
    { href: "https://github.com/SylvesterDuah", icon: <FaGithub /> },
    { href: "https://www.linkedin.com/in/sylvester-atta-effah-duah-a259b0176/", icon: <FaLinkedin /> },
    { href: "https://www.youtube.com/@Extend-m2e", icon: <FaYoutube /> },
    { href: "https://twitter.com/effah_duah", icon: <FaTwitter /> },
];

const Footer = () => {
    return (
        <footer className="w-screen bg-[#545357] py-4 text-black">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm font-light md:text-left">
                    &copy; Sylvester 2025. All rights reserved
                </p>

                <div className="flex justify-center gap-4  md:justify-start">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black transition-colors duration-500 ease-in-out hover:text-white"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                <a
                    href="#privacy-policy"
                    className="text-center text-sm font-light hover:underline md:text-right"
                >
                    Privacy Policy
                </a>
            </div>
        </footer>
    );
};

export default Footer;