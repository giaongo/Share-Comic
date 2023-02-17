export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'destination',
      type: 'url',
      title: 'Destination',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'date',
      type: 'datetime',
      title: 'Date,',
    },
    {
      name: 'userId',
      type: 'string',
      title: 'UserId',
    },
    {
      name: 'postedBy',
      type: 'postedBy',
      title: 'PostedBy',
    },
    {
      name: 'favourite',
      type: 'array',
      title: 'Favourite',
      of: [{type: 'favourite'}],
    },
    {
      name: 'comments',
      type: 'array',
      title: 'Comments',
      of: [{type: 'comment'}],
    },
  ],
}
