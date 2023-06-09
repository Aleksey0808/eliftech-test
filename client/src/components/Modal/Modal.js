import {
  ModalContainer,
  ModelContent,
  ModalHeader,
  ModelTitle,
  ModalBody,
  ModalBottom,
  TotalPrice,
  List,
  Item,
  Icon,
  Info,
} from './Modal.styled';

const Modal = ({ onClose, form }) => {
  return (
    <ModalContainer onClick={onClose}>
      <ModelContent onClick={event => event.stopPropagation()}>
        <div>
        <ModalHeader>
          <ModalBottom onClick={onClose}>
            <Icon />
          </ModalBottom>
        </ModalHeader>

        <ModalBody>
          <ModelTitle>Your shopping cart {form.user}</ModelTitle>
          <List>
            {form.cart.map(({ dish, id, count, price }) => {
              return (
                <Item key={id}>
                  <Info>Product: {dish}</Info>
                  <Info>Count: {count}</Info>
                  <Info>Price: {price}</Info>
                </Item>
              );
            })}
          </List>
            <TotalPrice>Total price: {form.totalPrice}</TotalPrice>
        </ModalBody>
        </div>
      </ModelContent>
    </ModalContainer>
  );
};

export default Modal;
