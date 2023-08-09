import 'dotenv/config';

export const config = {
  port: process.env.PORT,
  jwt: {
    secretkey: process.env.JWT_SECRET_KEY || 'uAsBw6WxqD',
    expiry: process.env.JWT_EXPIRATION_TIME || '2d',
  },
};
