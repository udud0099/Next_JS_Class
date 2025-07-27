// # ChatInput

// The ChatInput component (`chat-input.tsx`) is used as an text-area with predefined styling to fit well with the other components.

import { ChatInputPreviewCode } from "../../components/preview/chat-input-preview";
import ChatInputPreview from "../../components/preview/chat-input-preview";
import ComponentPreview from "../../components/component-preview";

<ComponentPreview
  component={<ChatInputPreview />}
  code={ChatInputPreviewCode}
/>;

// ## Installation

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

<Tabs className="pt-2" defaultValue="cli">
  <TabsList>
    <TabsTrigger value="cli">CLI</TabsTrigger>
  </TabsList>

  <TabsContent value="cli">
    {/* ```bash copy
npx shadcn-chat-cli@latest add chat-input
``` */}
  </TabsContent>
</Tabs>;

// ## Examples

// ### With buttons

// import { ChatInputExampleCode } from "../../components/preview/chat-input-example";
// import ChatInputExample from "../../components/preview/chat-input-example";

// <ComponentPreview
//   component={<ChatInputExample />}
//   code={ChatInputExampleCode}
// />

// ## API Reference

// ### ChatInput

// | Prop          | Type                  | Default     | Description                                                       |
// | ------------- | --------------------- | ----------- | ----------------------------------------------------------------- |
// | `value`       | `'string'`            | `'null'`    | A string that represents the raw value contained in the control.  |
// | `onKeyDown`   | `'default'` \| `'ai'` | `'default'` | Keyboard event listener.                                          |
// | `onChange`    | `React.ReactNode`     | `null`      | Event handler function that fires when the input's value changes. |
// | `placeHolder` | `string`              | `null`      | Displayed in a dimmed color when the text area value is empty.    |
// | `className`   | `string`              | `null`      | Additional classes to apply to the chat bubble.                   |
