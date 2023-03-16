import React, { useEffect, useState } from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { BiSearch } from "react-icons/bi";
import SearchFilter from "react-filter-search";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [theme] = useThemeHook();
  const [inputCari, setInputcari] = useState("");
  const [dataProduct, setDataProduct] = useState([]);

  async function getResponse() {
    const res = await fetch("https://fakestoreapi.com/products").then((res) => res.json());
    setDataProduct(await res);
  }

  useEffect(() => {
    getResponse();
    console.log(dataProduct);
  });

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
          <h1 className={theme ? "text-light my-5" : "text-black my-5"}>Cari Produk</h1>
          <InputGroup className="mb-3">
            <InputGroup.Text className={theme ? "bg-black text-dark-primary" : "bg-light text-area-primary"}>
              <BiSearch size="2rem" />
            </InputGroup.Text>
            <FormControl placeholder="Cari..." value={inputCari} onChange={(e) => setInputcari(e.target.value)} className={theme ? "bg-black text-dark-primary" : "bg-light text-area-primary"} />
          </InputGroup>
        </Col>
        <SearchFilter
          value={inputCari}
          data={dataProduct}
          renderResults={(hasil) => (
            <Row className="justify-content-center">
              {hasil.map((item, i) => (
                <ProductCard data={item} key={i} />
              ))}
            </Row>
          )}
        />
      </Row>
    </Container>
  );
};

export default Home;
