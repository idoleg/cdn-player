import React, { useContext, useState } from "react";
import Modal from "react-modal";
import classes from "./HistoryModal.module.scss";
import Link from "../Link/Link";
import HistoryItem from "./HistoryItem";
import { StoreContext } from "../../store";
import { changeVideo } from "../../store/actions";


export default () => {
  const [state, dispatch] = useContext(StoreContext);
  const [isShow, setIsShow] = useState(false);

  const handleOpenModal = () => {
    setIsShow(true);
  };
  const handleCloseModal = () => {
    setIsShow(false);
  };
  const handleChangeVideo = (...args) => {
    dispatch(changeVideo(...args));
    handleCloseModal();
  };

  return (
    <span>
      <Link tag="button" onClick={handleOpenModal}>your history of watching video</Link>
      <Modal
        isOpen={isShow}
        contentLabel="onRequestClose history"
        onRequestClose={handleCloseModal}
        className={classes.HistoryModal}
        overlayClassName={classes.Overlay}
      >
        <header className={classes.Header}>
          <h3>Browsing history</h3>
          <span>Here you can see your 15 last video views. Please note that browsing history is stored locally and is
                not available on other yours devices.</span>
          <button className={classes.CloseHeaderButton} onClick={handleCloseModal}>✕</button>
        </header>
        <main className={classes.HistoryList}>
          {state.history.map((item, index) =>
            <HistoryItem key={index} item={item} changeVideo={handleChangeVideo} />
          )}
        </main>
      </Modal>
    </span>
  );
};
