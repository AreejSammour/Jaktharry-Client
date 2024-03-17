import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import del from "../img/del.png";
import edit from "../img/edit.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext.js";

export const TabContent2 = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_API_URL}/api/posts`;
        console.log(apiUrl);
        const res = await axios.get(apiUrl);
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const handleClick = (postId) => {
    // Navigate to the single post page with the clicked post ID
    navigate(`/post/${postId}`);
  };

  const handleWriteClick = (post) => {
    // Pass the 'post' object as an argument
    navigate("/write", { state: { currentUser, ...post } });
  };

  const handleDelete = async (post) => {
    try {
      // Ask for confirmation before deleting
      const confirmDelete = window.confirm("Are you sure you want to delete this post?");
      if (!confirmDelete) return;
  
      // Retrieve the token from local storage
      const token = localStorage.getItem('accessToken');
      console.log(token);
  
      // Create headers with the Authorization header
      const headers = { Authorization: `Bearer ${token}` };
  
      // Perform the delete operation with the Authorization header
      const apiUrl = `${process.env.REACT_APP_API_URL}/api/posts/${post.id}`;
      await axios.delete(apiUrl, { headers });
  
      // Update the UI after successful deletion
      setPosts(posts.filter(p => p.id !== post.id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };


  return (
    <div className="PostClass">
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th width="20%">Datum</th>
              <th width="40%">Titel</th>
              <th>Kategori</th>
              <th width="10%">Redigera</th>
              <th width="10%">Ta bort</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={post.id}>
                <td>{index + 1}</td>
                <td width="20%">{moment(post.date).format("LL")}</td>
                <td width="40%">
                  <Link className="titleClass" onClick={() => handleClick(post.id)}>{post.title}</Link>
                </td>
                <td>{post.cat}</td>
                <td width="10%">
                  {/* Pass 'post' as an argument */}
                  <Link to={`/write?edit=2`} state={post} onClick={() => handleWriteClick(post)}>
                    <img src={edit} alt="" className="iconClass1" />
                  </Link>
                </td>
                <td width="10%">
                  <Link to="" onClick={() => handleDelete(post)}>
                  <img src={del} alt="" className="iconClass2" />
                  </Link>
                </td>
                {/* Add your edit and delete buttons here */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const TabContent3 = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_API_URL}/api/posts?cat=riks`;
        console.log(apiUrl);
        const res = await axios.get(apiUrl);
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const handleClick = (postId) => {
    // Navigate to the single post page with the clicked post ID
    navigate(`/post/${postId}`);
  };

  const handleWriteClick = (post) => {
    // Pass the 'post' object as an argument
    navigate("/write", { state: { currentUser, ...post } });
  };

  const handleDelete = async (post) => {
    try {
      // Ask for confirmation before deleting
      const confirmDelete = window.confirm("Are you sure you want to delete this post?");
      if (!confirmDelete) return;
  
      // Retrieve the token from local storage
      const token = localStorage.getItem('accessToken');
      console.log(token);
  
      // Create headers with the Authorization header
      const headers = { Authorization: `Bearer ${token}` };
  
      // Perform the delete operation with the Authorization header
      const apiUrl = `${process.env.REACT_APP_API_URL}/api/posts/${post.id}`;
      await axios.delete(apiUrl, { headers });
  
      // Update the UI after successful deletion
      setPosts(posts.filter(p => p.id !== post.id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };


  return (
    <div className="PostClass">
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th width="20%">Datum</th>
              <th width="40%">Titel</th>
              <th>Kategori</th>
              <th width="10%">Redigera</th>
              <th width="10%">Ta bort</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={post.id}>
                <td>{index + 1}</td>
                <td width="20%">{moment(post.date).format("LL")}</td>
                <td width="40%">
                  <Link className="titleClass" onClick={() => handleClick(post.id)}>{post.title}</Link>
                </td>
                <td>{post.cat}</td>
                <td width="10%">
                  {/* Pass 'post' as an argument */}
                  <Link to={`/write?edit=2`} state={post} onClick={() => handleWriteClick(post)}>
                    <img src={edit} alt="" className="iconClass1" />
                  </Link>
                </td>
                <td width="10%">
                  <Link to="" onClick={() => handleDelete(post)}>
                  <img src={del} alt="" className="iconClass2" />
                  </Link>
                </td>
                {/* Add your edit and delete buttons here */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const TabContent4 = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_API_URL}/api/posts?cat=lans`;
        console.log(apiUrl);
        const res = await axios.get(apiUrl);
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const handleClick = (postId) => {
    // Navigate to the single post page with the clicked post ID
    navigate(`/post/${postId}`);
  };

  const handleWriteClick = (post) => {
    // Pass the 'post' object as an argument
    navigate("/write", { state: { currentUser, ...post } });
  };

  const handleDelete = async (post) => {
    try {
      // Ask for confirmation before deleting
      const confirmDelete = window.confirm("Are you sure you want to delete this post?");
      if (!confirmDelete) return;
  
      // Retrieve the token from local storage
      const token = localStorage.getItem('accessToken');
      console.log(token);
  
      // Create headers with the Authorization header
      const headers = { Authorization: `Bearer ${token}` };
  
      // Perform the delete operation with the Authorization header
      const apiUrl = `${process.env.REACT_APP_API_URL}/api/posts/${post.id}`;
      await axios.delete(apiUrl, { headers });
  
      // Update the UI after successful deletion
      setPosts(posts.filter(p => p.id !== post.id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="PostClass">
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th width="20%">Datum</th>
              <th width="40%">Titel</th>
              <th>Kategori</th>
              <th width="10%">Redigera</th>
              <th width="10%">Ta bort</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={post.id}>
                <td>{index + 1}</td>
                <td width="20%">{moment(post.date).format("LL")}</td>
                <td width="40%">
                  <Link className="titleClass" onClick={() => handleClick(post.id)}>{post.title}</Link>
                </td>
                <td>{post.cat}</td>
                <td width="10%">
                  {/* Pass 'post' as an argument */}
                  <Link to={`/write?edit=2`} state={post} onClick={() => handleWriteClick(post)}>
                    <img src={edit} alt="" className="iconClass1" />
                  </Link>
                </td>
                <td width="10%">
                  <Link to="" onClick={() => handleDelete(post)}>
                  <img src={del} alt="" className="iconClass2" />
                  </Link>
                </td>
                {/* Add your edit and delete buttons here */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const TabContent5 = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_API_URL}/api/posts?cat=kretsar`;
        console.log(apiUrl);
        const res = await axios.get(apiUrl);
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const handleClick = (postId) => {
    // Navigate to the single post page with the clicked post ID
    navigate(`/post/${postId}`);
  };

  const handleWriteClick = (post) => {
    // Pass the 'post' object as an argument
    navigate("/write", { state: { currentUser, ...post } });
  };

  const handleDelete = async (post) => {
    try {
      // Ask for confirmation before deleting
      const confirmDelete = window.confirm("Are you sure you want to delete this post?");
      if (!confirmDelete) return;
  
      // Retrieve the token from local storage
      const token = localStorage.getItem('accessToken');
      console.log(token);
  
      // Create headers with the Authorization header
      const headers = { Authorization: `Bearer ${token}` };
  
      // Perform the delete operation with the Authorization header
      const apiUrl = `${process.env.REACT_APP_API_URL}/api/posts/${post.id}`;
      await axios.delete(apiUrl, { headers });
  
      // Update the UI after successful deletion
      setPosts(posts.filter(p => p.id !== post.id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="PostClass">
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th width="20%">Datum</th>
              <th width="40%">Titel</th>
              <th>Kategori</th>
              <th width="10%">Redigera</th>
              <th width="10%">Ta bort</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={post.id}>
                <td>{index + 1}</td>
                <td width="20%">{moment(post.date).format("LL")}</td>
                <td width="40%">
                  <Link className="titleClass" onClick={() => handleClick(post.id)}>{post.title}</Link>
                </td>
                <td>{post.cat}</td>
                <td width="10%">
                  {/* Pass 'post' as an argument */}
                  <Link to={`/write?edit=2`} state={post} onClick={() => handleWriteClick(post)}>
                    <img src={edit} alt="" className="iconClass1" />
                  </Link>
                </td>
                <td width="10%">
                  <Link to="" onClick={() => handleDelete(post)}>
                  <img src={del} alt="" className="iconClass2" />
                  </Link>
                </td>
                {/* Add your edit and delete buttons here */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const TabContent7 = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_API_URL}/api/posts?cat=aktiviteter`;
        console.log(apiUrl);
        const res = await axios.get(apiUrl);
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const handleClick = (postId) => {
    // Navigate to the single post page with the clicked post ID
    navigate(`/post/${postId}`);
  };

  const handleWriteClick = (post) => {
    // Pass the 'post' object as an argument
    navigate("/write", { state: { currentUser, ...post } });
  };

  const handleDelete = async (post) => {
    try {
      // Ask for confirmation before deleting
      const confirmDelete = window.confirm("Are you sure you want to delete this post?");
      if (!confirmDelete) return;
  
      // Retrieve the token from local storage
      const token = localStorage.getItem('accessToken');
      console.log(token);
  
      // Create headers with the Authorization header
      const headers = { Authorization: `Bearer ${token}` };
  
      // Perform the delete operation with the Authorization header
      const apiUrl = `${process.env.REACT_APP_API_URL}/api/posts/${post.id}`;
      await axios.delete(apiUrl, { headers });
  
      // Update the UI after successful deletion
      setPosts(posts.filter(p => p.id !== post.id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="PostClass">
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th width="20%">Datum</th>
              <th width="40%">Titel</th>
              <th>Kategori</th>
              <th width="10%">Redigera</th>
              <th width="10%">Ta bort</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={post.id}>
                <td>{index + 1}</td>
                <td width="20%">{moment(post.date).format("LL")}</td>
                <td width="40%">
                  <Link className="titleClass" onClick={() => handleClick(post.id)}>{post.title}</Link>
                </td>
                <td>{post.cat}</td>
                <td width="10%">
                  {/* Pass 'post' as an argument */}
                  <Link to={`/write?edit=2`} state={post} onClick={() => handleWriteClick(post)}>
                    <img src={edit} alt="" className="iconClass1" />
                  </Link>
                </td>
                <td width="10%">
                  <Link to="" onClick={() => handleDelete(post)}>
                  <img src={del} alt="" className="iconClass2" />
                  </Link>
                </td>
                {/* Add your edit and delete buttons here */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const TabContent8 = () => {
  // Add functionality for Tab pane content 8
  return (
    <div>
      {/* Content for Tab pane content 8 */}
      <p>Content for Tab pane content 8</p>
    </div>
  );
};

export const TabContent9 = () => {
  // Add functionality for Tab pane content 9
  return (
    <div>
      {/* Content for Tab pane content 9 */}
      <p>Content for Tab pane content 9</p>
    </div>
  );
};

export const TabContent10 = () => {
  // Add functionality for Tab pane content 10
  return (
    <div>
      {/* Content for Tab pane content 10 */}
      <p>Content for Tab pane content 10</p>
    </div>
  );
};

export const TabContent11 = () => {
  // Add functionality for Tab pane content 11
  return (
    <div>
      {/* Content for Tab pane content 11 */}
      <p>Content for Tab pane content 11</p>
    </div>
  );
};

export const TabContent12 = () => {
  // Add functionality for Tab pane content 12
  return (
    <div>
      {/* Content for Tab pane content 12 */}
      <p>Content for Tab pane content 12</p>
    </div>
  );
};
