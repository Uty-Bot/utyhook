import type { SnapshotIn } from "mobx-state-tree"
import type { EditorManager } from "./EditorManager"

export const DEFAULT_EDITOR_MANAGER_STATE: SnapshotIn<typeof EditorManager> = {
  messages: [
    {
      content:
        "Hey, welcome to <:utyhook:73815398081622016> UtyHook! The easiest way to build and send Discord messages with embeds using webhooks.\n\nThe embeds below explain a bit more, but you're not required to read them. If you're ready, click on the \"Clear All\" button in the editor to start making your own messages.\n_ _",
      embeds: [
        {
          title: "What's this?",
          description:
            'UtyHook is a free tool that sends messages with embeds to your Discord server. To do that it uses [webhooks](https://support.discord.com/hc/en-us/articles/228383668), a Discord feature that lets any application send messages to a channel.\n\nTo send messages, you need a webhook URL, you can get one via the "Integrations" tab in your server\'s settings.\n\nNote that UtyHook cannot respond to user interactions, it only sends messages when you tell it to. As such creating an automatic feed or custom commands is not possible with UtyHook.',
          color: {
            hue: 205.14970059880238,
            saturation: 0.6549019607843137,
            value: 1,
          },
        },
      ],
    },
  ],
}
