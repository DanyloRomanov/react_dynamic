import React from "react";

export default function Form1() {
    const [state, setState] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFunny: true,
        employment: "",
        favColor:""
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setState(curr => {
            return {
                ...curr,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        // submitToApi(state);
        console.log(state)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={state.firstName} />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={state.lastName} />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={state.email} />
            <textarea
                placeholder="comments go here:"
                onChange={handleChange}
                name="comments"
                value={state.comments} />
            <input
                type="checkbox"
                id="ourInput"
                name="isFunny"
                checked={state.isFunny}
                onChange={handleChange} />
            <label htmlFor="ourInput">Are you funny?</label>
            <br />
            <fieldset>
                <legend>Current employment status</legend>
                <input type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={state.employment === "unemployed"}
                    onChange={handleChange} />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                <input type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={state.employment === "part-time"}
                    onChange={handleChange} />
                <label htmlFor="part-time">Part-time</label>
                <br />
                <input type="radio"
                    id="Full-time"
                    name="employment"
                    value="Full-time"
                    checked={state.employment === "Full-time"}
                    onChange={handleChange} />
                <label htmlFor="Full-time">Full-time</label>
                <br />
            </fieldset>
            <br/>
            <label htmlFor="favColor">Please select your favorite color </label>
            <br/>
            <select 
            id="favColor"
            name="favColor"
            value={state.favColor}
            onChange={handleChange}>
                <option value="" disabled>-- Choose color --</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="blue">Blue</option>
            </select>
            <br/>
            <br/>
            <button type="submit">Send it</button>
        </form>
    );
}