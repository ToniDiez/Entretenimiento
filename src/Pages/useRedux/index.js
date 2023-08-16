import React from "react";
import { Div,Input,Button } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, updateUser } from "../../redux/Slice";

const Redux = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [localUsers, setLocalUsers] = React.useState(user);

  const handleChange = (e) => {
    setLocalUsers({
      ...localUsers,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    dispatch(updateUser(localUsers));
  };

  return (
    <>
      <h1>Registro</h1>

      <Div>
        <label>Usuario:</label>
        <br/>
        <Input
          placeholder="UserName"
          name="username"
          value={localUsers.username}
          onChange={handleChange}
        />
        <br/>
        <label>Contraseña:</label>
        <br/>
        <Input
        placeholder="Password"
          name="password"
          value={localUsers.password}
          onChange={handleChange}
        />
        <br/>
        <Button onClick={handleUpdate}>Actualizar Usuarios</Button>
      </Div>
    </>
  );
};

export default Redux;
