import React, {useState, useEffect} from 'react';
import moment from 'moment';
import Link from 'next/link';
import Wrapper from '../../../compontents/Dashboard/Layouts/Wrapper';
import PrintReports from '../../../compontents/Dashboard/PrintReports';
import { getAllArticles, deleteArticle } from '@components/Dashboard/services/ArticlesDataService';

export default function Articles() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true);
  
  const heads = ['', 'Title', 'Posted date', 'Author', 'Action'];


  const data = [
    {
      name: 'Caffee Iwacu',
      date: 'Thursday 24th May 2021',
      menu: 'Espresso based, Milk-based espresso',
      link: '/article',
      imgPath: '/images/shop-image2.jpg',
    },
    {
      name: 'Caffee Iwacu',
      date: 'Thursday 24th May 2021',
      menu: 'Espresso based, Milk-based espresso',
      link: '/article',
      imgPath: '/images/shop-image2.jpg',
    },
    {
      name: 'Caffee Iwacu',
      date: 'Thursday 24th May 2021',
      menu: 'Espresso based, Milk-based espresso',
      link: '/article',
      imgPath: '/images/shop-image2.jpg',
    },
  ];

  async function handleDelete(e) {
    setLoading(true);
    const articleId = e.target.dataset.id;
    try {
      const data = await deleteArticle(articleId);
      fetchArticles()
      
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchArticles() {
    
    try {
      const data = await getAllArticles();
      setArticles(data?.articles)
      console.log(data);

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log("in the page")
    fetchArticles()
  }, [])
  

  return (
    <Wrapper>
      <div className='bg-light p--40 mt--30'>
        <div className='row show-on-print'>
          <div className='col-12 col-md-12'>
            <PrintReports reportTitle='All articles' />
          </div>
          <div className='col-12 col-md-12 table-responsive'>
            {loading ? (
              <h5 pt='0'>Loading...</h5>
            ) : (
              <table className='table'>
                <thead>
                  <tr>
                    {heads.map((h, i) => (
                      <th
                        scope='col'
                        className={
                          h.toLowerCase() === 'action' ? ' no-print ' : ''
                        }>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {articles.map((article, i) => (
                    <tr key={i}>
                      <th scope='row'>
                        <img src={article.imgPath} height='30' alt='' />
                      </th>
                      <td>{article.title}</td>
                      <td> {moment(article.createdAt).format('MMMM DD, YYYY')}</td>
                      <td>
                        {/* <Link href={article.link}>{article.menu}</Link> */}
                        {article.author}
                      </td>
                      <td className='no-print'>
                        <span>
                          <Link href={`/dashboard/admin?articleId=${article._id}`} >
                            <i className='fi fi-pencil mr--20 text-success pointer' data-id={article._id}></i>
                          </Link>
                          <i className='fi fi-thrash text-danger pointer' data-id={article._id} onClick={e=> handleDelete(e)}></i>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
