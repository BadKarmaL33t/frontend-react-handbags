import { string } from "prop-types";

function Tile({img, imgDescription, title, children}) {
    Tile.propTypes = string.isRequired;

    return (
        <section>
            {img && <img src={img} alt={imgDescription}/>}
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Tile;