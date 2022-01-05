import React, { useState } from 'react'
import { 
    Dropdown as Dropdown2,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
 } from 'reactstrap'


const Dropdown = ({ data, setUserType }) => {

    const [active, setActive] = useState(false)

    return (
        <div className="d-flex justify-content-center p-5">
            <Dropdown2 isOpen={active} toggle={() => setActive(!active)}>

                <DropdownToggle caret>
                    Dropdown
                </DropdownToggle>

                <DropdownMenu>
                    {
                        data.map((item, index) => (
                            <DropdownItem 
                            key={index}
                            onClick={()=> setUserType(item)}
                            >
                                {item.type}
                            </DropdownItem>
                        ))
                    }
                </DropdownMenu>

            </Dropdown2>
        </div>
    )
}

export default Dropdown
