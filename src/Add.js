import React, {Component} from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Input, Card, Tabs, Table, Row, Col } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

import data from "./data.json";


class Add extends Component{
    render(){
        return(
            <div>
                <a href ='./Detail'>  Back </a>
               <Card style={{margin:80, display:'block', marginLeft:'auto', marginRight:'auto', width:800, background:'#f5f5f5', borderRadius:'20px'}}>
               <div><Search placeholder="input search text" onSearch={onSearch} style={{ width: 750 }} /></div>
               <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Recent add" key="1">

                {/* <Table pagination = {false} columns={columnsB} dataSource={dataB} size="small" /> */}
                    <div>{
                            data.Foods.map( (food,i) => {
                                return (
                                    <Row style = {{padding:10}} key={i}>
                                        <Col span = {8}>{food.picture}</Col>
                                        <Col span = {8}>{food.item}</Col>
                                        <Col span = {8}>{food.kcal}</Col>
                                    </Row>
                                )
                            })
                        }
                    </div>

                </TabPane>
                <TabPane tab="Liked" key="2">
                    You haven't added any liked
                </TabPane>
                </Tabs>
                </Card>
            </div>
        )
    }
}
export default Add;

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const onSearch = value => console.log(value);

const { TabPane } = Tabs;



const columnsB = [
    {
      title: 'Breakfast',
      dataIndex: 'picture',
      width: 150
    },
    {
      dataIndex: 'item',
      width: 400
    },
    { 
      title: '/Kcal',
      dataIndex: 'kcal',
      
    },
  ];
  const dataB = [
    {
      key: '1',
      picture: 'pic1',
      item:  'Banana',
      kcal: 115,
    },
    {
        key: '2',
        picture: 'pic2',
        item:  'Oatmeal',
        kcal: 165,
      }
  ];