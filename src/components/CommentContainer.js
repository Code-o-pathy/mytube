import React from "react";

const commentData = [
  {
    name: "Akshay Saini",
    text: "Nice pic dear, cutie batao +91 me kya jode ki aap ka number ho jaaye..",
    replies: [
      {
        name: "Akshay Saini",
        text: "Nice pic dear, cutie batao +91 me kya jode ki aap ka number ho jaaye..",
        replies: [
          {
            name: "Akshay Saini",
            text: "Nice pic dear, cutie batao +91 me kya jode ki aap ka number ho jaaye..",
            replies: [],
          },
          {
            name: "Akshay Saini",
            text: "Nice pic dear, cutie batao +91 me kya jode ki aap ka number ho jaaye..",
            replies: [
              {
                name: "Akshay Saini",
                text: "Nice pic dear, cutie batao +91 me kya jode ki aap ka number ho jaaye..",
                replies: [],
              },
              {
                name: "Akshay Saini",
                text: "Nice pic dear, cutie batao +91 me kya jode ki aap ka number ho jaaye..",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Akshay Saini",
        text: "Nice pic dear, cutie batao +91 me kya jode ki aap ka number ho jaaye..",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Nice pic dear, cutie batao +91 me kya jode ki aap ka number ho jaaye..",
    replies: [
      {
        name: "Akshay Saini",
        text: "Nice pic dear, cutie batao +91 me kya jode ki aap ka number ho jaaye..",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "Nice pic dear, cutie batao +91 me kya jode ki aap ka number ho jaaye..",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Nice pic dear, cutie batao +91 me kya jode ki aap ka number ho jaaye..",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Nice pic dear, cutie batao +91 me kya jode ki aap ka number ho jaaye..",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Nice pic dear, cutie batao +91 me kya jode ki aap ka number ho jaaye..",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Nice pic dear, cutie batao +91 me kya jode ki aap ka number ho jaaye..",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex py-4 bg-gray-100 rounded-md px-4 mt-1 ">
      <img
        className="rounded-full w-[35px] h-[40px] mt-2"
        alt="user"
        src="https://imgs.search.brave.com/7JEcL0W-eLti3ltU3CvkV2arfroMm3t0K6LWfrRSkBk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcx/LnBuZ2h1dC5jb20v/dC82LzUvNC9wSkg1/ZmZ4TnZhL2VtYWls/LXVzZXItYWNjb3Vu/dC1zeW1ib2wtcGFz/c3dvcmQtYmxhY2su/anBn"
      />
      <div className="ml-3">
        <h3>{name}</h3>
        <h3>{text} </h3>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentContainer = () => {
  return (
    <div>
      <h1 className="font-bold pt-4 text-3xl mb-2">Comments</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
