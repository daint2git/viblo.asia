import MyButton from '.'

export default {
  title: 'MyButton',
}

export const withDefault = () => ({
  components: { MyButton },
  template: '<my-button></my-button>',
})

export const withText = () => ({
  components: { MyButton },
  template: '<my-button>with text</my-button>',
})

export const withEmoji = () => ({
  components: { MyButton },
  template: '<my-button>😎</my-button>',
})

export const withColor = () => ({
  components: { MyButton },
  template: `
    <div>
      <my-button color="red">red</my-button>
      <my-button color="green">green</my-button>
      <my-button color="blue">blue</my-button>
    </div>
  `,
})

export const withSize = () => ({
  components: { MyButton },
  template: `
    <div>
      <my-button size="small">small</my-button>
      <my-button size="medium">medium</my-button>
      <my-button size="large">large</my-button>
    </div>
  `,
})
