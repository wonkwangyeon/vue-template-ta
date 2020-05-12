module.exports = {
    /**
     * Add your own Prompt questions here!
     */
    prompts: {
      name: {
        type: 'string', // Question type
        required: true, // Is question Required
        message: 'Project name' // Question it's self
      },
      description: {
        type: 'string',
        required: false,
        message: '',
        default: 'My Awesome Project'
      },
      author: {
        type: 'string',
        message: 'Author'
      },
      moment: {
          when: 'isNotTest',
          type: 'confirm',
          message : 'Install vue-moment?'
      }
    },
  
    /**
     * You can add a custom complete message
     */
    completeMessage: 'Project Complete!'
  };