export const testUsers = {
  valid: {
    standard: {
      username: 'standard_user',
      password: 'secret_sauce',
      description: 'Standard user with full access'
    },
    performance: {
      username: 'performance_glitch_user',
      password: 'secret_sauce',
      description: 'User with performance issues'
    }
  },
  invalid: {
    locked: {
      username: 'locked_out_user',
      password: 'secret_sauce',
      expectedError: 'Sorry, this user has been locked out'
    },
    wrongPassword: {
      username: 'standard_user',
      password: 'wrong_password',
      expectedError: 'Username and password do not match'
    },
    nonExistent: {
      username: 'invalid_user',
      password: 'wrong_password',
      expectedError: 'Username and password do not match'
    }
  },
  empty: {
    noUsername: {
      username: '',
      password: 'secret_sauce',
      expectedError: 'Username is required'
    },
    noPassword: {
      username: 'standard_user',
      password: '',
      expectedError: 'Password is required'
    },
    bothEmpty: {
      username: '',
      password: '',
      expectedError: 'Username is required'
    }
  }
};

export const expectedResults = {
  successUrl: /.*inventory.html/,
  appTitle: 'Swag Labs',
  loginUrl: 'https://www.saucedemo.com/'
};