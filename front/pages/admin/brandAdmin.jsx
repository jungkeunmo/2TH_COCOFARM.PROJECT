import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Input, Form, Button, message } from "antd";
import axios from "axios";

const Whole = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
`;

const Wrapper = styled.div`
  width: calc(50% - 0.5px);
  height: 100%;

  padding: 10px;

  display: flex;
  flex-direction: column;
`;

const Sec = styled.div`
  width: 100%;
`;

const LineBox = styled.div`
  width: 1px;
  height: 100%;
  background-color: #ddd;
`;

const BrandAdmin = () => {
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();

  const [row1, setRow1] = useState(null);
  const [row2, setRow2] = useState(null);

  const getData = async () => {
    const result = await axios.post("http://localhost:4000/api/brand/list");
    setRow1(result.data[0]);
    setRow2(result.data[1]);
  };

  const finishHandler1 = useCallback(async(data) => {
        const result = await axios.post("http://localhost:4000/api/brand/update", {
            id: 1,
            title: data.title,
            content1: data.content1,
            content2: data.content2,
            content3: data.content3,
        });

        if(result.data.result) {
            message.success("브랜드 화면정보가 수정되었습니다.");
            getData();
        };
  });

  const finishHandler2 = useCallback(async(data) => {
    const result = await axios.post("http://localhost:4000/api/brand/update", {
        id: 2,
        title: data.title,
        content1: data.content1,
        content2: data.content2,
        content3: data.content3,
    });

    if(result.data.result) {
        message.success("브랜드 화면정보가 수정되었습니다.");
        getData();
    };
});

  useEffect(() => {
    if (row1 && row2) {
      form1.setFieldsValue({
        title: row1.title,
        content1: row1.content1,
        content2: row1.content2,
        content3: row1.content3,
      });

      form2.setFieldsValue({
        title: row2.title,
        content1: row2.content1,
        content2: row2.content2,
        content3: row2.content3,
      });
    }
  }, [row1, row2]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Whole>
      <Wrapper>
        <Form form={form1} onFinish={finishHandler1}>
          <Sec></Sec>
          <Sec>
            <Form.Item name="title">
              <Input placeholder="title" />
            </Form.Item>
            <br />

            <Form.Item name="content1">
              <Input placeholder="content" />
            </Form.Item>

            <Form.Item name="content2">
              <Input placeholder="content" />
            </Form.Item>

            <Form.Item name="content3">
              <Input placeholder="content" />
            </Form.Item>

            <Button type="primary" htmlType="submit" style={{ float: "right" }}>
              저장
            </Button>
          </Sec>
        </Form>
      </Wrapper>
      <LineBox />
      <Wrapper>
        <Form form={form2} onFinish={finishHandler2}>
          <Sec></Sec>
          <Sec>
            <Form.Item name="title">
              <Input placeholder="title" />
            </Form.Item>
            <br />

            <Form.Item name="content1">
              <Input placeholder="content" />
            </Form.Item>

            <Form.Item name="content2">
              <Input placeholder="content" />
            </Form.Item>

            <Form.Item name="content3">
              <Input placeholder="content" />
            </Form.Item>

            <Button type="primary" htmlType="submit" style={{ float: "right" }}>
              저장
            </Button>
          </Sec>
        </Form>
      </Wrapper>
    </Whole>
  );
};

export default BrandAdmin;