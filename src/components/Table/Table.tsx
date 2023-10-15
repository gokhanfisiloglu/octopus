import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import ContentTables from "./ContentTables";

interface TableProps {
}

const Table: React.FC<TableProps> = (props) => {

    return (
        <div style={{background: "#F8F9FA"}}>
            <Sidebar className={""}/>
            <ContentTables/>
        </div>
    );
};

export default Table;