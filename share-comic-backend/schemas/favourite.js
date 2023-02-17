export default {
    name:'favourite',
    type:'document',
    title:'Favourite',
    fields: [
        {
            name:'userId',
            type:'string',
            title:'UserId',
        },
        {
            name:'postedBy',
            type:'postedBy',
            title:'PostedBy',
        }
    ]
}