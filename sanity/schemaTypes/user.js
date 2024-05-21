import { defineType, defineField, defineArrayMember } from 'sanity'

export const user = defineType({
  type: "document",
  name: "user",
  fields: [
    defineField({
      type: "string",
      name: "name",
    }),
    defineField({
      type: "string",
      name: "email",
    }),
    defineField({
      type: "array",
      name: "bookings",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "booking" }],
        }),
      ],
    }),
    defineField({
      type: "array",
      name: "cart",
      of: [
        defineArrayMember({
          type: "reference",
          to: [
            { type: "accommodation" },
          ],
        }),
      ],
    }),
    defineField({
      type: "address",
      name: "address",
    }),
  ],
});

