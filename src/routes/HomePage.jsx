import React from 'react';
import {Link} from 'dva/router';
import styles from './HomePage.less';
import {Menu, Icon, Switch, Carousel, Card} from 'antd';
import MainLayout from '../components/MainLayout/MainLayout';
import ld from '../assets/leduo.jpeg';
import yz from '../assets/logo.png';
import dq from '../assets/党旗.jpg';


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
                <div>
                    <Menu
                        theme='light'
                        style={{width: 240}}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        <SubMenu key="sub1" title={<span><Icon type="search"/><span>历史查询</span></span>}>
                            <Menu.Item key="1"><Link to="/message"><Icon type="message"/>历史消息</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/conversation"><Icon type="team"/>历史会话</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="file"/><span>统计查询</span></span>}>
                            {/*<Menu.Item key="5"><Link to="/amount">消息</Link></Menu.Item>*/}
                            {/*<SubMenu key="sub3" title={<span><Icon type="message"/><span>消息</span></span>}>*/}
                            {/*<Menu.Item key="3"><Link to="/amount">今日消息</Link></Menu.Item>*/}
                            {/*<Menu.Item key="4"><Link to="/amount">最近三天</Link></Menu.Item>*/}
                            {/*</SubMenu>*/}
                            <Menu.Item key="4"><Link to="/amount"><Icon type="message"/>消息</Link></Menu.Item>
                            <Menu.Item key="5"><span><Icon type="mobile"/><span>短信</span></span></Menu.Item>
                            <Menu.Item key="6"><span><Icon type="mail"/><span>邮件</span></span></Menu.Item>
                            <Menu.Item key="7"><span><Icon type="swap"/><span>连接</span></span></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="setting"/><span>帮助设置</span></span>}>
                            <Menu.Item key="9">Option 9</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div className={styles.z}>
                    <Carousel autoplay>
                        <div>
                            <Card style={{width: 240}} bodyStyle={{padding: 0}}>
                                <div className="custom-image">
                                    <img alt="example" width="100%"
                                         src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
                                </div>
                                <div className="custom-card">
                                    {/*<h3>Europe Street beat</h3>*/}
                                    <p>www.youzan.com</p>
                                </div>
                            </Card>
                        </div>
                        <div>
                            <Card style={{width: 240}} bodyStyle={{padding: 0}}>
                                <div className="ld-image">
                                    <img alt="example" width="100%" src={ld}/>
                                </div>
                                <div className="custom-card">
                                    {/*<h3>Europe Street beat</h3>*/}
                                    <p>www.youzan.com</p>
                                </div>
                            </Card>
                        </div>
                        <div>
                            <Card style={{width: 240}} bodyStyle={{padding: 0}}>
                                <div className="yz">
                                    <img alt="example" width="100%" src={yz}/>
                                </div>
                                <div className="custom-card">
                                    {/*<h3>Europe Street beat</h3>*/}
                                    <p>www.youzan.com</p>
                                </div>
                            </Card>
                        </div>
                        <div>
                            <Card style={{width: 240}} bodyStyle={{padding: 0}}>
                                <div className="dq">
                                    <img alt="example" width="100%" src={dq}/>
                                </div>
                                <div className="custom-card">
                                    {/*<h3>Europe Street beat</h3>*/}
                                    <p>www.youzan.com</p>
                                </div>
                            </Card>
                        </div>
                    </Carousel>
                </div>
            </div>
        </
            MainLayout >
    )
        ;
}

HomePage.propTypes = {};

export default HomePage;


