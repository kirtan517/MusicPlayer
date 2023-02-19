import { DownloadOutlined, HeartFilled, HeartOutlined, LikeOutlined, PlayCircleFilled, PlayCircleOutlined } from "@ant-design/icons";
import { Button, Col, Image, Row, Space, Tag } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import Table, { ColumnsType } from "antd/es/table";
import { useState } from "react";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const SongComponent = () => {
  const [size, setSize] = useState<SizeType>("large");

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  const SongDescription = (
    <>
      <Row>
        <Col span={8} offset={0}>
          <Space wrap>
            <Button type="primary" icon={<PlayCircleFilled/>} size={size} />
            <Button
              type="primary"
              shape="circle"
              icon={<HeartFilled />}
              size={size}
            />
            {false && <Button
              type="primary"
              shape="round"
              icon={<HeartOutlined />}
              size={size}
            />}
            <Button
              type="primary"
              shape="round"
              icon={<LikeOutlined />}
              size={size}
            >
            </Button>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col span={6} offset={6}>
          Login
        </Col>
        <Col span={6} offset={6}>
          Artist Tag
        </Col>
      </Row>
    </>
  );

  return (
    <>
      <Image
        width={100}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      {SongDescription}
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default SongComponent;
