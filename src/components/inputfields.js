

function InputField({ label, type, placeholder, name, onchange, className }) {


    return (
        <div>
            <div className="label">
                <label style={{ fontSize: "25px", marginRight:"60px" }}>{label}</label>
            </div>
            <div>
            <input type={type}
                placeholder={placeholder}
                name={name}
                onChange={onchange}
                className={className} />
            </div>
        
        </div>
    )
}

export default InputField;