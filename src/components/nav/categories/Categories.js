import React from 'react'

export default function Categories({ getCategory }) {

    const handleCategoryChange = (eve) => {

        if (eve.target.value === "") {
            getCategory("nature")
        } else {
            getCategory(eve.target.value);
        }
    }
    return (
        <select className="form-select" onChange={handleCategoryChange}>
            <option value="">Select a category</option>
            <option value="mountain">Mountains</option>
            <option value="beach">Beaches</option>
            <option value="bird">Birds</option>
            <option value="food">Food</option>
        </select>
    );
}; 