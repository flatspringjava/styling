import React from "react";
import styles from "./CSSModule.module.scss";
import classNames from "classnames/bind";

const CSSModule = () => {
  // active Class이름으로 넣었다가 뺐다 할 수 있음.
  // 속성은 disabled, selected, checked
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrapper", "inverted")}>
      안녕하세요 저는 <span clasName="something">CSS module!</span>
    </div>
  );
};

export default CSSModule;
