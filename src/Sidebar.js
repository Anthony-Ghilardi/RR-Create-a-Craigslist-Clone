import React from "react";

function Sidebar() {
    return (
        <div className="sideBar">
            <h1>Furniture</h1>
            <>
                <label>
                    <input type="checkbox" />
                    Search titles only
                </label>
                <br/>
                <label>
                    <input type="checkbox" />
                    has images
                </label>
                <br/>
                <label>
                    <input type="checkbox" />
                    posted today
                </label>
                <br/>
                <label>
                    <input type="checkbox" />
                    bundled duplicates
                </label>
                <br/>
                <label>
                    <input type="checkbox" />
                    include nearby areas
                </label>
            </>
        </div>
    )
}

export default Sidebar 