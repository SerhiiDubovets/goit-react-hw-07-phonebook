import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactApi';
import toast from 'react-hot-toast';
import { ReactComponent as DeleteIcon } from 'icons/delete.svg';
import { Item, NameItem, NumberItem, ButtonItem } from './ContactItem.styled';
import Loader from 'components/Loader/Loader';

const ContactItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const del = () =>
    toast.success(`${name} was removed`, {
      icon: '😞',
      duration: 3000,
    });
  if (isDeleting) {
    del();
    return;
  }

  return (
    <Item>
      <NameItem>{name}</NameItem>
      <NumberItem>{number}</NumberItem>
      <ButtonItem
        type="button"
        disabled={isDeleting}
        onClick={() => deleteContact(id)}
      >
        <DeleteIcon
          width="20px"
          height="20px"
          area-aria-label="delete contact"
        />
        {isDeleting && <Loader />}
      </ButtonItem>
    </Item>
  );
};

export default ContactItem;

ContactItem.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
