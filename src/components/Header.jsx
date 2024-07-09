import { useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";


function Header() {

    const [theme, setTheme] = useState("light")

    const changeTheme = () => {

        const root = document.getElementById("root")

        if (theme === "light") {
            root.style.backgroundColor = "#000"
            root.style.color = "#fff"
            setTheme("dark")
        } else {
            root.style.backgroundColor = "#fff"
            root.style.color = "#000"
            setTheme("light") 
        }

    }

    return (
        <div className="container mx-auto flex justify-between items-center py-3">
            <h1 className="text-3xl font-bold ">LOGO</h1>
            <div className="flex items-center space-x-4">
                <input className="border-b-2 bg-transparent py-1 px-2 font-semibold outline-none" type="text" placeholder="Bir şeyler ara" />
                <div className="flex space-x-2 text-2xl">
                    {theme === "light" ? <IoMoonOutline onClick={changeTheme} className="cursor-pointer" /> : <IoSunnyOutline onClick={changeTheme} className="cursor-pointer" />}
                    <CiShoppingBasket className="cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default Header