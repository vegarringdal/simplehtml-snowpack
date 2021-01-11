module.exports = {
    purge: {
      enabled: process.env['BUILDTYPE'] !== 'development',
      content: ['./src_client/**/*.ts'],
    }
  }