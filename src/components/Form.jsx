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
    const handleChange = (key) => (evt) => {}
    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} />
            <input type="email" onChange={handleChange} />
            <input type="tel" onChange={handleChange} />
            {/*select element containing the 3 phone types*/}
            <select onChange={handleChange}>
                <option value=""></option>
            </select>
            <input type="radio" name="" />
            <textarea onChange={handleChange} cols="30" rows="10"></textarea>
            <input type="checkbox" onChange={handleChange}/>
            <button type="submit"></button>
        </form>
    </>
}

export default Form