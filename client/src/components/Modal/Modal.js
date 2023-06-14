import {
  ModalContainer,
  ModelContent,
  ModalHeader,
  ModelTitle,
  ModalBody,
} from './Modal.styled';

const Modal = ({ onClose, form }) => {
  // console.log(form);

  return (
    <ModalContainer onClick={onClose}>
      <ModelContent onClick={event => event.stopPropagation()}>
        <ModalHeader>
          <button onClick={onClose}>close</button>
          <ModelTitle>Your cart</ModelTitle>
          <ModalBody>
            {form.map(({ user, cart, totalPrice }) => {
              // console.log(cart);
              return (
                <div>
                  <p>{user.name}</p>

                  {cart.map(({ dish, id, count, price }) => {
                    return (
                      <ul>
                        <li key={id}>
                          <p>product: {dish}</p>
                          <p>count: {count}</p>
                          <p>price: {price}</p>
                        </li>
                      </ul>
                    );
                  })}
                  <p>Total price: {totalPrice}</p>
                </div>
              );
            })}
          </ModalBody>
        </ModalHeader>
      </ModelContent>
    </ModalContainer>
  );
};

export default Modal;
