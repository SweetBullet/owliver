import React from 'react';
import { Link } from 'dva/router';
import styles from './HomePage.less';

function HomePage() {
  return (
    <div className={styles.normal}>
      <h1>基础服务中心.</h1>
      <hr />
      <ul className={styles.list}>
        <li>Click here to <Link to="/users">用户中心</Link></li>
      </ul>
    </div>
  );
}

HomePage.propTypes = {
};

export default HomePage;
