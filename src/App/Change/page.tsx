"use client";

import { Layout, Menu, Input, Badge, Carousel, Card } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const categories = [
  "Компьютер",
  "Гоо сайхан",
  "Цахилгаан бараа",
  "Хувцас",
  "Гэр ахуй",
];

const products = [
  {
    title: "Hoodie Essentials",
    image: "/images/Туяа.jpg",
    price: "₮120,000",
  },
  { title: "Nike Sneakers", image: "/images/sneakers.jpg", price: "₮250,000" },
  { title: "Smart Watch", image: "/images/watch.jpg", price: "₮300,000" },
];
export default function landing() {
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
              src="/images/banner1.jpg"
              alt="banner1"
              style={{ width: "100%" }}
            />
          </div>
          <div>
            <img
              src="/images/banner2.jpg"
              alt="banner2"
              style={{ width: "100%" }}
            />
          </div>
        </Carousel>

        <h2>Онцлох бараанууд</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          {products.map((product, index) => (
            <Card
              key={index}
              hoverable
              cover={<img alt={product.title} src={product.image} />}
            >
              <Card.Meta title={product.title} description={product.price} />
            </Card>
          ))}
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        © 2025 Rio.mn - Бүх эрх хуулиар хамгаалагдсан
      </Footer>
    </Layout>
  );
}
