import React from "react";
import { Story, Meta } from "@storybook/react";
import HomePage from "pages/home/home-page";

export default {
    title: "Pages/Home",
    component: HomePage,
    argTypes: {},
} as Meta;

export const Default: Story = (args) => <HomePage {...args} />;
