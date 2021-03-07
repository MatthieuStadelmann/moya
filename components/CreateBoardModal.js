import {Button, Form, Input, Modal} from "antd";

export const CreateBoardModal = (props) => {

    const {setIsModalVisible, isModalVisible, handleCreateBoard} = props;

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };


    const onFinish = (values) => {
        handleCreateBoard(values)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Modal title="Create your board" footer={[
            <Button form="myForm" key="submit" htmlType="submit">
                Submit
            </Button>
        ]} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form
                id="myForm"
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: 'Title is required',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: 'Description is required',
                        },
                    ]}
                >
                    <Input.TextArea/>
                </Form.Item>
            </Form>

        </Modal>
    )

}