import "./Button.css";

const Button = ({width, onClick, children}) => {
    const widthMap = {
        wide: "btn--wide",
        full: "btn--full",
    };

    const buttonClassNames = `btn ${widthMap[width] || ""}`;

    return (
        <buttoon className={buttonClassNames} onClick={onClick}>
            {children}
        </buttoon>
    );
};

export default Button;


