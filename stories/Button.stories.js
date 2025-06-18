import Vue from 'vue'

export default {
  title: 'Button/Button',
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    label: { control: 'text' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<button :style="{ backgroundColor }" :class="size">{{ label }}</button>',
});

const AnimatedTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div style="padding: 20px;">
      <button class="button">
        <span class="button-inner mouse-target">
          <span class="button-fill"></span>
          <span class="button-caption">{{ label }}</span>
        </span>
      </button>
    </div>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  backgroundColor: '#ff0000',
  size: 'medium',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  backgroundColor: '#00ff00',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  backgroundColor: '#0000ff',
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  backgroundColor: '#ff00ff',
  size: 'small',
};

export const Animated = AnimatedTemplate.bind({});
Animated.args = {
  label: 'View More',
};

Animated.parameters = {
  docs: {
    description: {
      story: `
アニメーション効果のあるボタンです。
ホバー時に左から右へフィルが広がり、テキストの色が白に変わります。

\`\`\`vue
<template>
  <button class="button">
    <span class="button-inner mouse-target">
      <span class="button-fill"></span>
      <span class="button-caption">View More</span>
    </span>
  </button>
</template>
\`\`\`
      `
    }
  }
};
