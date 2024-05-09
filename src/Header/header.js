import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
// import { List } from "../List/list";


export const Header = ()=> {
    return<>
    <BasicExample/>
    </>;
};

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/List">List</Dropdown.Item>
        <Dropdown.Item href="/Make">Make</Dropdown.Item>
        <Dropdown.Item href="/Main">Reset</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export default BasicExample;