import { defineType, defineField } from 'sanity'

export const category = defineType({
  type: "document",
  name: "category",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      title: "Slug",
      type: "slug",
      name: "slug",
      options: {
        source: 'title',
        maxLength: 90,
      } 
    }),
  ],
});

