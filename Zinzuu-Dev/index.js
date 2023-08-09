import render from "./src/index";

exports.get = async function(event) {
    return {
        statusCode: 200,
        headers: {
          "Content-Type": "text/html",
        },
        body: await render(),
      };
  }