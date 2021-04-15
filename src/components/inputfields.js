

function InputField ({label, type, inputlabel, placeholder, name, onchange, className}){


    return(
        <div>
        <label className={inputlabel}>{label}</label>
        <input type={type} 
        placeholder={placeholder} 
        name={name}
        onChange={onchange}
        className={className} />
        </div>
    )
}

export default InputField;