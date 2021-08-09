export interface ComponentProps {
  children?: string | JSX.Element | JSX.Element[]
}

export interface KartuMenuProps {
  ikon:string,
  judul:string,
  deskipsi:string,
  toggleModal: any,
}

export interface Modals {
  isOpen: boolean,
  closeModal: any,
}