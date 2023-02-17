export default {
  name: 'comment',
  type: 'document',
  title: 'Comment',
  fields: [
    {
        name:'comment',
        type:'string',
        title:'Comment',
    },
    {
        name:'postedBy',
        type:'postedBy',
        title: 'PostedBy',
    }
],
}
