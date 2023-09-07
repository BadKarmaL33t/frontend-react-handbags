import { string } from "prop-types";

function Button({title}) {
    Button.propTypes = string.isRequired;

    return (
        <button type="button">
            {title}
        </button>
    );
}

export default Button;