import React from "react";
import Modal from "react-bootstrap/Modal";
import { BsFillPlayFill } from "react-icons/bs";

const VideoModal = () => {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/nULID2HXHXY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      {/* Action Btn  */}
      <span className="playbutton" onClick={() => setModalShow(true)}>
        <BsFillPlayFill />
      </span>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default VideoModal;
