const { Component } = require('@serverless/core')

/**
 * Will deploy the serverless component
 */
class Deploy extends Component {
  async default(inputs = {}) {
    const { stage } = inputs
    if (stage === "staging" || stage === "prod") {
      // Will load env-${stage} as environment variables
      require("dotenv").config({ path: `${__dirname}/config/env-${stage}` })
      
      const template = await this.load("@serverless/template", stage)
      return await template({ template: "serverless.yml" })
    } else {
      this.context.log(
        "No environment defined... Choices are staging and prod"
      )
    }
  }
  
  // Remove will allow the stage to be set on the command line
  // run like so: serverless remove --staging=staging
  async remove(inputs = {}) {
    const { stage } = inputs
    if (stage === "staging" || stage === "prod") {
      const template = await this.load("@serverless/template", stage)
      return await template.remove()
    }
  }
}

module.exports = Deploy