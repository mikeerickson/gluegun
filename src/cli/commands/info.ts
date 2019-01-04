module.exports = {
  name: 'prompty',
  description: 'Get user information',
  flags: {
    age: {
      alias: ['a', 'age'],
      description: 'Supply age',
    },
    shoe: {
      alias: ['s', 'shoe'],
      description: 'What shoes are you wearing',
      choices: ['Clown', 'Adidas', 'Nike'],
      initial: 'Adidas',
    },
  },
  run: async function(toolbox) {
    const { print } = toolbox

    print.info('Welcome to your CLI')
    let choices = this.flags.shoe.choices || ['Other']

    // let choices = this.flags.shoe.choices
    // text input
    const askAge = { type: 'input', name: 'age', message: 'How old are you?' }

    // multiple choice
    const askShoe = {
      type: 'list',
      name: 'shoe',
      message: 'What shoes are you wearing?',
      choices,
    }
    // ask a series of questions
    const questions = [askAge, askShoe]
    const { age, shoe } = await toolbox.prompt.ask(questions)
    console.log(age, shoe)
    console.log('here')
  },
}
