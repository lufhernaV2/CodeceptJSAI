const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: false
    }
  },
  include: {
    I: './steps_file.js',
    shoppingForItemsPage: "./pages/ShoppingForItems.js",
  },
  plugins: {
    customLocator: {
      enabled: true,
      attribute: 'data-test'
    },
    heal: {
      enabled: true
    }
  },
  ai: {
    request: async (messages) => {
      const OpenAI = require('openai');
      const openai = new OpenAI({apiKey: process.env['OPENAI_API_KEY']})
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo-0125',
        messages,
      });
      return response?.data?.choices[0]?.message?.content;
    }
  },
  // ai: {
  //   request: async(messages) => {
  //     const ai = require('openai');
  //     return ai.send(messages);
  //   }
  // },
  name: 'CodeceptPlaywright'
}