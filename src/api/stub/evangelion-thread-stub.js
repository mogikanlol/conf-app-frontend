const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aliquid harum asperiores facilis, 
quisquam eaque vel nihil officia culpa ducimus voluptate temporibus in dolorum, error quos repellat voluptatibus cumque. 
Nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aliquid harum asperiores facilis, quisquam eaque 
vel nihil officia culpa ducimus voluptate temporibus in dolorum, error quos repellat voluptatibus cumque. Nam! Lorem ipsum dolor 
sit amet consectetur adipisicing elit. Laboriosam, aliquid harum asperiores facilis, quisquam eaque vel nihil officia culpa ducimus 
voluptate temporibus in dolorum, error quos repellat voluptatibus cumque. Nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Laboriosam, aliquid harum asperiores facilis, quisquam eaque vel nihil officia culpa ducimus voluptate temporibus in dolorum, 
error quos repellat voluptatibus cumque. Nam!`;


const content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Error, voluptas itaque nemo ullam rerum modi aperiam dicta quibusdam neque 
tempore quo repellendus sunt, ab reiciendis quam quisquam obcaecati alias expedita?`;

const posts = [];

for(let i = 0; i < 50; i++) {
    posts.push({
        id: 10000 + i,
        content: content
    })
};

export const evaThread = {
    id: 0,
    title: "Neon Genesis Evangelion Thread",
    image: require('@/assets/anime/Manga_Book_14_Cover.png'),
    content: lorem,
    posts: posts
};