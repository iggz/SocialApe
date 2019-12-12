let db = {
    users: [
        {
            userId: 'as;dlkfja;lskdfj;alsdfkj',
            email: 'user@email.com',
            handle: 'user',
            createAt: '2019-03-15T10:59:52.798Z',
            imageUrl: 'image/dsfasdfalskdfj/lkasjdfhlkjh',
            bio: 'Henlo, mine name is chicken',
            website: 'https://user.com',
            location: 'London, UK'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2019-11-09T02:59:07.278Z',
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: 'joxrXS1OTlW6CiZ1H1HV',
            body: 'Nice one mate',
            createdAt: '2019-11-09T02:59:07.278Z'
        }
    ],
    notification: [
        {
            recipient: 'user',
            sender: 'john',
            read: 'true | false',
            screamId: 'jxoralskdrjlasfkn',
            type: 'like | comment',
            createdAt: '2019-11-09T02:59:07.278Z'
        }
    ]
};

const userDetails = {
    //Redux data
    credentials: {
        userId: 'asasdfasdfasdfasfd',
        email: 'user@email.com',
        handle: 'user',
        createdAt: '2019-11-09T02:59:07.278Z',
        imageUrl: 'image/asdfasdfasf/asdfasdfsa',
        bio: 'Hello my name is user',
        website: 'https://user.com',
        location: 'London,UK'
    },
    likes: [
        {
            userHandle: 'user',
            screamId: 'asdfasdf23dsaf'
        },
        {
            userHandle: 'user',
            screamId: 'kjhg24kjg324'
        }
    ]
};