import { defineType, defineField } from 'sanity';

export const subscriber = defineType({
  name: 'subscriber',
  title: 'Newsletter Subscriber',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'subscribedAt',
      title: 'Subscribed At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Unsubscribed', value: 'unsubscribed' },
        ],
      },
      initialValue: 'active',
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      description: 'Where did they subscribe from?',
    }),
  ],
  preview: {
    select: {
      title: 'email',
      subtitle: 'status',
    },
  },
});
