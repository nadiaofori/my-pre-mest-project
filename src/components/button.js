const Button =({text, classname, onclick , style}) => {

    return (
      <button  className={classname} onClick={onclick} style={style}>{text}</button>   
    );
}

export default Button;