import React, { useState } from "react";

const Navbar = ({ setMapDisplay }) => {
  const [selected, setSelected] = useState("donor");

  const handleChange = () => {
    setSelected(selected === "donor" ? "charity" : "donor");
    setMapDisplay(selected);
  };

  return (
    <div className="nav">
      <label>
        Select map type:
        <select value={selected} onChange={handleChange}>
          <option value="donor">Donors</option>
          <option value="charity">Charities</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </div>
  );
};

export default Navbar;
