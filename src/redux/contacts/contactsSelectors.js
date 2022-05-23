export const getContactsList = (state) => {
  return {
    contactList: state.contacts.contactsList,
    isLoading: state.contacts.isLoading,
  };
};

export const getIsAdding = (state) => state.contacts.isAdding;

export const getIsDeleting = (state) => state.contacts.isDeleting;

export const getFilter = (state) => state.contacts.filter;
