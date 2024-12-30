const Tile = ({ icon, text }) => (
    <div className="tile">
        <div className="content">
            <img src={icon} />
            <p className="tile-text">{text}</p>
        </div>
    </div>
)


export default Tile