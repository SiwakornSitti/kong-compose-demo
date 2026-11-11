module.exports = [
  {
    name: "local-kong",
    type: "key_auth",
    kong_admin_url: "http://kong:8001",
    kong_api_key: "",
    health_checks: false,
  },
];
