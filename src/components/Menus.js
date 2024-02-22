import React from "react";
import { Card, Col } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

const Menus = ({ menu, masukKeranjang }) => {
  // Fungsi untuk mengambil path gambar berdasarkan kategori
  const getImagePath = (kategori) => {
    switch (kategori) {
      case "Makanan":
        return "assets/images/makanan/";
      case "Minuman":
        return "assets/images/minuman/";
      case "Cemilan":
        return "assets/images/cemilan/";
      default:
        return "";
    }
  };

  // Mendapatkan path gambar berdasarkan kategori menu
  const imagePath = getImagePath(menu.categories.namaa);

  return (
    <Col md={4} xs={6} className="mb-4">
      <Card className="shadow" onClick={() => masukKeranjang(menu)}>
        <Card.Img
          variant="top"
          src={`${imagePath}${menu.gambar}`}
          alt={menu.nama}
        />
        <Card.Body>
          <Card.Title>
            {menu.nama} <strong>({menu.kode})</strong>
          </Card.Title>
          <Card.Text>Rp.{numberWithCommas(menu.harga)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;
