import React, {PropTypes} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'dva/router';
import styles from './Header.less';

function getMenuKeyFromUrl(pathname) {
    let key = '';
    try {
        key = pathname.match(/\/([^\/]*)/i)[1];
        /* eslint no-empty:0 */
    } catch (e) {
    }
    return key;
}

function Header({location}) {
    return (
        <Menu
            selectedKeys={[getMenuKeyFromUrl(location.pathname)]}
            mode="horizontal"
            theme="dark"
        >
            {/*<Menu.Item key="users">*/}
            {/*<Link to="/users"><Icon type="bars" />Users</Link>*/}
            {/*</Menu.Item>*/}
            {/*<Menu.Item key="message">*/}
            {/*<Link to="/message"><Icon type="bars" />Message</Link>*/}
            {/*</Menu.Item>*/}
            <Menu.Item key="home">
                <Link to="/"><Icon type="home"/>Home</Link>
            </Menu.Item>
            <Menu.Item key="404">
                <Link to="/page-you-dont-know"><Icon type="frown-circle"/>404</Link>
            </Menu.Item>
            <Menu.Item key="youzan">
                <a href="https://www.youzan.com/" target="_blank"><Icon type="like-o"/>有赞</a>
            </Menu.Item>
            <Menu.Item key="version">
                <div className={styles.head}>
                    <a href="http://doc.qima-inc.com/display/engineer/Owl" target="_blank"><Icon type="pushpin-o"/>Owl-V1.0</a>
                </div>
            </Menu.Item>
        </Menu>
    );
}

Header.propTypes = {
    location: PropTypes.object,
};

export default Header;
