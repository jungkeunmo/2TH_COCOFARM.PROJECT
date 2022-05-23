import React from "react";
import styled from "styled-components";
import {Form, Input, Button, message } from "antd";
import axios from "axios";

const Wrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;

    margin: 50px 0px;
`;

const ViewImage = styled.img`
    width: 40%;
    height: 600px;

    object-fit: cover;

    border-radius: 8px;

    box-shadow: 3px 3px 3px #999;
`;

const FormWrapper = styled.div`
    width: 40%;
    height: 600px;

    border-radius: 8px;
    box-shadow: 3px 3px 3px #999;

    padding: 10px;
`;

const Contact = () => {
    const [contactForm] = Form.useForm();

    const finishHandler = async(formData) => {
        const result = await axios.post("http://localhost:4000/api/contact/new", formData)
        
        if(result.data.result){
            message.success("정상적으로 문의가 등록되었습니다.")
        } else {
            message.success("문의등록이 불가능합니다. 코코팜으로 전화 부탁드립니다.")
        }

        contactForm.resetFields();
    };

    return <Wrapper>
            <ViewImage 
                src={`https://image.edaily.co.kr/images/Photo/files/NP/S/2020/01/PS20011500928.jpg`}
            />
            <FormWrapper>
                <Form
                    form={contactForm}
                    wrapperCol={{ span: 20}}
                    labelCol= {{ span : 4 }}
                    onFinish={finishHandler}
                >
                    <Form.Item 
                        label="고객명"
                        name="name"
                        rules={[{ required: true , message: "고객명은 필수입니다."}]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="금액"
                        name="price"
                        rules={[{ required: true , message: "금액은 필수입니다."}]}
                    >
                        <Input type="number"/>
                    </Form.Item>

                    <Form.Item
                        label="연락처"
                        name="mobile"
                        rules={[{ required: true , message: "연락처는 필수입니다."}]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="문의내용"
                        name="content"
                        rules={[{ required: true , message: "문의내용 필수입니다."}]}
                    >
                        <Input />
                    </Form.Item>

                    <Button type="primary" htmlType="submit">문의하기</Button>
                </Form>
            </FormWrapper>
        </Wrapper >;
}

export default Contact;