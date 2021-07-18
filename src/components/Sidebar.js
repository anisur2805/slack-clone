import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>PAPA FAM HQ</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Anisur Rahman
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>
        </SidebarContainer>
    );
}

export default Sidebar;

const SidebarContainer = styled.div`
    flex: 0.3;
    max-width: 260px;
    background: #411b40;
    color: #fff;
    border-top: 1px solid #49274b; 
    height: 100%;
`;
const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: #fff;
        border-radius: 999px;
    }
`;
const SidebarInfo = styled.div`
  flex:1;
 
 > h2 { 
   font-size: 15px;
   font-weight: 900;
   margin-bottom: 5px;
 }
 > h3 {
   display: flex;
    font-size: 13px;
   font-weight: 400;
   text-align: center;
 }
 > h3 > .MuiSvgIcon-root { 
   font-size: 14px;
   margin-top: 1px;
   margin-right: 2px;
   color: green;
 }
`;
