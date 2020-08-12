import React from "react";
import { Breadcrumb } from "antd";
import styles from './style.module.css'
export default function () {
  return (
    <Breadcrumb className={styles.wrapper}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        Application Center
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Application List
      </Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
  );
}
