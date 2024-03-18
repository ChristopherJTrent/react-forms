import { useState } from "react"


const Form = () => {
    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState([])
    
    const validate = () => {
        const errs = []
        for (const [fieldName, value] of Object.entries(formData)) {
            switch (fieldName)  {
                case 'name':
                    if(value.length === 0) {
                        errs.push('name cannot be blank')
                    }
                    break;
                case 'email': {
                    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    if(value.length === 0) {
                        errs.push('email cannot be blank')
                    } else if ( !emailRegex.test(value)){
                        errs.push('email must be properly formatted')
                    }
                    break;
                }
                case 'telephone': {
                    const telRegex = /^\+?1?\(?[0-9]{3}\)?[0-9]{3}-?[0-9]{4}$/
                    if (value && !telRegex.test(value)) {
                        errs.push('Phone number should be properly formatted')
                    }
                    break;
                }
                case 'phoneType': {
                    if(formData.telephone) {
                        if (!(value in ['home', 'work', 'mobile'])) {
                            errs.push('Phone type must be selected')
                        }
                    }
                    break;
                }
                case 'bio':
                    if (value.length > 280) {
                        errs.push('bio should not be larger than 280 characters')
                    }
                    break;
                default:
            }
        }
        return errs
    }
    /**
     * @param {SubmitEvent} evt 
     */
    const handleSubmit = (evt) => {
        evt.preventDefault()
        const errors = validate()
        if (errors.length > 0) {
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
            <input type="text" onChange={handleChange("name")} />
            <input type="text" onChange={handleChange("email")} />
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
        {errors.length > 0 && (<div className="error">
            {errors.map((v, i) => {
                return <p key={i}>{v}</p>
            }) }   
        </div>)}
    </>
}

export default Form