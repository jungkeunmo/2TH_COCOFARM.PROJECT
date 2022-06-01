import React from "react";
import styled from "styled-components";
import {Form, Input, Button, message } from "antd";
import axios from "axios";

const Wrapper = styled.div`
    width: 100%;
    height: 110vh;

    display: flex;
    flex-direction: row;
    justify-content:flex-end;
    align-items: center;

    background: #FEF5ED;

    position: relative;

    padding: 0px 200px;
`;

const ViewImage = styled.img`
    width: 30%;
    height: 650px;

    object-fit: cover;

    border-radius: 10px;

    box-shadow: 3px 3px 3px #999;

    position: absolute;

    right: 0px;
    left: 200px;
    top: 160px;
    bottom: 0px;
`;

const FormWrapper = styled.div`
    width: 150vh;
    height: 750px;

    border-radius: 10px;
    box-shadow: 2px 2px 4px #b8b8b8;

    background: #fafafa;

    padding: 10px;
`;

const FormWrapperTitile = styled.p`
    font-size: 30px;
`;

const FormWrapperDesc = styled.p`
    font-size: 20px;
`;

const FormInput = styled(Form.Item)`
    font-size: 20px;
    background-color: red;
`;

const FormTextarea = styled(Form.Item)`
    font-size: 20px;
    background-color: red;
`;

const FormTextareaInput = styled(Input.TextArea)`
    width: 400px;
    height: 400px;
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
                src={`https://i.pinimg.com/474x/3a/f3/4a/3af34a7055b6205fa4b97447fbc6fb06.jpg`}
            />
            <FormWrapper>
                <FormWrapperTitile>COCOFARM</FormWrapperTitile>
                <FormWrapperDesc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae error ad quasi ut beatae laudantium laborum libero itaque sunt dolores architecto nisi repudiandae possimus quam</FormWrapperDesc>
                <Form
                    form={contactForm}
                    wrapperCol={{ span: 20}}
                    labelCol= {{ span : 4 }}
                    onFinish={finishHandler}
                >
                    <FormInput
                        label="고객명"
                        name="name"
                        rules={[{ required: true , message: "고객명은 필수입니다."}]}
                    >
                        <Input placeholder="문의내용"/>
                    </FormInput>

                    <Form.Item
                        label="금액"
                        name="price"
                        rules={[{ required: true , message: "금액은 필수입니다."}]}
                    >
                        <Input type="number" placeholder="문의내용"/>
                    </Form.Item>

                    <Form.Item
                        label="연락처"
                        name="mobile"
                        rules={[{ required: true , message: "연락처는 필수입니다."}]}
                    >
                        <Input placeholder="문의내용"/>
                    </Form.Item>

                    <FormTextarea
                        label="문의내용"
                        name="content"
                        rules={[{ required: true , message: "문의내용 필수입니다."}]}
                    >
                        <FormTextareaInput placeholder="문의내용"/>
                    </FormTextarea>

                    <Button type="primary" htmlType="submit">문의하기</Button>
                </Form>
            </FormWrapper>
        </Wrapper >;
}

export default Contact;