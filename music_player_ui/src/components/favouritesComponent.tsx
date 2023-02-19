import { Col, Row } from "antd";
import CardItem from "./cardItem";

const FavouritesComponent = () => {
    return (
        <div style={{margin: "30px"}}>
            <Row gutter={[32, 32]}>
                <Col span={8}>
                    <CardItem></CardItem>
                </Col>
                <Col span={8}>
                    <CardItem></CardItem>
                </Col >
                <Col span={8}>
                    <CardItem></CardItem>
                </Col>
                <Col span={8}>
                    <CardItem></CardItem>
                </Col>
            </Row>
        </div>
    );
}

export default FavouritesComponent;