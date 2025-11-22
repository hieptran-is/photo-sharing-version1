import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, Divider } from "@mui/material";
import fetchModel from "../../lib/fetchModelData";
import "./styles.css";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchModel("/api/user/list")
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <List component="nav">
      {users.map((user) => (
        <React.Fragment key={user._id}>
          <ListItem button component={Link} to={`/users/${user._id}`}>
            <ListItemText
              primary={`${user.first_name} ${user.last_name}`}
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}

export default UserList;
