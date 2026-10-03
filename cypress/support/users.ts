export interface UserCredentials {
  username: string;
  password: string;
  checkoutInfo?: {
    firstName: string;
    lastName: string;
    postalCode: string;
  };
}

export const users: Record<string, UserCredentials> = {
  valid: {
    username: 'standard_user',
    password: 'secret_sauce',
    checkoutInfo: {
      firstName: 'Lucas',
      lastName: 'Nascimento',
      postalCode: '90020'
    }
  },
  invalid: {
    username: 'invalid_user',
    password: 'invalid_password'
  },
  lockedOut: {
    username: 'locked_out_user',
    password: 'secret_sauce'
  },
  missingUsername: {
    username: '',
    password: 'secret_sauce'
  },
  missingPassword: {
    username: 'standard_user',
    password: ''
  },
};