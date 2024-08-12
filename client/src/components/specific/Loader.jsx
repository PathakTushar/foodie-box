import { PuffLoader } from "react-spinners";

const Loader = () => {
    return (
        <div
            className="
            fixed
            inset-0
            flex
            justify-center
            items-center
            bg-white bg-opacity-75
        "
        >
            <PuffLoader size={100} color="red" />
        </div>
    );
};

export default Loader;
