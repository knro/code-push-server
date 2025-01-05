module.exports = {
  apps: [
    {
      name: "codepush-server",
      script: "./bin/script/server.js",
      interpreter: "node",
      interpreter_args: "-r dotenv/config",
      env: {
        dotenv_config_path: ".env",
        dotenv_config_silent: "true",
        NODE_ENV: "development"
      }
    }
  ]
}
