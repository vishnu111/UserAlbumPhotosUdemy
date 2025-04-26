import Button from "./Button";
import { useRemoveAlbumMutation } from "../store";
import { GoTrashcan } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";

function AlbumsListItem({ album }) {

    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album);
    };

    const header = <>
        <Button className="mr-2" loading={results.isLoading} onClick={handleRemoveAlbum}>
            <GoTrashcan/>
        </Button>
        {album.title}
        </>;

    return <ExpandablePanel key={album.id} header={header}>
        List of photos
        </ExpandablePanel>
}

export default AlbumsListItem;