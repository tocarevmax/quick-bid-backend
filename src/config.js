export const facebook = {
  clientID: process.env.facebook_clientID,
  clientSecret: process.env.facebook_clientSecret,
  callbackURL: 'https://quick-bid.herokuapp.com/auth/facebook/callback',
  profileFields: ['id', 'name', 'displayName', 'picture', 'email'],
};

export const google = {
  clientID: process.env.google_clientID,
  clientSecret: process.env.google_clientSecret,
  callbackURL: 'https://quick-bid.herokuapp.com/auth/google/callback'
};
