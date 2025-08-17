
import { Logo } from "./Logo";
import SearchBar from "./SearchBar";
import { HeaderIcons } from "./HeaderIcons";

export default function Header() { 
    return (
        <header className="flex items-center justify-between p-4 shadow-md">
            <Logo />
            <SearchBar />
            <HeaderIcons />
        </header>
    );
}