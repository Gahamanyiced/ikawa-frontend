/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PostsGrip({ posts }) {
  const router = useRouter();
  return (
    <div className='row'>
      {posts.map((post, i) => (
        <div key={i} className='col-12 col-md-4 pb--20'>
          <div className='post-grid-img-holder'>
            <img
              onClick={() => router.push(post.articleUrl)}
              src={post.imgPath}
              className='w-100p pointer'
              alt=''
            />
          </div>
          <h4
            onClick={() => router.push(post.articleUrl)}
            className='post-grid-head pointer'>
            {post.head}
          </h4>
          <span className='post-grid-subhead font-weight-medium fs--14 d-block mb--10'>
            {post.subHead}
          </span>
          <p>{post.text}</p>
        </div>
      ))}
      <div className='col-12 d-flex justify-content-center mt--30'>
        <Link href='/news' passHref={true}>
          <button className='btn btn-outline-dark btn-sm pl--30 pr--30 mb-1 brr-0'>
            See all articles{' '}
          </button>
        </Link>
      </div>
    </div>
  );
}
