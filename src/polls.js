import models from './models';

const createAuthorsWithPolls = async () => {
  await models.Author.create(
    {
      name: 'Tim Tregubov',
      polls: [
        {
          text: 'Should I give a quiz today?',
          imageURL: 'https://home.dartmouth.edu/faculty-directory/sites/dartmouth.edu.faculty-directory/files/styles/profile_image/public/profile_square.jpg?itok=RssVGUb5',
          upvotes: 1,
          downvotes: 1000,
        },
      ],
    },
    {
      include: [models.Poll],
    },
  );

  await models.Author.create(
    {
      name: 'Mr. Pangolin',
      polls: [
        {
          text: 'Pangolins are awesome.',
          imageURL: 'https://media.giphy.com/media/uscuTAPrWqmqI/giphy.gif',
          upvotes: 0,
          downvotes: 0,
        },
      ],
    },
    {
      include: [models.Poll],
    },
  );
};

export default createAuthorsWithPolls;
