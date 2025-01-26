
const rules = (ctx) => {

    ctx.telegram.sendMessage(ctx.message.chat.id, `Rules: 
          Respect and kindness: Treat each member with respect. No bullying, harassment, or insults allowed.

      Keep it positive: Maintain a positive atmosphere. Avoid negative or offensive comments that could upset others.

      No spamming: Refrain from flooding the chat with excessive messages, emojis, or irrelevant content.

      Stay on topic: Try to keep discussions relevant to the group's interests. Create separate chats for different topics if needed.

      Mindful of language and tone: Use appropriate language and tone. Avoid excessive use of caps, swearing, or offensive language.

      Confidentiality and privacy: Respect each other's privacy. Don’t share personal information or screenshots without permission.

      No discrimination: Avoid any form of discrimination based on race, gender, religion, sexual orientation, etc.

      Be mindful of timing: Consider time zones and schedules of other members before posting at odd hours or excessively during quiet times.

      Resolve conflicts respectfully: If disagreements arise, handle them respectfully and avoid escalating conflicts.

      No gossip: Refrain from spreading rumors or engaging in gossip about other members.

      Use memes and humor responsibly: While humor is welcome, ensure it doesn’t offend or hurt anyone in the group.

      Be considerate with notifications: Avoid excessive tagging or unnecessary notifications that might disturb others.

      Ask before adding new members: Check with the group before adding new members to maintain the chat's vibe.

      Respect admins/moderators: Follow instructions given by admins or moderators for the smooth running of the group.

      Be mindful of media shared: Ensure that any photos, videos, or links shared are appropriate for all members.`)

}
export default rules;
