import "../styles/croix.scss";

export default function Croix() {
    return (
        <>
            <div
                className="croix-container"
                style={{
                    backgroundImage: "url(" + "/croix-min.jpg" + ")",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="croix-title-container">
                    <h1 className="croix-title croix-title-styles">
                        St. Croix
                    </h1>
                </div>
            </div>
        </>
    );
}