module.exports = {
  apps: [{
    name: 'Aalto-api',
    script: './server.js',
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-191-213-136.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/post-server-key.pem',
      ref: 'origin/master',
      repo: 'git@github.com:TheRealSense/aalto-app-rest-api.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js',
    },
  },
}
