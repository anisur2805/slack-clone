import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
    return (
        <HeaderContainer>
            {/* Header Left */}
            <HeaderLeft>
                <HeaderAvatar
                // TODO: Add onClick
                />
                <AccessTimeIcon />
            </HeaderLeft>

            {/* Header Search */}
            <HeaderSearch>
                <SearchIcon />
                <input placeholder="Search here" />
            </HeaderSearch>

            {/* Header Right */}
            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
            
        </HeaderContainer>
    );
}

export default Header;

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;
    
    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`;
const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    // background-color: var(--slack-color);
    background-color: #350d36;
    color: white;
`;
const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`;
const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;

const HeaderSearch = styled.div`
    flex: 0.4;
    display: flex;
    opacity: 1;
    border-radius: 6px;
    background: #421f44;
    text-align: center;
    padding: 0 50px;
    color: gray;
    border: 1px solid gray;
    outline: 0;

    > input {
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: white;
    }
`;