import {Layout} from 'antd';

const {Header, Content} = Layout;
import {useState, useEffect} from 'react';
import db from "../lib/db";
import {Row, Button} from 'antd';
import {CreateBoardModal} from "../components/CreateBoardModal";

const Admin = () => {
    const [boards, setBoards] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        db.firestore()
            .collection('boards')
            .onSnapshot(snap => {
                const boards = snap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setBoards(boards);
            });
    }, []);


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCreateBoard = async (values) => {
        const res = await db.firestore().collection('boards')
            .add({
                title: values.title,
                description: values.description,
            })
        console.log("RES", res);
    };
    return (
        <Layout>
            <Header></Header>
            <CreateBoardModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible}
                              handleCreateBoard={handleCreateBoard}/>
            <Content>
                <Row justify={"center"} align={"center"}>
                    {boards.length === 0 ?
                        <div>
                            <h3>You have no boards yet</h3>
                            <Button onClick={showModal}>Create your first board</Button>
                        </div>

                        : null}

                </Row>
            </Content>
        </Layout>

    )

};

export default Admin;