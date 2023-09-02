import { useState } from "react";

function ListGroup() {
    let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>List Group</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item}
                        onClick={() => { setSelectedIndex(index); }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            {/* <button className="More-btn">Click For More</button> */}
        </>
    )
}

export default ListGroup;