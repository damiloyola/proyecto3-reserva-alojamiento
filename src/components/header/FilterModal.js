import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";

const styles = makeStyles({
    modal: {
        width: "50%",
        margin: "10% auto",
        textAlign: "center",
        padding: "4%",
        backgroundColor: "#3797a4",
        outline: "none",
    },
    text: {
        fontSize: "1.3rem",
        color: "#faf6f4",
        marginBottom: "5%",
    },
    boton: {
        width: "20%",
        padding: "2%",
        borderRadius: "2px",
        border: "0px",
        backgroundColor: "#FFA647",
        color: "#faf6f4",
        fontSize: "1.3rem",
        outline: "none",
    },
});

export default function FilterModal({ handleClose, open }) {
    const style = styles();
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
        >
            <Fade in={open}>
                <div className={style.modal}>
                    <p className={style.text}>
                        Seleccione una fecha de ingreso igual o mayor al dia de
                        hoy
                    </p>
                    <button className={style.boton} onClick={handleClose}>
                        Ok
                    </button>
                </div>
            </Fade>
        </Modal>
    );
}
