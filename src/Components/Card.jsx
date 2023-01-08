import React from "react";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const Card = ({ pokemon, loading }) => {
  const [showModal, setShowModal] = useState(false);
  const [pokeName, setPokeName] = useState("");
  const [pokeImg, setPokeImg] = useState("");
  const [pokeHeight, setPokeHeight] = useState("");
  const [pokeWeight, setPokeWeight] = useState("");
  //const [searchInput, setSearchInput] = useState("");

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const openPokeInfo = (item) => {
    setPokeName(item.name);
    setPokeImg(item.sprites.front_default);
    setPokeHeight(item.height);
    setPokeWeight(item.weight);
    handleShow();
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <head closeButton>
          <title>{pokeName}</title>
        </head>
        <body className="card">
          <img
            src={pokeImg}
            class="img-fluid img-height"
            alt="Responsive image"
          ></img>
          <p>Height : {pokeHeight}</p>
          <p>Weight : {pokeWeight}</p>
        </body>
      </Modal>

      <div className="card">
        {pokemon.map((item) => {
          return (
            <div className="card">
              <div key={item.id} onClick={() => openPokeInfo(item)}>
                <p className="card-id">{item.id}</p>
                <img src={item.sprites.front_default}></img>
                <div className="card-body">
                  <h5 className="card-title poke-name">{item.name}</h5>
                </div>
              </div>
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
