export interface UIState {
    modals: {
      [Modals.ASSIGN_JUNIOR_ADMIN]: ModalProps;
      [Modals.CREATE_BRANCH]: ModalProps;
      
    };
    redirectUrl?: string;
  }
  
  export interface ModalProps {
    isOpen: boolean;
    props?: any;
  }
  
  export enum Modals {
    ASSIGN_JUNIOR_ADMIN = "assignJuniorAdmin",
    CREATE_BRANCH = "createBranch",
   
  }
  
  export interface ModalEvent {
    name: Modals;
    props?: any;
  }
  