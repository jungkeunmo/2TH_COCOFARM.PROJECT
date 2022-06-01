import React from "react";
import styled from "styled-components";
import {Form, Button, message } from "antd";
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
    height: 700px;

    object-fit: cover;

    border-radius: 10px;

    box-shadow: 3px 3px 3px #999;

    position: absolute;

    right: 1000px;
    bottom: 150px;
`;

const FormWrapper = styled.div`
    width: 140vh;
    height: 800px;

    border-radius: 10px;
    box-shadow: 2px 2px 4px #b8b8b8;

    background: #fafafa;

    padding: 10px;

    display: flex;
    flex-direction: row;
`;

const FormWrapper__Box1 = styled.div`
   width: 40%;
   height: 100%;
`;

const FormWrapper__Box2 = styled.div`
   width: 60%;
   height: 100%;

   display: flex;
   flex-direction: column;
   align-items: flex-start;

   padding: 80px 30px;
`;

const FormWrapperTitile = styled.p`
    font-size: 23px;
    font-weight: bold;

    margin: 0px 0px 15px;
`;

const FormWrapperDesc = styled.p`
    font-size: 14px;
    width: 550px;

    margin-bottom: 40px;
`;

const FormBoxInput = styled(Form.Item)`
    font-size: 20px;
`;

const FormInput = styled.input`
    width: 500px;
    height: 50px;

    border-radius: 6px;
    border: none;

    font-size: 14px;
    padding: 10px;

    background: #efeded;
`;

const FormTextarea = styled(Form.Item)`
    font-size: 20px;
`;

const FormTextareaInput = styled.textarea`
    width: 500px;
    height: 200px;

    border: none;
    border-radius: 6px;
    outline: none;
    resize: none;

    font-size: 14px;
    padding: 10px;

    background: #efeded;
`;

const FormButton = styled(Button)`
    width: 500px;
    height: 60px;

    border: none;
    border-radius: 100px;
    outline: none;
    
    
    background: #3d4b3d;

    & :hover {
        background: #58775c;
    }
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
            <FormWrapper__Box1></FormWrapper__Box1>
            <FormWrapper__Box2>
                <FormWrapperTitile>COCOFARM</FormWrapperTitile>
                <FormWrapperDesc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae error ad quasi ut beatae laudantium laborum</FormWrapperDesc>
                <Form
                    form={contactForm}
                    wrapperCol={{ span: 20}}
                    labelCol= {{ span : 4 }}
                    onFinish={finishHandler}
                >
                    <FormBoxInput
                        name="name"
                        rules={[{ required: true , message: "고객명은 필수입니다."}]}
                    >
                        <FormInput placeholder="고객명을 작성해주세요..."/>
                    </FormBoxInput>

                    <FormBoxInput
                        name="price"
                        rules={[{ required: true , message: "금액은 필수입니다."}]}
                    >
                        <FormInput type="number" placeholder="금액을 작성해주세요..."/>
                    </FormBoxInput>

                    <FormBoxInput
                        name="mobile"
                        rules={[{ required: true , message: "연락처는 필수입니다."}]}
                    >
                        <FormInput placeholder="연락처를 작성해주세요..."/>
                    </FormBoxInput>

                    <FormTextarea
                        name="content"
                        rules={[{ required: true , message: "문의내용 필수입니다."}]}
                    >
                        <FormTextareaInput placeholder="문의내용을 작성해주세요..."/>
                    </FormTextarea>

                    <FormButton type="primary" htmlType="submit">문의하기</FormButton>
                </Form>
            </FormWrapper__Box2>
            </FormWrapper>
        </Wrapper >;
}

export default Contact;