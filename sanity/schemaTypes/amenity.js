import { defineType, defineField } from 'sanity'

export const amenity = defineType({
  type: "document",
  name: "amenity",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      title: "Slug",
      type: "slug",
      name: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: 'image',
      title: 'Image/Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    })
  ],
});

