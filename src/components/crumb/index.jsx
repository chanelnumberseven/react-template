import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import styles from "./style.module.css";

class crumb extends React.Component {
  getPathnames() {
    let pathname = this.props.location.pathname;
    return pathname.match(/\/[^/]+/g) || [];
  }
  render() {
    let pathnames = this.getPathnames();
    return (
      <Breadcrumb className={styles.wrapper}>
        {pathnames.map((item,index) => {
          return (
            <Breadcrumb.Item key={item}>
              <Link to={pathnames.slice(0,index+1).join('')}>{item.slice(1)}</Link>
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    );
  }
}

export default withRouter(crumb);
