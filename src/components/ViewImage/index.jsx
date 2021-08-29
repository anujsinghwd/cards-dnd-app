import { ImageModal, ModalContent } from "../";

const ViewImage = (props) => {
    return (
        <ImageModal>
            <ModalContent>
                <img src={props.src} style={{
                    maxHeight: '400px',
                    maxWidth: '500px'
                }} />
                <button onClick={() => props.closeImageModal()}>Close</button>
            </ModalContent>
        </ImageModal>
    )
}

export default ViewImage;
