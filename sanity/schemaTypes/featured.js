import {defineType, defineField, defineArrayMember} from 'sanity'

// to fix? is it needed?
export const featured = defineType({
  type: 'document',
  name: 'featured',
  fields: [
    defineField({
      type: 'array',
      name: 'accommodation',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'accommodation'}],
        }),
      ],
    }),
  ],
})
