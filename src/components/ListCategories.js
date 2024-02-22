import React, { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCoffee,
  faCheese,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ namaa }) => {
  if (namaa === "Makanan")
    return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
  if (namaa === "Minuman")
    return <FontAwesomeIcon icon={faCoffee} className="mr-2" />;
  if (namaa === "Cemilan")
    return <FontAwesomeIcon icon={faCheese} className="mr-2" />;

  return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
};

export default class ListCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "categories")
      .then((res) => {
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  }
  render() {
    const { categories } = this.state;
    const { changeCategory, categoryYangDipilih } = this.props;
    return (
      <Col md={2} mt="2">
        <h4>
          <strong>Daftar Kategori</strong>
          <hr />
        </h4>
        <ListGroup>
          {categories &&
            categories.map((category) => (
              <ListGroup.Item
                key={category.id}
                onClick={() => changeCategory(category.namaa)}
                className={`${
                  categoryYangDipilih === category.namaa ? "category-aktif" : ""
                }`}
                style={{ cursor: "pointer" }}
              >
                <h5>
                  <Icon namaa={category.namaa} />
                  {category.namaa}
                </h5>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Col>
    );
  }
}
