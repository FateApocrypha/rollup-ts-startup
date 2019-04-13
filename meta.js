module.exports = {
  prompts: {
    name: {
      type: String,
      required: false,
      message: 'Project Name',
      default: 'rollup-library'
    },
    author: {
      type: String,
      message: 'Project Author'
    },
    version: {
      type: String,
      message: 'Project Version',
      default: '0.0.1'
    },
    description: {
      type: String,
      required: false,
      message: 'Project Description',
      default: 'A new rollup project'
    }
  },
  completeMessage:
    'To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev\n\nDocumentation can be found at https://github.com/FateApocrypha/rollup-ts-startup'
}