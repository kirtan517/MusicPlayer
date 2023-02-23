import {
  AntDesignOutlined,
  DownloadOutlined,
  HeartFilled,
  HeartOutlined,
  LikeFilled,
  LikeOutlined,
  PlayCircleFilled,
  PlayCircleOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  ConfigProvider,
  Image,
  Row,
  Skeleton,
  Space,
  Tag,
} from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import Table, { ColumnsType } from "antd/es/table";
import { useState } from "react";
import {
  notificationProvider,
  Layout,
  ErrorComponent,
  theme,
} from "@pankod/refine-antd";
import { Container, Typography, Grid, Paper } from "@material-ui/core";
import TS from "../../images/TS.png";
import "./songComponent.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso, TableComponents } from 'react-virtuoso';


interface Data {
  calories: number;
  carbs: number;
  dessert: string;
  fat: number;
  id: number;
  protein: number;
}

interface ColumnData {
  dataKey: keyof Data;
  label: string;
  numeric?: boolean;
  width: number;
}

type Sample = [string, number, number, number, number];

const sample: readonly Sample[] = [
  ["Frozen yoghurt", 159, 6.0, 24, 4.0],
  ["Ice cream sandwich", 237, 9.0, 37, 4.3],
  ["Eclair", 262, 16.0, 24, 6.0],
  ["Cupcake", 305, 3.7, 67, 4.3],
  ["Gingerbread", 356, 16.0, 49, 3.9],
];

function createData(
  id: number,
  dessert: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): Data {
  return { id, dessert, calories, fat, carbs, protein };
}

const columns: ColumnData[] = [
  {
    width: 200,
    label: "Dessert",
    dataKey: "dessert",
  },
  {
    width: 120,
    label: "Calories\u00A0(g)",
    dataKey: "calories",
    numeric: true,
  },
  {
    width: 120,
    label: "Fat\u00A0(g)",
    dataKey: "fat",
    numeric: true,
  },
  {
    width: 120,
    label: "Carbs\u00A0(g)",
    dataKey: "carbs",
    numeric: true,
  },
  {
    width: 120,
    label: "Protein\u00A0(g)",
    dataKey: "protein",
    numeric: true,
  },
];

const rows: Data[] = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index, ...randomSelection);
});

const VirtuosoTableComponents: TableComponents<Data> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? "right" : "left"}
          style={{ width: column.width }}
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index: number, row: Data) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? "right" : "left"}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

interface DataType {
  key: string;
  writer: string;
  song: string;
  likes: number;
}

const SongComponent = () => {
  const [size, setSize] = useState<SizeType>("large");

  const columns: ColumnsType<DataType> = [
    {
      title: "Artist",
      dataIndex: "writer",
      key: "writer",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Song",
      dataIndex: "song",
      key: "song",
    },
    {
      title: "Likes",
      dataIndex: "likes",
      key: "likes",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.writer}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      writer: "John Brown",
      song: "New York No. 1 Lake Park",
      likes: 32,
    },
    {
      key: "2",
      writer: "Jim Green",
      song: "London No. 1 Lake Park",
      likes: 54,
    },
    {
      key: "3",
      writer: "Joe Black",
      song: "Sydney No. 1 Lake Park",
      likes: 98,
    },
    {
      key: "3",
      writer: "Joe Black",
      song: "Sydney No. 1 Lake Park",
      likes: 98,
    },
    {
      key: "3",
      writer: "Joe Black",
      song: "Sydney No. 1 Lake Park",
      likes: 98,
    },
    {
      key: "3",
      writer: "Joe Black",
      song: "Sydney No. 1 Lake Park",
      likes: 98,
    },
    {
      key: "3",
      writer: "Joe Black",
      song: "Sydney No. 1 Lake Park",
      likes: 98,
    },
    {
      key: "3",
      writer: "Joe Black",
      song: "Sydney No. 1 Lake Park",
      likes: 98,
    },
    {
      key: "3",
      writer: "Joe Black",
      song: "Sydney No. 1 Lake Park",
      likes: 98,
    },
    {
      key: "3",
      writer: "Joe Black",
      song: "Sydney No. 1 Lake Park",
      likes: 98,
    },
    {
      key: "3",
      writer: "Joe Black",
      song: "Sydney No. 1 Lake Park",
      likes: 98,
    },
    {
      key: "3",
      writer: "Joe Black",
      song: "Sydney No. 1 Lake Park",
      likes: 98,
    },
    {
      key: "3",
      writer: "Joe Black",
      song: "Sydney No. 1 Lake Park",
      likes: 98,
    },
  ];

  const SongDescription = (
    <Container
      component="main"
      maxWidth="xl"
      style={{
        background: "rgba(0, 0, 0, 0.0)",
        boxShadow: "0 0px 30px rgba(0, 0, 0, 0.1)",
        // backdropFilter: "blur(7.6px)",
        // WebkitBackdropFilter: "blur(11.6px)",
        borderTop: "1px solid rgba(0, 0, 0, 0.39)",
        padding: "0",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          style={{ padding: "0px 0px", margin: "0px 0px" }}
        >
          <Space size="large" style={{ padding: "1em" }}>
            <Button
              type="primary"
              shape="circle"
              block={true}
              icon={<PlayCircleFilled style={{ fontSize: "inherit" }} />}
              size={size}
              ghost={true}
              style={{
                margin: "0px 10px",
                fontSize: "3em",
                width: "fit-content",
                height: "fit-content",
                border: "rgba(0,0,0, 0.0)",
                borderRadius: "50%",
              }}
            />

            <Button
              type="primary"
              shape="circle"
              icon={<HeartFilled />}
              size={size}
              ghost={true}
              style={{
                margin: 0,
                fontSize: "3em",
                width: "fit-content",
                height: "fit-content",
                border: "rgba(0,0,0, 0.0)",
                borderRadius: "50%",
              }}
            />
            {false && (
              <Button
                type="primary"
                shape="circle"
                icon={<HeartOutlined style={{ fontSize: "inherit" }} />}
                size={size}
              />
            )}
            <Button
              type="primary"
              shape="round"
              icon={<LikeFilled style={{ fontSize: "inherit" }} />}
              size={size}
              ghost={true}
              style={{
                margin: 0,
                fontSize: "2.5em",
                width: "fit-content",
                height: "fit-content",
                border: "rgba(0,0,0, 0.0)",
                borderRadius: "50%",
              }}
            ></Button>
          </Space>
        </Grid>
        <Grid item xl={12} xs={12} style={{ display: "flex" }}>
          <Avatar
            size={{ xs: 24, sm: 24, md: 32, lg: 40, xl: 64, xxl: 80 }}
            icon={<AntDesignOutlined />}
            src={TS}
            style={{ margin: "10px 20px" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <Typography
              variant="subtitle2"
              style={{ position: "relative", top: "5px", zIndex: "1rem" }}
            >
              Artist
            </Typography>
            <Typography variant="subtitle1" style={{ fontWeight: "bolder" }}>
              Taylor Swift
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Container
        component="main"
        style={{
          backgroundImage: "linear-gradient(to bottom, #8dc6ff, #000000 90%)",
          margin: "0",
          height: "40%",
          zIndex: "-1px",
          padding: "30px 30px",
          display: "flex",
        }}
        maxWidth="xl"
      >
        <Image
          width={200}
          height={200}
          src={TS}
          preview={false}
          style={{
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
            borderRadius: "12px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            fontWeight: "bold",
            padding: "10px 20px",
            height: "200px",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            style={{ position: "relative", top: "15px", zIndex: "1rem" }}
          >
            Song
          </Typography>
          <Typography
            variant="h1"
            className="nameOfSong"
            style={{ zIndex: "-1rem", fontWeight: "bolder" }}
          >
            Anti Hero
          </Typography>
        </div>
      </Container>
      <Container
        style={{
          zIndex: "1px",
          position: "relative",
          margin: "-130px 0px",
          padding: "0px 0px",
          width: "100%",
          backgroundImage: "linear-gradient(to bottom,#22313f , #000000 30%)",
          height: "85%",
          backdropFilter: "blur(7.6px)",
          WebkitBackdropFilter: "blur(11.6px)",
        }}
        maxWidth="xl"
      >
        {SongDescription}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            fontWeight: "bold",
            padding: "0px 20px",
            margin: "10px 10px",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            style={{
              position: "relative",
              top: "5px",
              zIndex: "1rem",
              fontWeight: "lighter",
            }}
          >
            Popular songs By
          </Typography>
          <Typography
            variant="h4"
            className="nameOfSong"
            style={{ zIndex: "-1rem", fontWeight: "bold" }}
          >
            Tyalor Swift
          </Typography>
        </div>

        <Paper style={{ height: 400, width: "100%" }}>
          <TableVirtuoso
            data={rows}
            components={VirtuosoTableComponents}
            fixedHeaderContent={fixedHeaderContent}
            itemContent={rowContent}
          />
        </Paper>
      </Container>
    </ConfigProvider>
  );
};

export default SongComponent;
