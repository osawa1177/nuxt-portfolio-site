import TagFilter from '../components/Article/TagFilter.vue'

export default {
  title: 'Article/TagFilter',
  component: TagFilter,
  argTypes: {
    posts: { control: 'array' },
    value: { control: 'text' }
  }
}

const Template = (args, { argTypes }) => ({
  components: { TagFilter },
  props: Object.keys(argTypes),
  template: '<TagFilter v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {
  posts: [
    {
      title: '記事1',
      tags: ['Vue.js', 'JavaScript']
    },
    {
      title: '記事2',
      tags: ['Nuxt.js', 'Vue.js']
    },
    {
      title: '記事3',
      tags: ['TypeScript', 'JavaScript']
    }
  ],
  value: null
}

export const SelectedTag = Template.bind({})
SelectedTag.args = {
  posts: [
    {
      title: '記事1',
      tags: ['Vue.js', 'JavaScript']
    },
    {
      title: '記事2',
      tags: ['Nuxt.js', 'Vue.js']
    },
    {
      title: '記事3',
      tags: ['TypeScript', 'JavaScript']
    }
  ],
  value: 'Vue.js'
}

