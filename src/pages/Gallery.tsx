import Nav from "../components/Nav";
import GalleryGrid from "../components/GalleryGrid";
import { photos } from "../content/gallery";

export default function Gallery() {
    return (
        <>
            <Nav />
            <main id="main-content">
                <GalleryGrid photos={photos} />
            </main>
        </>
    );
}
