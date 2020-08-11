import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import {
    AppstoreOutlined,
    PieChartOutlined,
    MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

export default class Side extends React.Component {
    constructor(props){
        super(props);
        this.state={
            collapsed: false,
            defaultKey:[],
            defaultGroup:[]
        };
        this.setConfig(this.state)
    }
    setConfig(state){
        let path=window.location.pathname;
        let paths=path.match(/\/[^/]+/g);
        state.defaultKey=paths;
        console.log(paths)
    }
    toggleCollapsed(){
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        const state=this.state;
        return (
            <Menu
                defaultSelectedKeys={state.defaultKey}
                defaultOpenKeys={state.defaultKey}
                mode="inline"
                theme="dark"
            >
                <Menu.Item key="/a" icon={<PieChartOutlined />}>
                    <Link to="/a">a</Link>
                </Menu.Item>
                <SubMenu key="/d" icon={<MailOutlined />} title="d">
                    <Menu.Item key="/d-a">d-a</Menu.Item>
                    <Menu.Item key="/d-b">d-b</Menu.Item>
                    <Menu.Item key="/d-c">d-c</Menu.Item>
                    <Menu.Item key="/d-d">d-d</Menu.Item>
                </SubMenu>
                <SubMenu key="/e" icon={<AppstoreOutlined />} title="e">
                    <Menu.Item key="/e-a">e-a</Menu.Item>
                    <Menu.Item key="/e-b">e-b</Menu.Item>
                    <SubMenu key="/e-c" title="e-c">
                        <Menu.Item key="/e-c-a">e-c-a</Menu.Item>
                        <Menu.Item key="/e-c-b">e-c-b</Menu.Item>
                    </SubMenu>
                </SubMenu>
            </Menu>
        );
    }
}