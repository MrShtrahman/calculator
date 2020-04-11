import {
  Button,
  Divider,
  Form,
  Header,
  Icon,
  Input,
  Message,
  Modal,
} from "semantic-ui-react";
import React, { FC, useState } from "react";
import { batch, useDispatch } from "react-redux";
import { setIsAuth, setName } from "../../../redux/actions/auth";

import LinkButton from "../../../hoc/LinkButton";
import { isValidLoggedUser } from "../Utils";
import { useHistory } from "react-router-dom";

const LoginModal: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isValidUser, setIsValidUser] = useState(true);

  const handleClose = () => {
    history.push("/");
    setIsModalOpen(false);
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    isValidLoggedUser(username, password)
      .then((user) => {
        if (user) {
          batch(() => {
            dispatch(setIsAuth(true));
            dispatch(setName(user.name));
          });
          handleClose();
          setIsValidUser(true);
        } else {
          setIsValidUser(false);
        }
      })
      .catch((err) =>
        console.error("A problem ocurred while confirming logged user: ", err)
      );
  };

  return (
    <Modal
      basic
      trigger={
        <LinkButton to="/login" color="teal" onClick={handleOpen}>
          Login
        </LinkButton>
      }
      size="mini"
      onClose={handleClose}
      open={isModalOpen}
    >
      <Header icon="key" content="Login" />
      <Modal.Content>
        <Form>
          <Form.Field inline>
            <Input
              type="text"
              placeholder="Username"
              icon="user"
              iconPosition="left"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Field>

          <Form.Field inline>
            <Input
              type="password"
              placeholder="Password"
              icon="lock"
              iconPosition="left"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Divider />
      <Message
        hidden={isValidUser}
        error
        header="Access denied"
        content="Username / password given are incorrect, please contact Assaf Aharon for further help"
      />
      <Modal.Actions>
        <Button color="green" inverted onClick={handleConfirm}>
          <Icon name="checkmark" /> Confirm
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default LoginModal;
