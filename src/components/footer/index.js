import react from "react";
const Footer = () => {
    return (
        <footer>
            <div className="w-full h-px bg-black"></div>
            <div className="flex justify-between pt-5 pb-16">
                <p>@fubbuj © 2023</p>
                <div className="flex justify-between">
                    <a href="https://fb.com/fubbuj" className="hover:underline">Facebook</a>
                    <p className="px-7">/</p>
                    <a href="https://instagram.com/fubbuj" className="hover:underline">Instagram</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;