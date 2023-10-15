import React, {useState} from 'react';
import Content from "./../Dashboard/Content";
import Sidebar from "../Sidebar/Sidebar";
import SvgManagement from "../../SvgManagement/SvgManagement";

interface DashboardProps {
}

const Dashboard: React.FC<DashboardProps> = (props) => {

    const [toggle, setToggle] = useState(false)

    return (
        <div style={{background: "#F8F9FA"}}>
            <button navbar-trigger="" className="absolute right-[24px] top-[25px] z-20 px-3 py-1 ml-2 leading-none transition-all bg-transparent border border-transparent border-solid rounded-lg shadow-none cursor-pointer text-size-lg ease-soft-in-out lg:hidden" type="button" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation"
                    onClick={()=> setToggle(!toggle)}>
                <SvgManagement svgName={'dashboard'}  w={"11"} h={'12'} f={'#2D3748'}/>
            </button>
            <Sidebar className={(toggle ? "ml-[17.25rem] z-30 my-0" : "")}/>
            <Content/>
        </div>
    );
};

export default Dashboard;