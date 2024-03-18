import { useState } from "react"


const Form = (props) => {
    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState([])
    
    const validate = () => {
        return []
    }
    /**
     * @param {SubmitEvent} evt 
     */
    const handleSubmit = (evt) => {
        evt.preventDefault()
        const errors = validate()
        if (errors) {
            setErrors(errors);
        } else {
            setErrors([])
            console.log(formData)
        }
    }
    /**
     * @param {String} key 
     * @returns {(evt: import("react").ChangeEvent) => undefined}
     */
    const handleChange = (key) => (evt) => {
        setFormData((old) => ({...old, [key] : evt.target.value}))
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange("username")} />
            <input type="email" onChange={handleChange("email")} />
            <input type="tel" onChange={handleChange("telephone")} />
            {/*select element containing the 3 phone types*/}
            <select onChange={handleChange("phoneType")}>
                <option value="home">Home</option>
                <option value="work">Work</option>
                <option value="mobile">Mobile</option>
            </select>
            <input type="radio" name="" />
            <textarea onChange={handleChange("bio")} cols="30" rows="10"></textarea>
            <input type="checkbox" onChange={handleChange("acceptNewsLetter")}/>
            <button type="submit">Submit</button>
        </form>
    </>
}

export default Form