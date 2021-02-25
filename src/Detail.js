import React, {Component} from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Card, Button, Col, Row, Statistic, Progress, Table } from 'antd';

class Detail extends Component{
    render(){
        return(
            <div>
            <a href ='./Main'>  Back </a>
            <Card style={{margin:80, display:'block', marginLeft:'auto', marginRight:'auto', width:800, background:'#f5f5f5', borderRadius:'20px'}} >
                <Row align="middle" >
                    <Col span = {8}><Statistic style={{ marginLeft: 30 }} title = "Consumed" value ={60.5}></Statistic></Col>
                    <Col span = {8}>
                        <Row><Progress style ={{width:500}} type="circle" percent={90} format={percent => `Left ${percent}%`}/></Row>
                        <Row><Statistic style={{ marginLeft: 30 }} title = "Budget" value = {1363}/></Row>
                    </Col>
                    <Col span = {8}> <Statistic style={{ marginLeft: 30 }} title = "Exercise" value = {50}/></Col>
                </Row>
            </Card>

            <Card style={{margin:80, display:'block', marginLeft:'auto', marginRight:'auto', width:800, background:'#f5f5f5', borderRadius:'20px'}}>
            <Table pagination = {false} columns={columnsB} dataSource={dataB} size="small" />
            <Table pagination = {false} columns={columnsL} dataSource={dataL} size="small" />
            <Table pagination = {false} columns={columnsD} dataSource={dataD} size="small" />
            <Table pagination = {false} columns={columnsE} dataSource={dataE} size="small" />
            </Card>

            <Card style={{margin:80, display:'block', marginLeft:'auto', marginRight:'auto', width:800, background:'#f5f5f5', borderRadius:'20px'}}>
                <Row align="middle">
                    <Col span = {4}><Button href='./Add'>+ Breakfast</Button></Col>
                    <Col span = {5}><Button href='./Add'>+ Lunch</Button></Col>
                    <Col span = {5}><Button href='./Add'>+ Dinner</Button></Col>
                    <Col span = {5}><Button href='./Add'>+ Snack</Button></Col>
                    <Col span = {5}><Button href='./Add'>+ Exercise</Button></Col>
                </Row>
            </Card>
            
        </div>
        )
    }
}
export default Detail

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

  const columnsL = [
    {
      title: 'Lunch    ',
      dataIndex: 'picture',
      width: 150
    },
    {
      dataIndex: 'item',
      width: 400
    },
    { 
      dataIndex: 'kcal',
    },
  ];
  const dataL = [
    {
      key: '1',
      picture: 'pic1',
      item:  'McNuggets',
      kcal: 840,
    },
    {
        key: '2',
        picture: 'pic2',
        item:  'Light Mayonnaise',
        kcal: 80,
      }
  ];

  const columnsD = [
    {
      title: 'Dinner   ',
      dataIndex: 'picture',
      width: 150
    },
    {
      dataIndex: 'item',
      width: 400
    },
    { 
      dataIndex: 'kcal',
    },
  ];
  const dataD = [
    {
        key: '1',
        picture: 'pic1',
        item:  'rice',
        kcal: 200,
      }
  ];

  const columnsE = [
    {
      title: 'Extra Meal/ Snack',
      dataIndex: 'picture',
      width: 150
    },
    {
      dataIndex: 'item',
      width: 400
    },
    {
      dataIndex: 'kcal',
    },
  ];
  const dataE = [
    {
        key: '1',
        picture: 'pic1',
        item:  'Yogurt (Nonfat)',
        kcal: 48,
      }
  ];