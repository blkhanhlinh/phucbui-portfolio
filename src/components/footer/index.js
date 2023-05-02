import react from "react";
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="w-full h-px bg-black"></div>
            <div className="flex justify-between md:text-xs text-[10px] pt-3 md:pt-6 pb-8 md:pb-16">
                <p>fubbuj © {year}. &nbsp; Coded by <a href="https://linkedin.com/in/blkhanhlinh/" className="underline">blkhanhlinh</a></p>
                <div className="flex justify-between">
                    <a href="https://fb.com/fubbuj" className="hover:underline">Facebook</a>
                    <p className="px-2">/</p>
                    <a href="https://instagram.com/fubbuj" className="hover:underline">Instagram</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;