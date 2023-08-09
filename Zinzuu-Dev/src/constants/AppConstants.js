// export const API_BASE_URL = "http://localhost:3000/";
export const API_BASE_URL =
  "https://0ntarfp8jl.execute-api.us-east-2.amazonaws.com/dev/";

export const CUSTOMER = {
  REGISTER_CUSTOMER: "customer/register",
  LOGIN_CUSTOMER: "auth/login",
  GET_CUSTOMER: "customer/get",
  UPDATE_CUSTOMER: "customer/update",
  RESET_PASSWORD: "auth/reset-password",
};

export const RECEIPT = {
  UPLOAD_RECEIPT: "receipts/upload",
};

export const PRODUCT = {
  ADD_PRODUCTS: "products/add",
  UPLOAD_PRODUCTS_CSV: "products/upload-products",
  GET_PRODUCTS_LIST: "products/get-products",
};

export const QR = {
  GENERATE_QR: "qr/add",
  GET_QR_LIST: "qr/get",
  GET_QR_DETAIL_BY_ID: "qr/track/",
};

export const TEMPLATES = {
  GENERATE_TEMPLATE: "templates/generate",
  GET_TEMPLATES: "templates/get-templates/all",
  GET_TEMPLATE_BY_ID: "templates/get-template/",
  UPDATE_TEMPLATE: "templates/update/",
  DELETE_TEMPLATE: "templates/delete-template/",
  TRACK_TEMPLATE: "templates/track",
};

export const LOGS = {
  SMS_LOG: "logs/sms-logs",
  EMAIL_LOG: "logs/email-logs",
};

export const API_BASE_URL_SMS =
  "https://3zabz6uv30.execute-api.us-east-2.amazonaws.com";

export const SEND_SMS = "/zinzuu-dev-api/zinzuu-sms-generator";

export const API_BASE_URL_EMAIL =
  "https://xqhsqnw73i.execute-api.us-east-2.amazonaws.com";

export const SEND_EMAIL = "/zinzuu-dev-api/zinzuu-email-generator";

export const CRYPTO_SECRET_KEY = "keysecret123";

export const IMAGE_BUCKET_URL =
  "https://zinzuu-text-ract.s3.us-east-2.amazonaws.com/";

export const API_PARTNER = "https://api-dev.zinzuu.com/";
