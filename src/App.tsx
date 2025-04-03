"use client";

import { useState } from "react";
import {
  Layout,
  Menu,
  Input,
  Badge,
  Carousel,
  Card,
  Modal,
  Button,
} from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

// 📌 Бүтээгдэхүүний төрлийг тодорхойлох
type Product = {
  title: string;
  image: string;
  price: string;
  description: string;
};

const categories = [
  "Компьютер",
  "Гоо сайхан",
  "Цахилгаан бараа",
  "Хувцас",
  "Гэр ахуй",
];

const products: Product[] = [
  {
    title: "Hoodie Essentials",
    image: "Hoodie.jpg",
    price: "₮120,000",
    description: "Энэхүү Hoodies нь маш зөөлөн, дулаахан материалтай.",
  },
  {
    title: "Nike Sneakers",
    image: "Nike.jpg",
    price: "₮250,000",
    description: "Nike брэндийн спорт гутал, маш хөнгөн бөгөөд загварлаг.",
  },
  {
    title: "Smart Watch",
    image: "SmartWatch.jpg",
    price: "₮300,000",
    description: "Ухаалаг цаг - зүрхний цохилт хэмжигч, усны хамгаалалттай.",
  },
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const showModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      console.log(`${selectedProduct.title} сагсанд нэмэгдлээ!`);
    }
  };

  const handleOrder = () => {
    if (selectedProduct) {
      console.log(`${selectedProduct.title} захиалсан!`);
    }
  };

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#002140",
        }}
      >
        <div style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>
          Rio.mn
        </div>
        <Input
          placeholder="Хайх..."
          prefix={<SearchOutlined />}
          style={{ width: 300 }}
        />
        <div>
          <Badge count={0} showZero>
            <ShoppingCartOutlined
              style={{ fontSize: "24px", color: "white", marginRight: "15px" }}
            />
          </Badge>
          <UserOutlined style={{ fontSize: "24px", color: "white" }} />
        </div>
      </Header>

      <Menu mode="horizontal" theme="dark" style={{ justifyContent: "center" }}>
        {categories.map((cat, index) => (
          <Menu.Item key={index}>{cat}</Menu.Item>
        ))}
      </Menu>

      <Content style={{ padding: "20px" }}>
        <Carousel autoplay>
          <div>
            <img
              src="shop.jpg"
              alt="banner1"
              style={{ width: "100%", maxHeight: "700px", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="image.jpg"
              alt="banner2"
              style={{ width: "100%", maxHeight: "700px", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="Cart.jpg"
              alt="banner3"
              style={{ width: "100%", maxHeight: "700px", objectFit: "cover" }}
            />
          </div>
        </Carousel>

        <h2>Онцлох бараанууд</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          {products.map((product, index) => (
            <Card
              key={index}
              hoverable
              onClick={() => showModal(product)}
              cover={
                <img
                  alt={product.title}
                  src={product.image}
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
              }
            >
              <Card.Meta title={product.title} description={product.price} />
            </Card>
          ))}
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        © 2025 Rio.mn - Бүх эрх хуулиар хамгаалагдсан
      </Footer>

      {/* Modal for Selected Product */}
      <Modal
        title={selectedProduct?.title}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="addToCart" type="default" onClick={handleAddToCart}>
            🛒 Сагсанд хийх
          </Button>,
          <Button key="order" type="primary" onClick={handleOrder}>
            🛍️ Захиалах
          </Button>,
          <Button key="back" onClick={handleCancel}>
            ❌ Буцах
          </Button>,
        ]}
      >
        {selectedProduct && (
          <>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
            />
            <p>{selectedProduct.description}</p>
            <p>Үнэ: {selectedProduct.price}</p>
          </>
        )}
      </Modal>
    </Layout>
  );
}
