import React, { useState, useEffect } from "react";

import styles from "./ProfileInfo.module.css";

const ProfileStatusHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const activateEditeMode = () => {
    setEditMode(true);
  };
  const deActivateEditeMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const [status, setStatus] = useState(props.status);
  const onChangeStatus = (event) => {
    setStatus(event.currentTarget.value);
  };
  useEffect(() => {
    setStatus(props.status);
    console.log(props.status);
  }, [props.status]);
  return (
    <div className={styles.aboutMe}>
      {!editMode ? (
        <span onDoubleClick={activateEditeMode} className={styles.statusText}>
          {" "}
          {props.status ? props.status : "Fill in the status here ..."}
        </span>
      ) : (
        <input
          onChange={onChangeStatus}
          autoFocus={true}
          onBlur={deActivateEditeMode}
          defaultValue={status}
        />
      )}
    </div>
  );
};

export default ProfileStatusHooks;