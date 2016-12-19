import React from 'react';
import {Link} from 'dva/router';
import styles from './HomePage.less';
import {Menu, Icon, Switch} from 'antd';
import MainLayout from '../components/MainLayout/MainLayout';


const SubMenu = Menu.SubMenu;

const HomePage = ({location}) => {

    return (
        <MainLayout location={location}>
            <div className={styles.normal}>
                <h1>基础服务中心－Owl.</h1>
                <hr />
                {/*<ul className={styles.list}>*/}
                {/*<li>Click here to <Link to="/users">用户中心</Link></li>*/}
                {/*<li>Click here to <Link to="/message">消息中心</Link></li>*/}
                {/*</ul>*/}
            </div>
            <div className={styles.list}>
                <Menu
                    theme='light'
                    style={{width: 240}}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <SubMenu key="sub1" title={<span><Icon type="mail"/><span>历史消息</span></span>}>
                        <Menu.Item key="1"><Link to="/message">批发</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/users">用户</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="mail"/><span>消息总量</span></span>}>
                        <Menu.Item key="5">今天</Menu.Item>
                        <Menu.Item key="6">最近7天</Menu.Item>
                        <Menu.Item key="6">最近1月</Menu.Item>
                        <Menu.Item key="6">最近3月</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting"/><span>帮助设置</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        {/*<Menu.Item key="12" className={styles.}>Option 12</Menu.Item>*/}
                    </SubMenu>
                </Menu>
            </div>
        </MainLayout>
    );
}

HomePage.propTypes = {};

export default HomePage;


