import { defineType, defineField, defineArrayMember } from 'sanity'

export const accommodation = defineType({
  type: "document",
  name: "accommodation",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: { source: "title" },
    }),
    defineField({
      type: "text",
      name: "description",
    }),
    defineField({
      type: "array",
      name: "amenities",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "amenity" }],
        }),
      ],
    }),
    defineField({
      type: "number",
      name: "price",
    }),
    defineField({
      type: "array",
      name: "images",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),

    defineField({
      title: "Address",
      type: "object",
      name: "address",
      fields: [
        {name: 'street', type: 'string', title: 'Street name'},
        {name: 'streetNo', type: 'string', title: 'Street number'},
        {name: 'city', type: 'string', title: 'City'}
      ]
    }),


    defineField({
      type: "reference",
      name: "category",
      to: [{ type: "category" }],
    }),
  ],
});

