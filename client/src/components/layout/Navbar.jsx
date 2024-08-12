import { useState } from "react";
import Container from "./Container";
import Filter from "./Filter";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
// import Search from "./Search";
// import UserMenu from "./UserMenu";

const Navbar = () => {
    const [name, setName] = useState("");

    const navigate = useNavigate()

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            navigate(`/filter-result?countryId=${""}&cuisineId=${""}&averageCostForTwo=${""}&name=${name}&latitude=${""}&longitude=${""}`)
        }
    };

    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div
                        className="
                            flex 
                            flex-row 
                            items-center 
                            justify-between
                            gap-3
                            md:gap-0
                    ">
                        <Logo />
                        <Search />
                        {/* <UserMenu currentUser={currentUser}/> */}
                        <div className="flex flex-row">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onKeyDown={handleKeyDown} // Add this line
                                placeholder="Name of restaurant"
                                className="p-2 border-2 rounded-lg text-lg"
                            />
                            <Filter />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;
