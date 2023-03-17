import { useState } from "react";
import axios from "axios";

export default function Home() {
  // Estados para el formulario
  const [nftName, setNftName] = useState("");
  const [nftDescription, setNftDescription] = useState("");
  const [nftImage, setNftImage] = useState("");

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Crear objeto con datos del NFT
    const nftData = {
      name: nftName,
      description: nftDescription,
      image: nftImage,
    };
    // Enviar datos al servidor
    try {
      const response = await axios.post("/api/mint-nft", nftData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Mintear NFTs</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nftName">Nombre:</label>
        <input
          type="text"
          id="nftName"
          value={nftName}
          onChange={(e) => setNftName(e.target.value)}
        />
        <label htmlFor="nftDescription">Descripción:</label>
        <textarea
          id="nftDescription"
          value={nftDescription}
          onChange={(e) => setNftDescription(e.target.value)}
        />
        <label htmlFor="nftImage">Imagen:</label>
        <input
          type="text"
          id="nftImage"
          value={nftImage}
          onChange={(e) => setNftImage(e.target.value)}
        />
        <button type="submit">Mintear NFT</button>
      </form>
    </div>
  );
}
