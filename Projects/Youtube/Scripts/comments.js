export const currentUser = 'You';

export let comments = [
  {
    id: 1,
    username: 'Alex',
    text: 'This video was really helpful!',
    likes: 15,
    dislikes: 2,
    liked: false,
    disliked: false,
    date: Date.now() - 1000000,
    replies: [
      {
        id: 11,
        username: 'Sarah',
        text: 'I agree!',
        likes: 4,
        dislikes: 1,
        liked: false,
        disliked: false,
        date: Date.now() - 500000,
        owner: false
      }
    ],
    owner: false
  },
  {
    id: 2,
    username: 'John',
    text: 'Great explanation. Thanks for sharing.',
    likes: 28,
    dislikes: 1,
    liked: false,
    disliked: false,
    date: Date.now() - 2000000,
    replies: [],
    owner: false
  }
];
