import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import {AuthContext} from "../context/authContext.js";
import { Container } from "react-bootstrap";

const Single = () => {
  const [post,setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];
  const {currentUser} = useContext(AuthContext);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.log(error);
        setError("Error fetching post data");
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError("Error deleting post");
    }
  };
  
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const splitTextAfterThirdDot = (text) => {
    const sentences = text.split('.');
  
    // Split the array into groups of three sentences
    const groupedSentences = [];
    for (let i = 0; i < sentences.length; i += 4) {
      const group = sentences.slice(i, i + 4).join('.');
      groupedSentences.push(group);
    }
  
    return groupedSentences;
  };

  const paragraphs = post.text ? splitTextAfterThirdDot(post.text) : [];

  return (
    <Container className="single">
      <div className="content">
        <div>
        <div className="img">
  {post.img.startsWith('https') ? (
    <img src={post.img} alt="" />
  ) : (
    <img src={`/upload/${post.img}`} alt="" />
  )}
</div>
          <div className="user">
            {post.userImage && <img
              src={post.userImage}
              alt=""
            />}
            <div className="info">
              <span>{post.username}</span>
              <p>Posted {moment(post.date).fromNow()}</p>
            </div>
            {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img
                  src="https://logowik.com/content/uploads/images/888_edit.jpg"
                  alt=""
                />
              </Link>
              <img onClick={handleDelete}
                src="https://cdn.iconscout.com/icon/free/png-256/free-delete-2902143-2411575.png"
                alt=""
              />
            </div>
            )}
          </div>
          <h1>{post.title}</h1>
          <p className="descP">{post.desc}</p>
          {/* Render each paragraph separately */}
          {paragraphs.map((paragraph, index) => (
            <p key={index} 
                dangerouslySetInnerHTML={{ __html: paragraph.replace(/\n/g, '<br />') }} />
          ))}
        </div>
        <div class="card w-50">
          <div class="card-body p-4">
            <div class="d-flex flex-start w-100">
              <div class="w-100">
                        <h5>Add a comment</h5>
                        <ul class="rating mb-3" data-mdb-toggle="rating">
                          <li>
                            <i class="far fa-star fa-sm text-danger" title="Bad"></i>
                          </li>
                          <li>
                            <i class="far fa-star fa-sm text-danger" title="Poor"></i>
                          </li>
                          <li>
                            <i class="far fa-star fa-sm text-danger" title="OK"></i>
                          </li>
                          <li>
                            <i class="far fa-star fa-sm text-danger" title="Good"></i>
                          </li>
                          <li>
                            <i class="far fa-star fa-sm text-danger" title="Excellent"></i>
                          </li>
                        </ul>
                        <div class="form-outline">
                          <textarea class="form-control" id="textAreaExample" rows="4"></textarea>
                          <label class="form-label" for="textAreaExample">What is your view?</label>
                        </div>
                      
                        <div class="d-flex justify-content-between mt-3">
                          <button type="button" class="btn btn-success">Danger</button>
                          <button type="button" class="btn btn-danger">
                            Send <i class="fas fa-long-arrow-alt-right ms-1"></i>
                          </button>
                        </div>
              </div>

              
            </div>
          </div>
        </div>

      </div>
      <Menu cat={post.cat}/>
    </Container>
  );
};

export default Single;